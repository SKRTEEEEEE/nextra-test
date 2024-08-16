// import "@/app/ui/global.css"
// import { inter } from "../components/ui/fonts";

import Link from "next/link";

 
// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme Dashboard',
//     default: 'Acme Dashboard',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <nav>
        <Link href="/docs/welcome">Go to info</Link>
      </nav>
      <body>{children}</body>
    </html>
  );
}