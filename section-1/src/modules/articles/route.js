import { Router } from 'express';
import ArticleService from './service';
import ArticleController from './controller';

const basePath = `/articles`;
const setPath = (path) => `${basePath}/${path}`;

const routes = Router();

const controller = ArticleController({
  articleService: ArticleService(),
});

routes
  .route(basePath)
  .post(controller.insertArticle)
  .get(controller.getArticles);

routes
  .route(setPath(':id'))
  .get(controller.getArticle)
  .put(controller.updateArticle)
  .delete(controller.removeArticle);

export default routes;
