import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Phonenum: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ["VISITOR", "EXHIBITOR", "ADMIN"],
        default: "VISITOR"
    },
    //following not required only used for exhibitor role.
     companyName: { 
        type: String,
        trim: true,
    },
    businessCategory: {
        type: String,
        trim: true,
    }
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);