import { connection } from "next/server";
import { headers } from "next/headers";

type Props = {
  header: React.ReactNode;
  breadcrumb: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

function isLeaguePath(pathname: string): boolean {
  return /\/league(?:\/|$)/.test(pathname);
}

function resolvePathname(headerStore: Headers): string {
  const direct =
    headerStore.get("x-pathname") ||
    headerStore.get("x-invoke-path") ||
    headerStore.get("x-matched-path") ||
    "";

  if (direct) return direct;

  const nextUrl = headerStore.get("next-url") || headerStore.get("x-url") || "";
  if (!nextUrl) return "";

  try {
    const path = nextUrl.startsWith("http")
      ? new URL(nextUrl).pathname
      : nextUrl.split("?")[0];
    return path || "";
  } catch {
    return "";
  }
}

export default async function SiteChrome({
  header,
  breadcrumb,
  footer,
  children,
}: Props) {
  await connection();
  const headerStore = await headers();
  const pathname = resolvePathname(headerStore);

  if (isLeaguePath(pathname)) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      {header}
      {breadcrumb}
      <main className="flex-1">{children}</main>
      {footer}
    </div>
  );
}
