const crypto = require('node:crypto');

// Correctly set the environment variable for thread pool size
process.env.UV_THREADPOOL_SIZE = 16;

const start = Date.now();
const MAX_Calls = 16;

for (let i = 0; i < MAX_Calls; i++) {
  // Using the async version to take advantage of the thread pool
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
