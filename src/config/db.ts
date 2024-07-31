import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI: string = process.env.MONGO_URI || '';
    if (!mongoURI) {
      throw new Error('Mongo URI not provided');
    }

    const options: ConnectOptions = {
     // useNewUrlParser: true,
    // useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(mongoURI, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred');
    }
    process.exit(1);
  }
};

export default connectDB;
