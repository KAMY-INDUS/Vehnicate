import Blog from "@/models/blog";
import { connectToDB } from "@/utils/database";

export const GET = async(req,{params})=>{
    try{
        await connectToDB();

        const blog = await Blog.findById(params.id)
        if(!blog) return new Response("Blog Not Found",{status:404});
        return new Response(JSON.stringify(blog),{status:200})
    }
    catch(error){
        return new Response("Internal Server Error",{status:500})
    }
}