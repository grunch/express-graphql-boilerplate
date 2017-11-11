/* eslint no-console: ["error", { allow: ["log"] }] */
import 'dotenv/config';
import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import './models';
import schema from './schema';

// Replace with your mongo URI
const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoDB URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useMongoClient: true,
});
mongoose.connection
  .once('open', () => console.log('Connected to Mongo instance.'))
  .on('error', error => console.log('Error connecting to Mongo:', error));

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  pretty: true,
  graphiql: true,
}));

app.listen(process.env.APP_PORT, () => {
  console.log(`App escuchando en puerto ${process.env.APP_PORT}`);
});
