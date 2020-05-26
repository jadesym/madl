import { printMessage } from '../index';

test('Print Message', () => {
  expect(printMessage()).toContain('Thanks');
});
