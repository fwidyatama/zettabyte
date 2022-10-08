import { Router } from 'express';
import CommentService from './service';
import CommentController from './controller';

const basePath = `/comments`;
const setPath = (path) => `${basePath}/${path}`;

const routes = Router();

const controller = CommentController({
  commentService: CommentService(),
});

routes.route(basePath).post(controller.insertComment);

routes
  .route(setPath(':id'))
  .get(controller.getComment)
  .put(controller.updateComment)
  .delete(controller.removeComment);

export default routes;
