'use client';

import { usePathname } from 'next/navigation';
import AppHeader from './AppHeader';

const AppHeaderWrapper = () => {
  const pathname = usePathname();

  return pathname === '/login' ? <></> : <AppHeader />
  // if (pathname === '/login') return <></>
  // return <AppHeader />
};

export default AppHeaderWrapper;
