import express  from 'express';
import "dotenv/config.js"
import db from './models/index.js'
import route from './routes/articleRoute.js'

const app = express();
const port = process.env.PORT


app.use('/api/article',route);





app.listen(port,async()=>{
    console.log(`connecting with${port}`)
    console.log("connecting to the DB")
  await db.sequelize.sync()
  console.log("connected")
})