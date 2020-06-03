const base = require("./webpack.config.base");

module.exports = {
    ...base,
    ...{
        devtool: 'source-map',
        mode: 'development',
        devServer : {
            host: 'localhost',
            hot: true,
            watchOptions: {
              poll: true
            },
            inline : true,
            port : 3000
        },
    }
};
