import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Preview from '@/components/preview';
import AddBlock from '@/components/addBlock';
import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { guestMode } = useContext(AppContext);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 py-8 ${
        inter.className
      } ${guestMode && 'bg-gray-300'}`}
    >
      <Header />
      <Preview />
      <AddBlock />
    </main>
  );
}
