import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

type User = {
  username: string;
  password: string;
};

type Credentials = {
  users: User[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  const dbPath = path.join(process.cwd(), 'src/data/db.json');

  try {
    const fileContent = fs.readFileSync(dbPath, 'utf-8');
    const credentials: Credentials = JSON.parse(fileContent);

    const user = credentials.users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error reading db file:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
