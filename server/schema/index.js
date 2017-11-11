import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';
import mongoose from 'mongoose';
import SiteType from './site_type';

const Site = mongoose.model('site');

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'root query',
  fields: () => ({
    sites: {
      type: new GraphQLList(SiteType),
      resolve() {
        return Site.find({});
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: rootQuery,
});

export default Schema;
