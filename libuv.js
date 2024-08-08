const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 12;
const maxCalls = 12;

const start = new Date();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

for (let i = 0; i < maxCalls; i++) {
  crypto.pbkdf2(
    "password",
    "salt",
    100000,
    512,
    "sha512",
    (err, derivedKey) => {
      if (err) throw err;
      console.log(`Hash: ${i + 1}`, Date.now() - start);
    }
  );
}
// console.log("Hash:", Date.now() - start);
