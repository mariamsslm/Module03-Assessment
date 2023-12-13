import db from "../models/index.js";
const { ArticleModal } = db;

//create article
export const createArticle = async (req, res) => {
  const { title, category, body, author, image } = req.body;

  if (!title || !category || !body || !author || !image) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const newArticle = await ArticleModal.create({
      title,
      category,
      body,
      author,
      image,
    });
    if (article.length > 0)
      res.status(200).json({ message: "create article", Articles: newArticle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get all article
export const getArticle = async (req, res) => {
  try {
    const article = await ArticleModal.findAll();

    if (article) {
      res.status(200).json({ Articles: article });
    } else {
      console.log("Article not found");
      res.status(404).json({ error: "Article not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get article by id
export const getArticleById = async (req, res) => {
  const id = req.body.id;

  try {
    const article = await ArticleModal.findById({ _id: id });
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: "article not found" });
    }
  } catch (error) {
    console.error("Error ", error);
    res.status(500).json({ error: "Server error" });
  }
};

//update article

export const updateArticle = async (req, res) => {
  const { title, category, body, author, image } = req.body;
  const id = req.body.id;
  if (!title || !category || !body || !author || !image)
    return res.status(400).json({ mssg: "fields are required" });
  try {
    const updateArticle = await ArticleModal.findByIdAndUpdate(
      { _id: id },
      { title, category, body, author, image }
    );

    if (!updateArticle)
     res.status(404).json(`article ${id} is not found`);
    else 
    res.status(200).json(`article${id} is edited successsfuly`);
  } catch (error) {
    console.error("Error updating article", error);
    res.status(500).json({ error: "Internel server Error" });
  }
};

//delete article
export const deleteArticle = async (req, res) =>{
    const id = req.params.id;
    try{
        const deleted=await ArticleModal.findOneAndDelete({_id : id})
        if(deleted)
        res.status(400).json(`article deleted successfuly`);
    }catch(error){
        console.error('error',error)
        res.status(500).json({error:"Internel server Error"})
    }
}
