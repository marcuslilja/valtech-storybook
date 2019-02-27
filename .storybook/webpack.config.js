module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|svg|jpg|gif|png)$/,
    use: 'file-loader',
  });

  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      require.resolve('sass-loader'),
    ],
  });

  return storybookBaseConfig;
};
/*
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('sass-loader'),
        ],
      },
    ],
  },
};
*/
