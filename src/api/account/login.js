import Account from "../../model/account"

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const response = await Account.findByCredentials(email, password);
        if (!response.data) {
            return res.status(401).send({
                status: "AUTHENTICATE",
                message: response.message
            })
        }
        const token = await response.data.generateAuthToken()
        res.status(200).json({
            status: "OK",
            data:[{
                account: response.data,
                token: token,
            }],
            message: "LOGIN SUCCESS"
        })
    } catch (error) {
        res.status(400).send(error)
    }
}