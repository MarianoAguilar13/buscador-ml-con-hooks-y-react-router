const path = require("path");
const liveServer = require("live-server");

const dev = process.env.NODE_ENV == "development";

//solo se va a ejecutar cuando este en modo developmebt
if (dev) {
  liveServer.start({
    //root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
