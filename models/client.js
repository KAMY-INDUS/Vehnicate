import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema({
    name:{
        type:String,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: [true, 'content is required.'],
    },
    service: {
        type: String,
        required: [true, 'Title is required.']
    }
});

const Client = models.Client || model('Client', ClientSchema);

export default Client;
