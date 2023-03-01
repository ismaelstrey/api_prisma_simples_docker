const express = require("express");
const app = express();
const port = process.env.PORT_SERVER || 3001


// app.use(express.json())
app.listen(port, () => console.log(`http://localhost:${port}`))
app.get("/", (req, res, next) =>

    res.send("Api rodando server")
)
