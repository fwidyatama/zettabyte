import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import Comment from '../comments/comment';
const { Schema } = mongoose;
const articleSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },

  { timestamps: true }
);

articleSchema.set('toObject', { virtuals: true });
articleSchema.set('toJSON', { virtuals: true });

articleSchema.plugin(mongoosePaginate);

articleSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'article',
});

articleSchema.post('findOneAndDelete', async function (res, next) {
  console.log('called!!!');
  console.log(this.getQuery());
  await Comment.deleteMany({ article: this.getQuery() });
  next();
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
