"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var movies_catalogSchema = new _mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: false
  },
  likes: {
    type: Number,
    require: false
  },
  image: {
    type: String,
    require: false
  },
  date_of_released: {
    type: String,
    require: false
  }
});
var _default = (0, _mongoose.model)("movies_catalog", movies_catalogSchema);
exports["default"] = _default;
//# sourceMappingURL=movies_catalog.js.map