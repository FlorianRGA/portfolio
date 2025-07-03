import { NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["fr"];
const DEFAULT_LOCALE = "en";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check si le pathname correspond a une url de langue /fr /en
  const currentLocale = pathname.split("/")[1];
  if (
    SUPPORTED_LOCALES.includes(currentLocale) ||
    currentLocale === DEFAULT_LOCALE
  ) {
    return NextResponse.next();
  }

  // Récupère les langues du navigateurs de l'user
  const acceptLanguage = request.headers.get("accept-language");
  const preferredLocale = acceptLanguage?.split(",")[0]?.split("-")[0];

  // si la premiere langue du navigateur est "fr" sinon par default "en"
  const locale = SUPPORTED_LOCALES.includes(preferredLocale)
    ? preferredLocale
    : DEFAULT_LOCALE;

  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"], // Ignorer les routes suivantes
};
