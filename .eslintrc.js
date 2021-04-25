module.exports = {
  extends: ['react-app'],
  rules: {
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'no-return-assign': ['off'],
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    'global-require': ['off'],
    indent: [
      'warn',
      2,
      { ImportDeclaration: 'first', ObjectExpression: 'first' }
    ],
    'object-curly-newline': ['off'],
    'no-use-before-define': ['warn'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': [0],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 3,
        when: 'always'
      }
    ],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'after-props',
        selfClosing: 'after-props'
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': ['error', 'never'],
    'react/prop-types': [1, { skipUndeclared: true }]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)']
    }
  ]
};
