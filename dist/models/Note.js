"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var noteSchema = new _mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: false
  },
  date: {
    type: String,
    require: false
  },
  author: {
    type: String,
    require: false
  }
});
var _default = (0, _mongoose.model)("Note", noteSchema);
exports["default"] = _default;
//# sourceMappingURL=Note.js.map