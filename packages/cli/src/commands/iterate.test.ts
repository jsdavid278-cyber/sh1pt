import { describe, expect, it } from 'vitest';
import { parseQuietHours } from './iterate-options.js';

describe('parseQuietHours', () => {
  it.each(['22-08', '0-23', '09-17'])('accepts valid local hour range %s', (value) => {
    expect(parseQuietHours(value)).toBe(value);
  });

  it.each(['abc', '22', '22:08', '22-8-1', '-1-08'])(
    'rejects invalid quiet-hours format %s',
    (value) => {
      expect(() => parseQuietHours(value)).toThrow('start-end format');
    },
  );

  it.each(['24-08', '22-24', '23-99'])('rejects out-of-range quiet hours %s', (value) => {
    expect(() => parseQuietHours(value)).toThrow('between 0 and 23');
  });
});
