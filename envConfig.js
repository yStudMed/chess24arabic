// envConfig.js
import pkg from '@next/env'; // Import the CommonJS module as default
import { fileURLToPath } from "url";
import { dirname } from "path";
const { loadEnvConfig } = pkg;

const __dirname = dirname(fileURLToPath(import.meta.url));

loadEnvConfig(__dirname);
