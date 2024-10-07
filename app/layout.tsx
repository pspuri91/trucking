import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import { Suspense } from 'react';
import Loading from './loading';
import Script from 'next/script';

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
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chatwal Trucking Inc. - Reliable Transportation Across Canada and USA</title>
        <meta name="description" content="Chatwal Trucking Inc. provides reliable transportation services across Canada and the USA. Get a quote for your shipping needs today." />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2">
          Skip to main content
        </a>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}