import jwt from 'jsonwebtoken'
import Account from '../model/account'


export const auth = async (req, res, next) => {
    
    try {
        if(!req.header('Authorization')){
            res.status(401).send({
                status: "AUTHENTICATE",
                message:"AUTHENTICATE MISSING"
            })
        }
        else{
            const token = req.header('Authorization').replace('Bearer ', '')
            const data = jwt.verify(token, process.env.JWT_KEY)
            const account = await Account.findOne({ _id: data._id, 'tokens.token': token })
            if (!account) {
                res.status(401).send({
                    status: "AUTHENTICATE",
                    message:"AUTHENTICATE MISSING"
                })
            }
            else{
                req.account = account
                req.token = token
                next()
            }
        }
    } catch (error) {
        res.status(401).send({
            status: "AUTHENTICATE",
            message:error.message,
        })
    }
}