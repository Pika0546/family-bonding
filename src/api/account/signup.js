import Account from "../../model/account"


export const createAccount = async (req, res, next) => {
    try {
        const account = new Account(req.body);
        await account.save();
        const token = await account.generateAuthToken()
        res.status(201).send({
            status: "OK",
            data:[{
                account,
                token,
            }],
            message: "Create account successfully"
        })
    } catch (error) {
        res.status(400).send({
            status: "FAIL",
            message: error.message
        })
    }
}