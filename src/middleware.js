import { NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['fr'];
const DEFAULT_LOCALE = 'en';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Vérifie si la langue est supportée
  const currentLocale = pathname.split('/')[1];
  if (SUPPORTED_LOCALES.includes(currentLocale) || currentLocale === DEFAULT_LOCALE) {
    return NextResponse.next();
  }

  // Récupère la langue préférée dans la requête
  const acceptLanguage = request.headers.get('accept-language');
  const preferredLocale = acceptLanguage?.split(',')[0]?.split('-')[0];
  
  // Détermine la langue préférée
  const locale = SUPPORTED_LOCALES.includes(preferredLocale)
    ? preferredLocale
    : DEFAULT_LOCALE;

  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)'], // Ignorer les routes suivantes
};
