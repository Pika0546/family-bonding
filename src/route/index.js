import express from 'express';
import { auth } from '../middleware/auth';
import Account from '../model/account';
import accountRouter from './account';

export const router = (app) => {
    app.use('/account', accountRouter);
    app.use(auth)
    //for testing purpose
    app.use('/', async (req, res, next) => {
        try {
            const data = await Account.find({});
            res.status(200).json({
                status: "OK",
                data: data,
                message: "Query ok"
            })
        } catch (error) {
            res.status(500).json({
                status: "SERVER ERROR",
                message: error.message
            })
        }
    })
}