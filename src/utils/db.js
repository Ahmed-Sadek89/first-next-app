import mongoose from "mongoose";
import 'dotenv/config';

const connect = async () => {
  const options = {
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.MONGODB_URL, options);
  } catch (error) {
    throw new Error("Connection failed!")
  }
}

export default connect;