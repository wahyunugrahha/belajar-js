import sum from "./index.js";
import test from "node:test";
import assert from "node:assert";

test(`Menjumlahkan Anga Positif`, () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(10, 20), 30);
});

test(`Jika satu parameter bukan angka`, () => {
  assert.strictEqual(sum("1", 2), 0);
  assert.strictEqual(sum(1, "2"), 0);
  assert.strictEqual(sum(1, null), 0);
  assert.strictEqual(sum(undefined, 1), 0);
  assert.strictEqual(sum("", null), 0);
});

test(`Jika satu parameter neagtif`, () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-11, -1), 0);
});
