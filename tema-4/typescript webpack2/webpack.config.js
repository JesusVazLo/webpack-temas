const path = require('path')

module.export = {
    mode: 'development',
    entry: './src/index.ts',
    devtoll:'inline-source-map',
   

    module:{
        rules:[
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude:/node-modules/
            }    
        ],
    },
    resolve:{
        extensions:['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },

};