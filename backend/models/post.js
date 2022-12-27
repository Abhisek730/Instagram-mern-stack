const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        require: true
    },
    likes: [{ type: ObjectId, ref: "USER" }],
    comments: [{
        comment: { type: String },
        postedBy: { type: ObjectId, ref: "USER" }
    }],
    postedBy: {
        type: ObjectId,
        ref: "USER"
    }
}, { timestamps: true })

mongoose.model("POST", postSchema)