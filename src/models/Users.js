import { Schema, model } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
});
export default model("User", userSchema);
