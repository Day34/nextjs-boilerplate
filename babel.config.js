module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@styles': './src/assets/styles',
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@constants': './src/constants',
          '@dummies': './src/dummies',
          '@helpers': './src/helpers',
          '@navigations': './src/navigations',
          '@pages': './src/pages',
          '@stores': './src/stores',
          '@sagas': './src/sagas',
          '@types': './src/types',
        },
      },
    ],
  ],
};
