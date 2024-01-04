import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize("assigment5" , "root" , "",{
    host: "localhost",
    dialect:"mysql"

})

  export const connection = async () => {
    return  sequelize.sync({alter : true  , force : false }).then(result => {
        console.log("db connected")
        //console.log(result)
    }).catch(error => {
        console.log("fail fiald to connected ")
       // console.log(error)
    })

}
