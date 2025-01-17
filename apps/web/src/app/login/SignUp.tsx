"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Stack, TextField, Button, InputAdornment, IconButton, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { trpc } from '@web/src/lib/trpc';

const SignUpPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  const signUp = trpc.auth.signUp.useMutation();

  const handleSingUp = () => {
    setLoading(true);
    signUp
      .mutateAsync({ email, password })
      .then(response => {
        console.log(response);
        router.push('/');
      })
      .catch(e => {
        console.log(e);
        setError(e)
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Stack spacing={2}>
    <TextField
      variant="standard"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      label="e-mail"
      type='text'
    />
    <TextField
      variant="standard"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      label="пароль"
      type={showPassword ? 'text' : 'password'}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
              size='small'
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      }}
    />
    <Button
      onClick={handleSingUp}
      loading={loading}
      variant='contained'
    >
      Зарегистрироваться
    </Button>

    {error && <Alert severity="error">{error.message}</Alert>}
  </Stack>
  );
};

export default trpc.withTRPC(SignUpPage);
