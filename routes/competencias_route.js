import express from 'express'
import competences from '../data/multables/competencias_schema.js'


const router = express.Router();

router.get("/competences",async(req,res)=>{
    try{
        const competencesResult = await competences.find();
        res.status(200).send(competencesResult)
    }catch(err){
        res.status(500).json({message:err.message})
    }
});


export default router;