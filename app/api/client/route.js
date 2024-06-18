import Client from '@/models/client';
import { connectToDB } from '@/utils/database';

export const GET = async (req) => {
    try {
        await connectToDB();
        const clients = await Client.find({});
        return new Response(JSON.stringify(clients), {
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