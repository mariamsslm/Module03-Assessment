import express from "express"
import { createArticle , getArticle  , getArticleById , updateArticle,deleteArticle} from "../controllers/articleController.js"


const route = express.Router();


route.post('/create',createArticle);
route.get('/read',getArticle);
route.get('/read',getArticleById)
route.put('./update',updateArticle)
route.delete("/delete", deleteArticle)



export default route;