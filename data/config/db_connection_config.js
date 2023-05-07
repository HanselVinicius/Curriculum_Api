import db from './mongodb_config.js';

function dbConnect(){
    db.on("error",console.error.bind(console,"MongoDb connection error: "))
    db.once("open", () => {
        console.log("Connected to MongoDb")
    })

}


export default dbConnect;