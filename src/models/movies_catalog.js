import { Schema, model } from "mongoose";
const movies_catalogSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
  likes: {
    type: Number,
    require: false,
  },
  image: {
    type: String,
    require: false,
  },
  date_of_released: {
    type: String,
    require: false,
  },
});
export default model("movies_catalog", movies_catalogSchema);
