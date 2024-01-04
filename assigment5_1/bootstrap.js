import  {connection} from  './src/DB/connection.js'
// import userRouter from './src/module/user/router.user.js'
 import userRouter from './src/module/user/user.router.js'
 import noteRouter from './src/module/note/note.router.js'
function bootstrap (app, express) {

    app.use(express.json())
    connection() ;
    // console.log("adel")
     app.use('/user' , userRouter)
    app.use ('/note' , noteRouter)
     // promise  solve problem call back hell
      // async and awit solve  Asncronize 
      
}

export default bootstrap