import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'messages.json');

function ensureDataDir() {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
  }
}

function getMessages() {
  ensureDataDir();
  const data = fs.readFileSync(dataFile, 'utf8');
  return JSON.parse(data || '[]');
}

function saveMessages(messages) {
  ensureDataDir();
  fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));
}

// GET all messages
export async function GET() {
  const messages = getMessages();
  return NextResponse.json(messages);
}

// POST new message
export async function POST(request) {
  const body = await request.json();
  
  const newMessage = {
    id: Date.now().toString(),
    name: body.name || '',
    email: body.email || '',
    phone: body.phone || '',
    subject: body.subject || '',
    message: body.message || '',
    propertyId: body.propertyId || null,
    read: false,
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  const messages = getMessages();
  messages.unshift(newMessage);
  saveMessages(messages);
  
  return NextResponse.json({ success: true, message: newMessage });
}
