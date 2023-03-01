

const mainRoutes = app => {
    app.get("/", (req, res) =>
        res.status(200).json({ title: "Api rodando" })
    )

}
export default mainRoutes