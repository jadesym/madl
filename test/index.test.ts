import { printMessage } from '../src/index';

test('Print Message', () => {
  expect(
    printMessage(
      {
        firstName: 'Bob',
        lastName: 'Smith',
      },
      'Some other message...',
    ),
  ).toContain('Thanks');
});
