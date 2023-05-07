import express from "express";
import contatoRouter from "./routes/contato_route.js"
import pessoaisRouter from "./routes/pessoais_route.js"
import dbConnect from "./data/config/db_connection_config.js"


const app = express()
const port = process.env.PORT || 3000;
dbConnect()

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})
app.use(express.json({ limit: "200mb",extended: true }));
app.use("/",contatoRouter)
app.use("/",pessoaisRouter)

// TODO iniciar as rotas multaveis como competencias,expeciencia,formação academica etc


