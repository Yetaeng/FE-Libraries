const fetchProduct = require("../async.js");

test("async resolves", async () => {
  await expect(fetchProduct()).resolves.toEqual({ item: "Milk", price: 200 });
});

test("async rejects", async () => {
  await expect(fetchProduct("error")).rejects.toMatch("network error");
});
