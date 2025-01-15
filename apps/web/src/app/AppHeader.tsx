'use client';

import { useRouter, usePathname } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { trpc } from '@web/src/lib/trpc';
import QueryHandler from '@web/src/app/_components/QueryHandler';

const AppHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === '/login') return <></>

  const user = trpc.user.get.useQuery();

  const signOut = trpc.auth.signOut.useMutation();
  const handleSignOut = () => {
    signOut.mutateAsync()
    .then(() => {
      router.push('/');
    })
    .catch((e : unknown) => {
      console.log('Response failed', e);
    });
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography component='div' variant='h6' sx={{ flexGrow: 1 }}>
          My expenses
        </Typography>

        <QueryHandler query={user} error={<></>} spinnerColor='secondary'>
          <Typography component='div'>
            {user.data?.email}
          </Typography>
        </QueryHandler>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSignOut}
          endIcon={<LogoutIcon />}
          sx={{ ml: '1rem' }}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default trpc.withTRPC(AppHeader);
