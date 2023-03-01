import mainRoutes from "./main.routes";
import tiketRoutes from "./tiket.routes";
import userRoutes from "./user.routes";
const routes = app => {
    mainRoutes(app)
    userRoutes(app)
    tiketRoutes(app)
}
export default routes

