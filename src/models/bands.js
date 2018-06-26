import mongoose from 'mongoose';
// import Albums from './models/albums.js';
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  name:  {type: String, required: true},
  albums: { type: Schema.Types.ObjectId, ref: 'Albums'},
});

export default mongoose.model('bands', bandSchema);