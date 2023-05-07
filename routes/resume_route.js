import express from 'express'
import resume from '../data/multables/resume_schema.js'

const router = express.Router();


router.get("/resume",async(req,res)=>{
    try {
        const resumeResult = await resume.find();
        res.status(200).send(resumeResult)
    } catch (err) {
        res.status(500).json({message:err.message});
    }
})

router.post("/resume", async (req,res)=>{
    try {
        let resumeToSave = new resume(req.body)
        const result = await resumeToSave.save()
        res.status(201).json(result)
    
    } catch (err) {
        res.status(500).json({message:err.message})

    }
})


export default router;