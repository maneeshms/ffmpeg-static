var ffmpegPath = require(".");
var fs = require("fs");
fs.chmodSync(ffmpegPath, 0o755)
