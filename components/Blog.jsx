import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
    const router = useRouter();
    const blogTap=(id)=>{
        router.push(`blog/${id}`);
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/api/blog');
            const data = await res.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, []);
  return (
    <section id='blog'>
        <h1 className='tg'>Blog</h1>
        <div className="blogs">
        {blogs.map((blog)=>(
            <div className="blog" key={blog._id} onClick={()=>blogTap(blog._id)}>
                <span className='blogh'>{blog.title}</span>
                {blog.image && <Image src={blog.image} height={200} width={200} className='blogimg'/>}
                <span className='blogmes'>
                    {blog.image?(((blog.blog).length)>80?`${blog.blog.slice(0,80)} . .  . Read More`:blog.blog):(((blog.blog).length)>200?`${blog.blog.slice(0,200)}...Read More`:blog.blog)}
                </span>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Blog