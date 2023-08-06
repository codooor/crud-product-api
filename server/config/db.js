import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      `MongoDB connected at ${connection.connection.host}`.green.underline
        .italic
    );
  } catch (err) {
    console.error(err);
    process.exit[1];
  }
};

export default connectDB;
