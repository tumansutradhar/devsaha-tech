'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import sql, { initDb } from '@/lib/db';
import bcrypt from 'bcryptjs';

const COOKIE_NAME = 'rds_admin_session';

export async function loginAdmin(formData: FormData) {
  await initDb(); // Ensure tables exist

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const users = await sql`SELECT * FROM admin_users WHERE email = ${email}`;
    if (users.length > 0) {
      const user = users[0];
      const isValid = bcrypt.compareSync(password, user.password_hash);

      if (isValid) {
        // Set cookie
        const cookieStore = await cookies();
        cookieStore.set(COOKIE_NAME, 'authenticated', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 1 week
        });

        return { success: true };
      }
    }
  } catch (error) {
    console.error('Login error:', error);
  }

  return { success: false, error: 'Invalid credentials' };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect('/rds/admin/login');
}

export async function checkAdminAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME);
  return token?.value === 'authenticated';
}

export async function getSubmissions() {
  const isAuthenticated = await checkAdminAuth();
  if (!isAuthenticated) {
    throw new Error('Unauthorized');
  }

  try {
    await initDb(); // Ensure table exists to fix "relation does not exist" error
    const submissions = await sql`
      SELECT * FROM submissions ORDER BY created_at DESC
    `;
    return submissions;
  } catch (error) {
    console.error('Failed to fetch submissions:', error);
    return [];
  }
}

export async function toggleContactedStatus(id: string, currentStatus: boolean) {
  const isAuthenticated = await checkAdminAuth();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    await sql`
      UPDATE submissions
      SET contacted = ${!currentStatus}
      WHERE id = ${id}
    `;
    return { success: true };
  } catch (error) {
    console.error('Failed to toggle status:', error);
    return { success: false, error: 'Failed to update status' };
  }
}

export async function deleteSubmission(id: string) {
  const isAuthenticated = await checkAdminAuth();
  if (!isAuthenticated) {
    return { success: false, error: 'Unauthorized' };
  }

  try {
    await sql`
      DELETE FROM submissions WHERE id = ${id}
    `;
    return { success: true };
  } catch (error) {
    console.error('Failed to delete submission:', error);
    return { success: false, error: 'Failed to delete submission' };
  }
}
