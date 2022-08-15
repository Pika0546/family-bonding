export const logout = async (req, res, next) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.status(200).send({
            status: "OK",
            message: "LOGOUT SUCCESSFULLY"
        })
    } catch (error) {
        res.status(500).send(error)
    }
}