import mongoose, { Document, Schema } from 'mongoose';

export interface Book extends Document {
  title: string;
  author: string;
  publishedDate: string;
  image: string;
}

const bookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: String, required: true },
  image: { type: String, required: false },
});

export default mongoose.model<Book>('Book', bookSchema);
