import Author from '@/database/author';
import { connectToDatabase } from '@/lib/mongoose';
import { IAuthor } from '@/types';
import { NextResponse } from 'next/server';

// Create a new author
export async function POST(req: Request) {
  await connectToDatabase();
  const body: IAuthor = await req.json();
  const name = body.name;

  const isExist = await Author.findOne({ name });
  if (isExist) {
    return NextResponse.json({
      success: false,
      message: 'User with that name is already exist in the system',
    });
  }

  const author = await Author.create(body);
  return NextResponse.json({ success: true, authorId: author._id });
}

// Get all authors
export async function GET() {
  await connectToDatabase();

  const authors = await Author.find();
  return NextResponse.json(authors);
}
