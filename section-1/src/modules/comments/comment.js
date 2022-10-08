import mongoose from 'mongoose';

const { Schema } = mongoose;
const commentSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    article: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
    },
  },
  { timestamps: true }
);

commentSchema.set('toObject', { virtuals: true });
commentSchema.set('toJSON', { virtuals: true });

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
