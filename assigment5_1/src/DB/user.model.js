import {  DataTypes, HasMany } from "sequelize";
import {sequelize}  from './connection.js'
import noteModel from "./note.model.js";
// import productModel from "./product.model.js";

const  usermodel =sequelize.define('User' , {
   name : {
    type : DataTypes.STRING,
    allowNull : false 
   },
   email : {
     type : DataTypes.STRING,
     allowNull : false ,
     unique : true 
   },
   password : {
    type : DataTypes.STRING,
    allowNull:false
   },
   age :{
    type : DataTypes.INTEGER
   }

},
{
    timestampes : false 
}
)


// A.hasOne(B); // A HasOne B
// A.belongsTo(B)
usermodel.hasMany (noteModel , {
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE'
})
noteModel.belongsTo(usermodel , {
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE'
})

export default usermodel 