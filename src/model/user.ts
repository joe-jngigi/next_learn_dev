import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    user_email:{
        type: String,
        required: true,
    },
    user_password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
})

const User = models.User || mongoose.model('User', userSchema)

export default User