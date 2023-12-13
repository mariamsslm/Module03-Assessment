import { Sequelize } from 'sequelize';
import 'dotenv/config'
import Article from './article.js'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const ArticleModal = Article(sequelize,Sequelize)
const db = {
  sequelize,
  Sequelize,
  ArticleModal
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



export default db;
