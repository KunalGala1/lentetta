import type { Metadata } from 'next';
import { Sorts_Mill_Goudy } from 'next/font/google';
import './globals.css';

const font = Sorts_Mill_Goudy({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Len Tetta | Composer',
  description: 'Len Tetta is a composer based in Boston.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className + ' bg-slate-50 text-slate-950'}>
        {children}
      </body>
    </html>
  );
}
