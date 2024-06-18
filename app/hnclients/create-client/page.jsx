"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateClient = () => {
    const [post, setPost] = useState({ name: "", service: "",content:""});
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

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
            const response = await fetch("/api/client/new", {
                method: "POST",
                body: JSON.stringify({
                    name:post.name,
                    image:imageBase64,
                    content:post.content,
                    service:post.service
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

    return (
        <section id="createblog" className="upl">
            <span className="formhead tg">Create Client Card</span>
            <form className="createblog" onSubmit={createBlog}>
                <input
                    type="text"
                    placeholder="Enter Client Name"
                    name="name"
                    id="title"
                    onChange={inputUpload}
                />
                <input
                    type="text"
                    placeholder="Enter Service Title"
                    name="service"
                    id="title"
                    onChange={inputUpload}
                />
                <textarea
                    name="content"
                    cols="20"
                    rows="8"
                    placeholder="Enter Service Content"
                    onChange={inputUpload}
                ></textarea>
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    name="image"
                    id="img"
                    onChange={imageUpload}
                    placeholder="Upload Client Image"
                />
                <button Nametype="submit" value={submitting ? "Submitting..." : "Submit"}>Submit</button>
            </form>
        </section>
    );
};

export default CreateClient;
