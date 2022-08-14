import mongoose from "mongoose"
import Account from "../../model/account"

export const getHome = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        data: ["Hello, its Chu"],
        message: "success"
    })
}

export const createAccount = async (req, res, next) => {
    const acc = new Account({
        _id: mongoose.Types.ObjectId(),
        username: "pikachu",
        password: "pikachuPassword",
    })

    try {
        const newAcc = await acc.save();
        res.status(200).json({
            status: "OK",
            data:[newAcc],
            message:"Create account successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "FAILED",
            message: error.message
        })
    }
}

export const getAccountList = async (req, res, next) => {
    try {
        const accountList = await Account.find({})
        res.status(200).json({
            status: "OK",
            data: accountList,
            message:"get account list successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "FAILED",
            message: error.message
        })
    }
}