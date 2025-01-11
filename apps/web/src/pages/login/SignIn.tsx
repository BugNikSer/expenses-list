'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { trpc } from '@web/src/lib/trpc';

const SignInPage = () => {
  const router = useRouter();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = trpc.auth.signIn.useMutation();

  const handleSignIn = () => {
    setLoading(true);
    signIn
      .mutateAsync({ login, password })
      .then(response => {
        console.log(response);
        router.push('/');
      })
      .catch((e) => {
        console.log('Response failed', e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <span>Sign In</span>
      <input value={login} onChange={e => setLogin(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignIn} disabled={loading}>Sign In</button>
    </div>
  );
};

export default trpc.withTRPC(SignInPage);
