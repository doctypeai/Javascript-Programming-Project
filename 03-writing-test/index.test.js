import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('mengembalikan hasil penjumlahan dua angka', (t) => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(2.5, 2.5), 5);
});
