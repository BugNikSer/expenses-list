'use client';

import { useRouter, usePathname } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

import { trpc } from '@web/src/lib/trpc';
import QueryHandler from '@web/src/app/_components/QueryHandler';
import ThemeSwitcher from './ThemeSwitcher';

const AppHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const user = trpc.user.get.useQuery();

  const signOut = trpc.auth.signOut.useMutation();
  const handleSignOut = () => {
    signOut.mutateAsync()
    .then(() => {
      router.push('/login');
    })
    .catch((e : unknown) => {
      console.log('Response failed', e);
    });
  };

  return (
    <AppBar position='static'>
      <Toolbar sx={{ gap: 1 }}>
        <Typography component='div' variant='h6' sx={{ flexGrow: 1 }}>
          My expenses
        </Typography>

        {pathname !== '/login' && (
          <QueryHandler query={user} error={<></>} spinnerColor='secondary'>
            <Typography component='div'>
              {user.data?.email}
            </Typography>
            <IconButton color="inherit" size='small' onClick={handleSignOut}>
              <LogoutIcon />
            </IconButton>
          </QueryHandler>
        )}
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  )
}

export default trpc.withTRPC(AppHeader);
