import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Preview from '@/components/preview';
import AddBlock from '@/components/addBlock';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 py-8 ${inter.className}`}
    >
      <Header />
      <Preview />
      <AddBlock />
    </main>
  );
}
