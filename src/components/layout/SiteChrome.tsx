import { headers } from "next/headers";

type Props = {
  header: React.ReactNode;
  breadcrumb: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

function isLeaguePath(pathname: string): boolean {
  return /\/lig(?:\/|$)/.test(pathname);
}

export default async function SiteChrome({
  header,
  breadcrumb,
  footer,
  children,
}: Props) {
  const headerStore = await headers();
  const pathname =
    headerStore.get("x-pathname") ||
    headerStore.get("x-invoke-path") ||
    headerStore.get("next-url") ||
    "";

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
