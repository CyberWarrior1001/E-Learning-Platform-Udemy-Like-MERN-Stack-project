import mongoose from 'mongoose'


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/YoutubeLMS');
    
    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};


export default connectDB