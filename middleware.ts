import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// Feature pages have explicit EN (/features/*) and TR (/tr/features/*)
// App Router routes. Exclude both from next-intl to prevent redirect loops.
export const config = {
  matcher: [
    "/",
    "/(tr|en)/:path*",
    "/((?!api|_next|features(?:/|$)|(?:tr|en)/features(?:/|$)|.*\\..*).*)",
  ],
};
