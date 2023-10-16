import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  type: String,
  mycourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  mycourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: String,
  teacher: String,
  stars: Number,
  level: String,
  reviews: [String],
  published: Boolean,
  adminId: mongoose.Schema.Types.ObjectId,
});

// Models
export const Users = mongoose.models.User || mongoose.model("User", userSchema);
export const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
      console.log("Already connected.");
      return;
  }
  const db = await mongoose.connect(process.env.MONGO_URI!);
  console.log("DB Connected.");  
}


