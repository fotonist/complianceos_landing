import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// Explicit App Router feature routes are handled without locale middleware.
export const config = {
  matcher: [
    "/",
    "/((?!api|_next|features(?:/|$)|(?:tr|en)/features(?:/|$)|.*\\..*).*)",
  ],
};
