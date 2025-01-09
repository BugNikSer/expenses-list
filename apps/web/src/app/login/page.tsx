'use client';
import { useState } from 'react';
import { trpc } from '@web/src/utils/trpc';

const LoginPage = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const loginFn = () => {
    trpc.auth.login.mutate({ login, password }).then(response => {
      console.log(response);
      setLogin('');
      setPassword('');
    })
  }

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <input value={login} onChange={(ev) => setLogin(ev.target.value)} />
        <input value={password} onChange={(ev) => setPassword(ev.target.value)} />
        <button onClick={loginFn}>login</button>
      </div>
    </div>
  )
};

export default LoginPage;
