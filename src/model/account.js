import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    password: { 
        type: String,
        required: true,
    },
})

const Account = mongoose.model('Account', AccountSchema);

export default Account;