import Product from "../models/Product.js";

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} from "graphql";

// Queries
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    inventory: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      async resolve(parent, args) {
        return await Product.find();
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        inventory: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        const product = new Product({
          name: args.name,
          price: args.price,
          description: args.description,
          inventory: args.inventory,
        });

        return await product.save();
      },
    },
    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },

      async resolve(parent, args) {
        const deletedProduct = await Product.findByIdAndDelete(args.id);

        if (deletedProduct) {
          return deletedProduct;
        } else {
          throw new Error(`Product with id: ${args.id} not found`);
        }
      },
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },

        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        description: { type: GraphQLString },
        inventory: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        return await Product.findByIdAndUpdate(args.id, args, { new: true });
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
