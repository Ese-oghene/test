import mongoose, { Document, Schema } from 'mongoose';

export interface Book extends Document {
  title: string;
  author: string;
  publishedDate: string;
  image: string;
  ISBN: string;
}

const bookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: String, required: true },
  image: { type: String, required: false },
  ISBN: { type: String, required: true },

});

export default mongoose.model<Book>('Book', bookSchema);
