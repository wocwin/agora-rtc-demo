module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    quotes: [2, 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    semi: [2, 'never'],
    // 缩进
    indent: ['off'],
    'space-before-function-paren': 0,
    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    // 关闭未定义校验
    'no-unused-vars': 'off',
    eqeqeq: 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
