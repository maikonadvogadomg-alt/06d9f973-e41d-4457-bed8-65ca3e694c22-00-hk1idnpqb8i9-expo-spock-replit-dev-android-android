import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.github.06d9f973e41d4457bed865ca3e694c2200hk1idnpqb8i9expospockreplitdevandroid',
  appName: '06d9f973-e41d-4457-bed8-65ca3e694c22-00-hk1idnpqb8i9-expo-spock-replit-dev-android',
  webDir: 'dist',
  server: { androidScheme: 'https' },
  plugins: {
    SQLiteConnection: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
    },
    Preferences: {
      group: 'NativeStorage',
    },
  },
};
export default config;
