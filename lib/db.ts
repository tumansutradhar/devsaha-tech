import postgres from 'postgres';
import bcrypt from 'bcryptjs';

// Ensure the environment variables are available
const sql = postgres({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT) || 5432,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: 'require',
  max: 5, // Set max connections to avoid exhausting connection limits
});

export async function initDb() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS submissions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        project_type TEXT NOT NULL,
        budget TEXT NOT NULL,
        message TEXT,
        contacted BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS admin_users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Ensure the primary admin exists
    const adminEmail = 'ranadebsaha2002@gmail.com';
    const passwordHash = bcrypt.hashSync('Rds1234@', 10);
    await sql`
      INSERT INTO admin_users (email, password_hash)
      VALUES (${adminEmail}, ${passwordHash})
      ON CONFLICT (email) DO NOTHING
    `;

    console.log('Database tables initialized successfully.');
  } catch (error) {
    console.error('Error initializing database table:', error);
  }
}

export default sql;
