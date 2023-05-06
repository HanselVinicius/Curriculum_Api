import express from "express";
import contato from "../data/imultables/contato_schema.js";

const router = express.Router();

router.get("/contato", (req,res)=>{
    try{
    const contatoResult = contato;
    res.status(200).send(contatoResult)     
    }catch(err){
        res.status(500).json({message:err.message})
    }
})


export default router;