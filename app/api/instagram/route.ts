/*import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    return NextResponse.json(
      { error: 'Instagram credentials not configured' },
      { status: 500 }
    );
  }

  try {
    // Son 4 medya paylaşımını çek
    const response = await fetch(
      `https://graph.instagram.com/${accountId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=4&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error('Instagram API request failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Instagram API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}*/