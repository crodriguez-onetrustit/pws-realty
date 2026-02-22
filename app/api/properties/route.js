import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'properties.json');

const defaultProperties = [
  {
    id: '1',
    title: 'Luxury Downtown Penthouse',
    address: '123 Park Avenue, Jersey City, NJ',
    city: 'Jersey City',
    price: 4500,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    featured: true,
    description: 'Stunning penthouse with panoramic city views...'
  },
  {
    id: '2',
    title: 'Modern Waterfront Loft',
    address: '456 River Road, Hoboken, NJ',
    city: 'Hoboken',
    price: 3800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    featured: true,
    description: 'Beautiful loft with stunning waterfront views...'
  },
  {
    id: '3',
    title: 'Elegant Suburban Estate',
    address: '789 Oak Avenue, Edison, NJ',
    city: 'Edison',
    price: 5200,
    type: 'rent',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    featured: false,
    description: 'Spacious family home in quiet neighborhood...'
  },
  {
    id: '4',
    title: 'Historic Brownstone',
    address: '321 Summit Ave, Jersey City, NJ',
    city: 'Jersey City',
    price: 4200,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    featured: true,
    description: 'Beautiful brownstone in historic district...'
  },
  {
    id: '5',
    title: 'Garden Colonial Home',
    address: '555 Maple Lane, New Brunswick, NJ',
    city: 'New Brunswick',
    price: 3500,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    featured: false,
    description: 'Charming colonial with beautiful garden...'
  },
  {
    id: '6',
    title: 'Luxury High-Rise Condo',
    address: '888 Harbor View, Jersey City, NJ',
    city: 'Jersey City',
    price: 5800,
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800',
    featured: false,
    description: 'Modern high-rise with premium amenities...'
  }
];

function ensureDataDir() {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify(defaultProperties, null, 2));
  }
}

function getProperties() {
  ensureDataDir();
  const data = fs.readFileSync(dataFile, 'utf8');
  return JSON.parse(data || '[]');
}

function saveProperties(properties) {
  ensureDataDir();
  fs.writeFileSync(dataFile, JSON.stringify(properties, null, 2));
}

// GET all properties
export async function GET() {
  const properties = getProperties();
  return NextResponse.json(properties);
}

// POST new property
export async function POST(request) {
  const body = await request.json();
  
  const newProperty = {
    id: Date.now().toString(),
    title: body.title || '',
    address: body.address || '',
    city: body.city || '',
    price: parseInt(body.price) || 0,
    type: body.type || 'rent',
    bedrooms: parseInt(body.bedrooms) || 0,
    bathrooms: parseInt(body.bathrooms) || 0,
    sqft: parseInt(body.sqft) || 0,
    image: body.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    featured: body.featured || false,
    description: body.description || '',
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  const properties = getProperties();
  properties.unshift(newProperty);
  saveProperties(properties);
  
  return NextResponse.json({ success: true, property: newProperty });
}
