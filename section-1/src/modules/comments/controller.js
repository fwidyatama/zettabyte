import { errorResponse, successResponse } from '../../helper/http-response';
import { StatusCodes } from 'http-status-codes';

const Controller = (service) => {
  const { commentService } = service;

  const insertComment = async (req, res) => {
    try {
      const payload = req.body;

      const comment = await commentService.insertComment(payload);

      res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, comment));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const getComment = async (req, res) => {
    try {
      const commentId = req.params.id;
      const comment = await commentService.getComment(commentId);

      res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, comment));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const updateComment = async (req, res) => {
    try {
      const commentId = req.params.id;
      const payload = req.body;
      const comment = await commentService.updateComment(commentId, payload);

      res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, comment));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  const removeComment = async (req, res) => {
    try {
      const commentId = req.params.id;
      const comment = await commentService.removeComment(commentId);

      res.status(StatusCodes.OK).json(successResponse(StatusCodes.OK, comment));
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json(errorResponse(StatusCodes.BAD_GATEWAY, error));
    }
  };

  return {
    insertComment,
    getComment,
    updateComment,
    removeComment,
  };
};

export default Controller;
