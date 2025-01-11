"use client";

import { useState } from "react";
import { trpc } from '@web/src/lib/trpc';
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = trpc.auth.signUp.useMutation();

  const handleSingUp = () => {
    setLoading(true);
    signUp
      .mutateAsync({ login, password })
      .then(response => {
        console.log(response);
        router.push('/');
      })
      .catch(e => {
        console.log(e);
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
      <span>Sign Up</span>
      <input value={login} onChange={e => setLogin(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSingUp} disabled={loading}>Sign In</button>
    </div>
  );
};

export default SignUpPage;
