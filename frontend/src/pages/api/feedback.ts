import type { APIRoute } from 'astro';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  useCdn: false,
  token: import.meta.env.SANITY_WRITE_TOKEN, // Yeh server-side hidden rahega
  apiVersion: '2024-04-27',
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    await client.create({
      _type: 'feedback',
      name: data.name,
      message: data.message,
      isApproved: false,
    });

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
};