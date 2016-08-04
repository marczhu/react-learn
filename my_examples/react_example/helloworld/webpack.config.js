module.exports = {
    entry: './src/helloworld.js',
    output: {
        path: "build",
        filename: 'helloworld.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx?harmony'] },
	    { test: /\.js$/, loaders:['babel']}
        ]
    }
}
