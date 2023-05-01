// import { PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig ={
  
//   testMatch:["tests/sakeranking.spec.ts"],

// };

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/sakeranking.spec.ts"],
});