import Blog from '@/models/blog';
import { connectToDB } from '@/utils/database';
import { error } from 'console';

export const POST = async (req) => {
    try {
        await connectToDB();
        const data= await req.json();
        const newBlog = new Blog({
            image:data.image,
            blog:data.blog,
            title:data.title
        });

        await newBlog.save();

        return new Response(JSON.stringify(newBlog),{status:200});
    } catch (error) {
        console.error('Error creating blog:', error);
        return new Response({status:500});
    }
};
