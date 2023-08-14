import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Preview from '@/components/preview';
import AddBlock from '@/components/addBlock';
import AppContext from '@/shared/context/appContext';
import { useContext } from 'react';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { guestMode } = useContext(AppContext);
  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-center justify-between px-24 pb-8 pt-0',
        inter.className,
        guestMode ? 'bg-gray-300' : 'bg-gray-200'
      )}
    >
      <Header />
      <Preview />
      <AddBlock />
    </main>
  );
}
