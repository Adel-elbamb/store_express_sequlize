import {  DataTypes, HasMany } from "sequelize";
import {sequelize}  from './connection.js'

const noteModel = sequelize.define('note' , {
    title : {
        type : DataTypes.STRING , 
        allowNull: false

       
    },
    contant : {
        type : DataTypes.STRING ,
        allowNull : false
    }
})


export default noteModel 