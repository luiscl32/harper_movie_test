module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './assets',
          theme: './src/theme',
          shared: './src/shared',
          modules: './src/modules',
          navigation: './src/navigation',
          utils: './src/utils',
          redux_config: './src/redux_config',
        },
      },
    ],
  ],
};
