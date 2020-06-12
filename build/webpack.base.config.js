/**
 * Public configuration
 */
var path = require('path');
var { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    mode: 'none',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'vue-style-loader!css-loader',
                    less: 'vue-style-loader!css-loader!less-loader'
                },
                postLoaders: {
                    html: 'babel-loader'
                }
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader?sourceMap'
            ]
        },
        { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
        { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': resolve('../node_modules/vue/dist/vue.esm.js'),
            '@': resolve('src')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
