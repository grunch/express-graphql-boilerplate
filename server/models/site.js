import mongoose from 'mongoose';

const { Schema } = mongoose;

const SiteSchema = new Schema({
  name: { type: String, trim: true },
  address: { type: String, trim: true },
  phone: { type: String, trim: true },
  room: { type: Number, default: 0 },
  bar: { type: Boolean },
  park: { type: Boolean },
  wifi: { type: Boolean },
  recording: { type: Boolean },
  email: { type: String, trim: true },
  latitude: { type: Number },
  longitude: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('site', SiteSchema);
