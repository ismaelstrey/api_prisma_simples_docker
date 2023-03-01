import { create, get, getId, update } from "../controllers/tiket.controller";

const tiketRoutes = app => {
    app.post("/tiket", create)
    app.get("/tiket", get)
    app.get("/tiket/:id", getId)
    app.patch("/tiket/:id", update)
}
export default tiketRoutes