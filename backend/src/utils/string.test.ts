import assert from 'assert';
import test from 'node:test';
import { reverse, getPhonemes } from './string';

test('reverse', (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(reverse('foobar'), 'raboof');
});

test('getPhonemes: without spaces', (t) => {
  // This test passes because it does not throw an exception.
  assert.deepEqual(getPhonemes('foobar'), {
    consonants: 3,
    vowels: 3,
  });
});

test('getPhonemes: with spaces', (t) => {
  // This test passes because it does not throw an exception.
  assert.deepEqual(getPhonemes('foo bar baz'), {
    consonants: 5,
    vowels: 4,
  });
});
