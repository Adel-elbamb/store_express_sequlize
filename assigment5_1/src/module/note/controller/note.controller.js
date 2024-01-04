import noteModel  from "../../../DB/note.model.js"
import usermodel from "../../../DB/user.model.js"

 export const addNote = async (req,res,next) => {  // addnote  
     try {


        const {title , contant , UserId} = req.body 
        const note = await noteModel.create({title , contant , UserId}) 
        return res.json({message : "done" , note })
        
        
   
     } catch (error) {
            if(error.original?.errno == 1452) {
        return res.json({message : " invalid id "})
      }
      return res.json ({message : " catch error" , error})
     }
 }

  //update 
  export const updateNote = async (req,res,next) => {
    try {
        const {id} =req.params
        const {title , contant , UserId} = req.body 
        const note = await  noteModel.update({title , contant , UserId},
            {where: {
                id,
                UserId
            }})
            return  note[0]?res.json ({message: 'done' , note}) : res.json ({message : " id or userId not vaild " })
    } catch (error) {
        return res.json({message : " error" , error})
    }
  }


  // delete
  export const deleteNote = async (req,res,next) => {
    try {
        const {id} =req.params
        const{UserId} = req.body
        const note = await  noteModel.destroy(
            {where: {
                id,
                UserId
            }})
            return  note[0]?res.json ({message: 'done' , note}) : res.json ({message : " id  invaild " })
    } catch (error) {
        return res.json({message : " error" , error})
    }
  }


  //  get all notes 
   
  export  const allNotes = async (req,res,next) => {
     try {
        const notes =  await noteModel.findAll({})
        return res.json({message : "done" , notes})
     } catch (error) {
        return res.json({message : ' error' , error})
     }
  }

  //get all note with user 

  export   const allWithUser =  async (req,res,next) => {
    const note = await noteModel.findAll({
        include : {
            model : usermodel
        }
    })
    return res.json({message : "done" , note })
  }