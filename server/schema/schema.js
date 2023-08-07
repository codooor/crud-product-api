import Product from "../models/Product.js";
import User from "../models/Users.js";
import bcrypt from "bcryptjs";

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLBoolean,
} from "graphql";

// Queries

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    isAdmin: { type: GraphQLBoolean },
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    scents: { type: new GraphQLNonNull(GraphQLString) },
    inventory: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      async resolve(parent, args) {
        try {
          return await Product.find();
        } catch (err) {
          throw new Error("Failed to fetch products: " + err.message);
        }
      },
    },
    users: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        try {
          return await User.find();
        } catch (err) {
          throw new Error("Failed to fetch users: " + err.message);
        }
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    registerUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(parents, args) {
        let user = await User.findOne({ email: args.email });
        if (user) {
          throw new Error("User exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(args.password, salt);

        user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
        });

        try {
          const savedUser = await user.save();
          return savedUser;
        } catch (err) {
          throw new Error("Failed to register user: " + err.message);
        }
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        scents: { type: new GraphQLNonNull(GraphQLString) },
        inventory: { type: new GraphQLNonNull(GraphQLInt) },
      },
      async resolve(parent, args) {
        try {
          const product = new Product({
            name: args.name,
            price: args.price,
            description: args.description,
            scents: args.scents,
            inventory: args.inventory,
          });

          return await product.save();
        } catch (err) {
          throw new Error("Failed to create product: " + err.message);
        }
      },
    },

    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },

      async resolve(parent, args) {
        try {
          const deletedProduct = await Product.findByIdAndDelete(args.id);

          if (deletedProduct) {
            return deletedProduct;
          } else {
            throw new Error(`Product with id: ${args.id} not found`);
          }
        } catch (err) {
          throw new Error("Failed to delete product: " + err.message);
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
        scents: { type: GraphQLString },
        inventory: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        try {
          return await Product.findByIdAndUpdate(args.id, args, { new: true });
        } catch (err) {
          throw new Error("Failed to update product: " + err.message);
        }
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
