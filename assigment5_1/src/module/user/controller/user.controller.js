import usermodel from "../../../DB/user.model.js";
 import { Op } from 'sequelize';

export const addUser =  async (req,res,next) => {  //signUp 
   try {
     const {name,email,password,age} = req.body
    // const selectUser = await usermodel.findAll({}, 
    //     { where : { email : email }}
    // )
    // if(selectUser.lenght) {
    //   return res.json({message : " email already exit "})
    // }
    
    const user =  await usermodel.create({name,email,password,age})
    return res.json({message : "done" , user})
   } catch (error ) {
    if (error.parent?.errno == 1062)
    return res.json({message : "email al ready exist " })
   }
   return res.json({message : "error" , error  })
}
 // signIN 

 export const signIN =  async (req,res, next) => {
    try {
    const user = await usermodel.findOne({
      where: {
        email: req.body.email,
        password : req.body.password
      },
    });
    
    if (!user) {
      return res.json({ message: 'Invalid email or password' });
    }
    return res.json({message : " user can be sigin in " })
   
   } catch(error) {
    return res.json({message : "error" ,error })
 }} 



// update user 
export const  updateUser =  async (req,res,next) => {
   try {
    const {id} = req.params
    const {name,email,password,age} =req.body
    const user =  await usermodel.update({name,email,password,age}, {
        where: {
            id 
        }
    })
    return user[0] ? res.json({message : "done " , user }) : res.json ({message : "invalid id "})
   } catch (error ) {
       return res.json({message : " eror" , error})
   }

}

// delete user 

export const deleteUser = async (req,res,next) => {
    try {
      const {id} = req.params 
      const user = await usermodel.destroy({
          where : {
              id
          }
      }) 
      return user[0] ? res.json({message : "done" , user}) : res.json({message : " invailed id " , user })
    } catch (error) {
      return res.json({message : "error" ,error })
    }
  }


  //find all user 


  export const  allUser = async (req,res,next) => {
    try {
        const {id} = req.params
        const user = await usermodel.findAll({})
        return res.json({message : " done " , user })
    } catch (error) {
        return res.json({message : "error" , error })
    }
  }
//// search for users by list of ids => using IN
  export const  oneUser  = async (req,res,next) => {  
    try {
        const {id} = req.params
        const user = await usermodel.findOne({},
         {   where : {
            id 
         }})
         return user[0] ? res.json({message : "done" , user}) : res.json({message : " invailed id "  })
    } catch (error) {
        return res.json({message : "error" , error })
    }
  }
  //

  // usermodel.findAll({
//   where: {
//     name: {
//       [Op.like]: 'a%',
//     },
//     age: {
//       [Op.lt]: 30,
//     },
//   },
// });

 // search for user where his name start with "a"
//and age less than 30 => using like for characters
  export const searchUserstartA =  async (req,res,next) =>  {

   try {
    const searchCriteria = req.body;
 
    const whereClause = {};
    
    if (searchCriteria.name) {
      whereClause.name = {
        [Op.like]: `${searchCriteria.name}%`,
        
      };
    }
    
    if (searchCriteria.age) {
      whereClause.age = {
        [Op.gt]: `${searchCriteria.age}`,
      };
    }
    
    const users = await usermodel.findAll({
      where: whereClause,
    });
    return res.json({message  : "done" , users})
   } catch (error) {
    return res.json({meassage : "error" ,error})
   }
 } 


    export const searchBetween = async (req,res,next) => {
    //search for user where his age is between 20 and 30

   try {
    const searchCriteria = req.body;
 
    const whereClause = {};
    
    if (searchCriteria.age) {
      whereClause.age = {
        [Op.between]: searchCriteria.age,
        // [Op.gt]: searchCriteria.age,
        
      };
    }
    
    const users = await usermodel.findAll({
      where: whereClause,
    });

    return res.json({message : "done" , users})
   } catch (error) {
    return res.json({message : " error" , error})
   }
 
  }

   //get the 3 oldest users
  export const olderUser = async (req,res,next) => {
    try {
      const users = await usermodel.findAll({
        order: [[sequelize.fn('max', sequelize.col('age')),'DESC']],   //['age', 'DESC']
        limit: 3,
      });
      return res.json({message : "done " , users})
    } catch (error) {
      return res.json({message : "error" , error})
    }
  }


