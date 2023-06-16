import { RuleTester } from 'eslint';
import rule from './no-single-letter-variable-name';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

const errors = [
  { message: 'Avoid single-letter identifiers' },
];

ruleTester.run('no-single-letter-variable-name', rule, {
  valid: [
    {
      code: `
        const xyz = 123;
      `,
    },
  ],
  invalid: [
    {
      code: `
        const x = 123;
      `,
      errors,
    },
  ],
});