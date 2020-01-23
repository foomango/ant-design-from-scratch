module.exports = {
  stories: ['../src/**/*.stories.[jt]s?(x)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['@babel/preset-react', { flow: false, typescript: true }]]
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
};
