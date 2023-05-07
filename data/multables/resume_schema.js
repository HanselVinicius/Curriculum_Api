import mongoose from "mongoose";


const resumeSchema = new mongoose.Schema(
    {
        experiencia:{
            type:[String],
            required:true,
        },
        resumo:{type:String},
        descricao:{type:String},
        formacao:{type:String},
    },{
        versionKey:false,
    }
)


const resume = mongoose.model("resume",resumeSchema);
export default resume;