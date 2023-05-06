import inf_pessoais from "../data/imultables/pessoais_schema.js";
import express  from "express";


const router = express.Router();


router.get("/pessoais" ,(req,res)=>{
    try{
        const pessoaisResult  = inf_pessoais;
        res.status(200).send(pessoaisResult);
    }catch(err){
        res.status(500).send({message:err.message})
    }
})

export default router;