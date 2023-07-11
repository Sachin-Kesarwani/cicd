module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react',
    'eslint-plugin-react'
  ],
  rules: {
    quotes: ['error', 'single']
  }
}
