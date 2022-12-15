"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Connect to Mongo Atlas

var uri = "mongodb+srv://admin:wURQ18zaXRzKAQvh@cluster0.rm24jwp.mongodb.net/?retryWrites=true&w=majority";
_mongoose["default"].connect(uri, {
  useNewUrlParser: true,
  useUnifiedtopology: true
}).then(function (db) {
  return console.log(" DB is Connected :) !!");
})["catch"](function (err) {
  return console.log(err);
});
//# sourceMappingURL=database.js.map