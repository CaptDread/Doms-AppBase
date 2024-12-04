import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dreadllama.app',
  appName: 'dreadllama',
  webDir: 'out',
  server: {
    url: 'http://172.28.32.210:3000',
    cleartext: true
  }
};

export default config;
