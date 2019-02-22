import fs from 'fs';

import stylelint from 'stylelint';

import config from '..';

const validCss = fs.readFileSync('./test/data/pass.css', 'utf-8');
const invalidCss = fs.readFileSync('./test/data/fail.css', 'utf-8');

const validVue = fs.readFileSync('./test/data/pass.vue', 'utf-8');
const invalidVue = fs.readFileSync('./test/data/fail.vue', 'utf-8');

describe('stylelint config', () => {
  describe('css files', () => {
    it('valid: does not throw any errors or warnings', async () => {
      const result = await stylelint.lint({ code: validCss, config });

      expect(result.errored).toBeFalsy();
      expect(result.results[0].warnings).toHaveLength(0);
    });

    it('invalid: throws error and flags one warning', async () => {
      const result = await stylelint.lint({ code: invalidCss, config });

      expect(result.errored).toBeTruthy();
      expect(result.results[0].warnings).toHaveLength(1);
    });
  });

  describe('vue files', () => {
    it('valid: does not throw any errors or warnings', async () => {
      const result = await stylelint.lint({ code: validVue, config });

      expect(result.errored).toBeFalsy();
      expect(result.results[0].warnings).toHaveLength(0);
    });

    it('invalid: throws error and flags one warning', async () => {
      const result = await stylelint.lint({ code: invalidVue, config });

      expect(result.errored).toBeTruthy();
      expect(result.results[0].warnings).toHaveLength(1);
    });
  });
});
