import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Mengembalikan 0 jika input bukan angka', () => {
  assert.strictEqual(sum('a', 5), 0);
  assert.strictEqual(sum(5, 'b'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(5, null), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
});

test('Mengembalikan 0 jika salah satu input negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test('Mengembalikan hasil penjumlahan yang benar untuk input positif', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(1.5, 2.5), 4);
});
