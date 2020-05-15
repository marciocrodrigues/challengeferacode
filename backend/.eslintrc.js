module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine":"auto"
    }],
    // As classes não precisam usar o this nos metodos
    "class-methods-use-this": "off",

    // Permiti alterações nos parametros
    "no-param-reassign": "off",

    "camelcase": "off",

    // Ignora a variavel next quando não usada
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};
