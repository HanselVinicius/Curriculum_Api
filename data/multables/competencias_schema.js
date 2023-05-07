import mongoose from "mongoose";



const competenciasSchema = new mongoose.Schema(
    {

        competences:{
            type:[String],
            required:true,
        },
        certificacoes:{
            type:[String],
            required:true,
        },
        
    },{
        versionKey: false,
    }
)


const competences = mongoose.model("competences",competenciasSchema);

export default competences;