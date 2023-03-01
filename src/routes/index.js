import tiketRoutes from "./tiket.routes";
import userRoutes from "./user.routes";
const routes = app => {
    userRoutes(app)
    tiketRoutes(app)
}
export default routes

