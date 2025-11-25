import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware({
  // A list of all locales that are supported
  locales: routing.locales,
  
  // Used when no locale matches
  defaultLocale: routing.defaultLocale,
  
  // Always show the locale in the URL
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|hi)/:path*',
    
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};

// import createMiddleware from 'next-intl/middleware';
// import { routing } from './src/i18n/routing';

// export default createMiddleware(routing);

// export const config = {
//   matcher: ['/', '/(hi|en)/:path*']
// };