export const getHome = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        data: ["Hello, its Chu"],
        message: "success"
    })
}