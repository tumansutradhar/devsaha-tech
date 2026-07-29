import { getSubmissions } from '@/actions/admin';
import DashboardClient from '@/components/admin/DashboardClient';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  let submissions: any[] = [];
  try {
    submissions = await getSubmissions();
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      redirect('/rds/admin/login');
    }
  }

  // Convert potential Postgres timestamps (Date objects) to serializable strings or numbers for the client
  const serializedSubmissions = submissions.map(sub => ({
    ...sub,
    created_at: new Date(sub.created_at).toISOString(),
    id: sub.id.toString(),
  }));

  return <DashboardClient initialSubmissions={serializedSubmissions} />;
}
