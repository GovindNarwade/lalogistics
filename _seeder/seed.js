const env = require('dotenv')

env.config({path:"../config/.env"})

const db = require("../config/db")

//data files
const state =require("./data/state")
//model
   const StateModel = require("../model/state_model")
    const insertData = async()=>{
        try {
          db()
          await StateModel.deleteMany()
          const result = await StateModel.create(state)
          const sampleData = state.map(item => {
            return {...item}
        })
        console.log(sampleData);
        console.log(result);
      
          console.log("DATA INSERT SUCCESSFULLY".bgGreen.yellow);
        
       
           process.exit()
        } catch (error) {
            console.log("Error"+ Error);
            process.exit()
        }
      
              }


    const deleteData = async()=>{
        try {
          db()
          await StateModel.deleteMany()
           process.exit()
        } catch (error) {
            console.log("Error"+Error);
            process.exit()
        }
      
              }
    if(process.argv[2]== "-c"){
        insertData()

       
    }else if(process.argv[2]=="-d"){
        deleteData()
        console.log("Data Destroyed");

    }else{
        console.log("INVALID  OPERATION");
    }