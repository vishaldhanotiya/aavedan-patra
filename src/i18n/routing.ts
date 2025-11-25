// export const routing = {
//   locales: ['en', 'hi'],
//   defaultLocale: 'hi',
//   localePrefix: 'always' // Always show locale in URL
// } as const;

// export type Locale = (typeof routing.locales)[number];

export const routing = {
  locales: ['en', 'hi'],
  defaultLocale: 'en'
} as const;

export type Locale = (typeof routing.locales)[number];