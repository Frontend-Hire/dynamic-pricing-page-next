import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname === '/pages-router' ||
    request.nextUrl.pathname === '/app-router'
  ) {
    const IP = request.headers.get('x-forwarded-for') || 'unknown';
    const req = await fetch(`https://api.country.is/${IP}`);
    const data = await req.json();

    const country = (data.country as string) || 'DEFAULT';

    return NextResponse.redirect(
      new URL(
        `${request.nextUrl.pathname}/${country.toLowerCase()}`,
        request.url,
      ),
    );
  }

  return NextResponse.next();
}
