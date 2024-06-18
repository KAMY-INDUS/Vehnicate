import Client from '@/models/client';
import { connectToDB } from '@/utils/database';

export const POST = async (req) => {
    try {
        await connectToDB();
        const data= await req.json();
        const newClient = new Client({
            name:data.name,
            image:data.image,
            content:data.content,
            service:data.service
        });

        await newClient.save();

        return new Response(JSON.stringify(newClient),{status:200});
    } catch (error) {
        console.error('Error creating blog:', error);
        return new Response({status:500});
    }
};
