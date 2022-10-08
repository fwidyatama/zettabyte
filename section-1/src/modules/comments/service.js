import Comment from './comment';
const Service = () => {
  const insertComment = async (payload) => {
    const comment = new Comment(payload);
    try {
      return await comment.save();
    } catch (error) {
      return error;
    }
  };

  const getComment = async (commentId) => {
    try {
      const comment = await Comment.findById(commentId);
      return comment;
    } catch (error) {
      return error;
    }
  };

  const updateComment = async (commentId, payload) => {
    try {
      const comment = await Comment.findByIdAndUpdate(commentId, payload, {
        new: true,
      });
      return comment;
    } catch (error) {
      return error;
    }
  };

  const removeComment = async (commentId) => {
    try {
      const comment = await Comment.findByIdAndDelete(commentId);
      return comment;
    } catch (error) {
      return error;
    }
  };
  return {
    insertComment,
    getComment,
    updateComment,
    removeComment,
  };
};

export default Service;
