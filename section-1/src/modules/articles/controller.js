import { errorResponse, successResponse } from '../../helper/http-response';
import { StatusCodes } from 'http-status-codes';

const Controller = (service) => {
  const { articleService } = service;
  const insertArticle = async (req, res) => {
    try {
      const payload = req.body;
      const article = await articleService.insertArticle(payload);
      res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, article));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const getArticles = async (req, res, next) => {
    try {
      const options = req.query;
      const articles = await articleService.getArticles(options);

      res
        .status(StatusCodes.OK)
        .json(successResponse(StatusCodes.OK, articles));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const getArticle = async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const article = await articleService.getArticle(articleId);

      res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, article));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const updateArticle = async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const payload = req.body;
      const articles = await articleService.updateArticle(articleId, payload);

      res
        .status(StatusCodes.OK)
        .json(successResponse(StatusCodes.OK, articles));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const removeArticle = async (req, res, next) => {
    try {
      const articleId = req.params.id;
      const articles = await articleService.removeArticle(articleId);

      res
        .status(StatusCodes.OK)
        .json(successResponse(StatusCodes.OK, articles));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };
  return {
    insertArticle,
    getArticles,
    updateArticle,
    removeArticle,
    getArticle,
  };
};

export default Controller;
