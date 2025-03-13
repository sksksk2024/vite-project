// import { defineConfig } from 'vitest/config';
// import '@testing-library/jest-dom'; // This is here to ensure it's globally available.

// export default defineConfig({
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['./src/setupTests.ts'], // Make sure this points to your setup file
//     coverage: {
//       reporter: ['text', 'html'],
//     },
//   },
// });
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
