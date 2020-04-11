module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    // enable additional rules
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    // override default options for rules from base configurations
    'no-cond-assign': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    // disable rules from base configurations
    'no-console': 'off',
  },
};
