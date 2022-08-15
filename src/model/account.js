import mongoose from "mongoose";
import  jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { BCRYPT_SALT } from "../config";

const AccountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

AccountSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, BCRYPT_SALT)
    }
    next()
})

AccountSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

AccountSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const account = await Account.findOne({ email} )
    if (!account) {
        return {
            data: null,
            message: "Tài khoản không tồn tại"
        }
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        return {
            data: null,
            message: "Mật khẩu không chính xác"
        }
    }
    return {
        data: account,
    }
}

const Account = mongoose.model('Account', AccountSchema);

export default Account;