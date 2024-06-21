import type { Metadata } from 'next';
import './globals.css';
import Providers from '~/components/base/providers';
import Navbar from '~/components/base/navbar';

export const metadata: Metadata = {
  title: 'Bagvaly: Elegance in Every Bag',
  description:
    'Discover a wide range of stylish and functional bags for every occasion at Bagvaly. From chic handbags and versatile backpacks to durable travel luggage, find your perfect carry companion. Shop now for quality bags at unbeatable prices with fast shipping and excellent customer service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Navbar />
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
