import type { Metadata } from 'next';
import { Crete_Round, Work_Sans } from 'next/font/google';
import './globals.css';
import { ChildProps } from '@/types';
import { ThemeProvider } from '@/components/providers/theme-provider';

const creteRound = Crete_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creteRound',
});

const workSans = Work_Sans({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-workSans',
});

export const metadata: Metadata = {
  title: 'MuhsDev Programming Articles',
  description:
    'Programming news, tips and the latest programming news. You can find a guide to learning and developing programming on our blog.',
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
