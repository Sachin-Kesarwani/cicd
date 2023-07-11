module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  overrides: [  
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

