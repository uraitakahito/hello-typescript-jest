import js from '@eslint/js';
import tseslint from 'typescript-eslint';

const namingConvention = [
  'warn',
  { selector: 'variable', format: ['camelCase'] },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['camelCase'],
    prefix: ['can', 'did', 'has', 'is', 'must', 'need', 'should', 'will'],
  },
  { selector: ['enum', 'enumMember'], format: ['UPPER_CASE'] },
  { selector: 'function', format: ['camelCase'], leadingUnderscore: 'allow' },
  { selector: 'accessor', format: ['camelCase'] },
  { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
  { selector: 'class', format: ['PascalCase'] },
  { selector: 'typeParameter', format: ['PascalCase'] },
];

export default tseslint.config(
  { ignores: ['dist/', 'coverage/', 'node_modules/'] },
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.ts'],
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/naming-convention': namingConvention,
    },
  },
);
