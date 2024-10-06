import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatwal Trucking Inc. | Reliable Transportation Across Canada and USA',
  description: 'Experience reliable truckload shipping with Chatwal Trucking Inc. Serving Canada and the United States since 2010 with on-time deliveries and exceptional service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </ClientWrapper>
      </body>
    </html>
  );
}