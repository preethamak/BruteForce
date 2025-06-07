import { NextResponse } from 'next/server';

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true";

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch crypto data');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch crypto data' },
      { status: 500 }
    );
  }
} 