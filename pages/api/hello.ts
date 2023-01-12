// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(
  es: NextResponse
) {
  return new Response(JSON.stringify({ name: 'John Doe' }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
