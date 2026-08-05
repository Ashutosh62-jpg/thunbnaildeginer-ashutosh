import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { GalaxyBackground } from '@/components/ui/GalaxyBackground';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Navbar } from '@/components/ui/Navbar';
import { Preloader } from '@/components/ui/Preloader';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashutosh | Award-Winning YouTube Thumbnail Designer & Architect',
  description:
    'Helping top YouTube creators & brands double their CTR with bold, cinematic, psychological high-converting thumbnail design architecture.',
  keywords: [
    'YouTube Thumbnail Designer',
    'Thumbnail Architect',
    'Ashutosh Portfolio',
    'High CTR Thumbnails',
    'Photoshop Design',
    'Creative Direction',
  ],
  openGraph: {
    title: 'Ashutosh | YouTube Thumbnail Architect',
    description: 'Crafting Thumbnails That Stop the Scroll.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-bg-main text-white font-body antialiased selection:bg-primary selection:text-white"
        suppressHydrationWarning
      >
        <Preloader />
        <CustomCursor />
        <GalaxyBackground />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
