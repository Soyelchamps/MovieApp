import { Schema, model } from "mongoose";
const noteSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: false,
  },
  date: {
    type: String,
    require: false,
  },
  author: {
    type: String,
    require: false,
  },
});
export default model("Note", noteSchema);
