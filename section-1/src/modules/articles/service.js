import Article from './article';
const Service = () => {
  const insertArticle = async (payload) => {
    const article = new Article(payload);
    try {
      return await article.save();
    } catch (error) {
      return error;
    }
  };

  const getArticles = async (options) => {
    try {
      const { page = 1, search, limit = 10, sort } = options;

      const query = search
        ? { title: { $regex: new RegExp(search), $options: 'i' } }
        : {};

      const articles = await Article.paginate(query, {
        offset: page * limit - limit,
        limit,
        sort: sort ? sort : 'createdAt',
        populate: 'comments',
      });

      return articles;
    } catch (error) {
      return error;
    }
  };

  const getArticle = async (articleId) => {
    try {
      const article = await Article.findById(articleId).populate('comments');

      return article;
    } catch (error) {
      return error;
    }
  };

  const updateArticle = async (articleId, payload) => {
    try {
      const article = Article.findByIdAndUpdate(articleId, payload, {
        new: true,
      });
      return article;
    } catch (error) {
      return error;
    }
  };

  const removeArticle = async (articleId) => {
    try {
      const article = Article.findByIdAndDelete(articleId);
      return article;
    } catch (error) {
      return error;
    }
  };

  return {
    insertArticle,
    getArticles,
    getArticle,
    updateArticle,
    removeArticle,
  };
};

export default Service;
