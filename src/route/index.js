import SiteRouter from '../component/Site/SiteRoute'


export const router = (app) => {
    app.use("/", SiteRouter)
}