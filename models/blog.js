import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
    image: {
        type: String,
    },
    blog: {
        type: String,
        required: [true, 'Blog content is required.'],
    },
    title: {
        type: String,
        required: [true, 'Title is required.']
    }
});

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;
