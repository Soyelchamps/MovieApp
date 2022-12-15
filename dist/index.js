"use strict";

var _server = require("./server");
require("./database");
_server.server.start({
  port: 3000
}, function (_ref) {
  var port = _ref.port;
  console.log("Server running!!");
});
//# sourceMappingURL=index.js.map