import Blog from '@/models/blog';
import { connectToDB } from '@/utils/database';
import { NextResponse } from 'next/server';
export const revalidate = 0;
export const GET = async (req) => {
    try {
        await connectToDB();
        const blogs = await Blog.find({});
        return new NextResponse(JSON.stringify(blogs), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return new Response("Failed to fetch all blogs", {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};