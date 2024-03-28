import type { Metadata } from 'next';
import { Crete_Round, Work_Sans } from 'next/font/google';
import './globals.css';
import { ChildProps } from '@/types';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import NextTopLoader from 'nextjs-toploader';

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
  metadataBase: new URL('https://test-blog.muhsdev.com'),
  title: 'MuhsDev Programming Articles',
  description:
    'Programming news, tips and the latest programming news. You can find a guide to learning and developing programming on our blog.',
  authors: [{ name: 'Mukhammadjon Solijonov', url: 'https://muhsdev.com' }],
  icons: { icon: '/favicon.png' },
  keywords:
    'mukhammadjon solijonov, muhsdev, Cybersecurity, Software development, Programming languages, Web development, Network administration, Cloud computing, Artificial intelligence, Machine learning, Data science, IT project management, DevOps, IT infrastructure, Mobile app development, IoT (Internet of Things), Blockchain technology, IT certifications, Tech tutorials, Tech reviews, IT career advice, Tech news and updates',
  openGraph: {
    title: 'MuhsDev Programming Articles',
    description:
      'Programming news, tips and the latest programming news. You can find a guide to learning and developing programming on our blog.',
    type: 'website',
    url: 'https://test-blog.muhsdev.ac',
    locale: 'en_EN',
    images:
      'https://us-east-1-shared-usea1-02.graphassets.com/cltkxzodr0sp607lkaugf18ii/cltqt2hp91f3v08k2gojdigyc',
    countryName: 'Uzbekistan',
    siteName: 'MuhsDev',
    emails: 'info@muhsdev.ac',
  },
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
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
