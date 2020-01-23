module.exports = {
  stories: ['../src/**/*.stories.[jt]s?(x)'],
  webpackFinal: async config => {
    config.module.rules.push({
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
