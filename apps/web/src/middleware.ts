import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
// import { cookies } from 'next/headers';
import { TOKEN_KEY, REFRESH_TOKEN_KEY } from '@web/src/lib/cookies';
import { userServiceTrpc } from '@web/src/server/connectors/user-service';

const publicPaths = ['/login']

const middleware = async (req: NextRequest) => {
  const token = req.cookies.get(TOKEN_KEY)?.value;
  const refreshToken = req.cookies.get(REFRESH_TOKEN_KEY)?.value;

  if (publicPaths.includes(req.nextUrl.pathname)) {
    // if public area
    if (token) return NextResponse.redirect(new URL('/', req.nextUrl));
  } else {
    // if private area
    const redirectToLogin = NextResponse.redirect(new URL('/login', req.nextUrl));

    if (!token || !refreshToken) return redirectToLogin;
    // const userId = getUserId({ token, refreshToken });
    const p = await userServiceTrpc.tokens.parseBoth.query({ token, refreshToken });
    if (!p?.userId) return redirectToLogin;

    return NextResponse.next();
  }
};

export default middleware;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
