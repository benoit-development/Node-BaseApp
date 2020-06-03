const base = require("./webpack.config.base");

module.exports = {
    ...base,
    ...{
        devtool: 'source-map',
        mode: 'development',
        devServer: {
          hot: true,
          watchOptions: {
            poll: true
          },
          inline : true,
          port : 8080
        }
    }
};
