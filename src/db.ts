import mongoose, { model, Schema } from "mongoose";

mongoose
  .connect(
    "mongodb+srv://wahidmahroof040:wahid@cluster0.tmhzjge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.error("DB error:", err));

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});
export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);
