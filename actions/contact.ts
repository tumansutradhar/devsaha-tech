'use server';

import sql, { initDb } from '@/lib/db';

export async function submitContactForm(formData: FormData) {
  try {
    // Initialize DB to ensure table exists (it's safe to call multiple times as it uses IF NOT EXISTS)
    await initDb();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const projectType = formData.get('projectType') as string;
    const phone = formData.get('phone') as string;
    let message = formData.get('message') as string;
    
    // Provide a default for budget since it was removed from the UI but is NOT NULL in DB
    const budget = (formData.get('budget') as string) || 'Not specified';

    if (phone) {
      message = `Phone: ${phone}\n\n${message}`;
    }

    if (!name || !email) {
      return { success: false, error: 'Name and Email are required.' };
    }

    // Insert into Supabase database
    await sql`
      INSERT INTO submissions (name, email, project_type, budget, message)
      VALUES (${name}, ${email}, ${projectType}, ${budget}, ${message})
    `;

    // Generate mock confirmation email
    console.log(`
      ================================================
      MOCK EMAIL CONFIRMATION
      To: ${email}
      Subject: We received your project inquiry!
      
      Hi ${name},
      
      Thank you for reaching out to DevSaha Tech. We have received your details regarding the ${projectType} project.
      Ranadeb will personally review your project and get back to you within 24 hours.
      
      Best regards,
      The DevSaha Tech Team
      ================================================
    `);

    return { success: true };
  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return { success: false, error: 'Internal Server Error. Please try again later.' };
  }
}
