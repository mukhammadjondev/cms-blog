import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  urls: Array,
  avatar: String,
});

const Author = mongoose.models.Author || mongoose.model('Author', authorSchema);

export default Author;
