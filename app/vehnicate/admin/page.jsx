"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
    const [post, setPost] = useState({ blog: "", title: "" });
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const [verify,setVerify] = useState(false);

    const imageUpload = (e) => {
        const img = e.target.files[0];
        setImage(img);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageBase64(reader.result);
        };
        reader.readAsDataURL(img);
    };

    const inputUpload = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const createBlog = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("/api/blog/new", {
                method: "POST",
                body: JSON.stringify({
                    image:imageBase64,
                    blog:post.blog,
                    title:post.title
                }),
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.error("Error creating blog:", error);
        } finally {
            setSubmitting(false);
        }
    };
    
    const handleSubmit=(e)=>{
        if(e.target.email.value=="vehnicatemembers@gmail.com"){
            if(e.target.password.value=="hnmembers"){
                setVerify(true);
            }
        }
    }
    return (
        <>
        {verify?
        <section id="createblog" className="upl">
            <span className="formhead tg">Create Blog</span>
            <form className="createblog" onSubmit={createBlog}>
                <input
                    type="text"
                    placeholder="Enter Blog Title"
                    name="title"
                    id="title"
                    onChange={inputUpload}
                />
                <textarea
                    name="blog"
                    cols="30"
                    rows="8"
                    placeholder="Enter Blog Content"
                    onChange={inputUpload}
                ></textarea>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="image"
                    id="image"
                    onChange={imageUpload}
                />
                <input type="submit" value={submitting ? "Submitting..." : "Submit"} />
            </form>
        </section>
        :
        <div className="verify-div">
            <span className="formhead tg">VERIFICATION</span>
            <form className="createblog" onSubmit={handleSubmit} >
                <input className="verify-email" name="email" placeholder="enter your email" required />
                <input className="verify-pass" name="password" placeholder="enter your password" spellCheck="false" required />
                <input type="submit" value="Submit" />
            </form>
        </div>}
        </>
    );
};


export default CreateBlog;
