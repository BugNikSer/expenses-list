'use client';

import { Tabs, Tab, Paper } from "@mui/material";
import { useState, type SyntheticEvent } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginPage = () => {
  const [tab, setTab] = useState('in');

  const handleTabChange = (event: SyntheticEvent, value: string) => {
    setTab(value);
  }
  
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        elevation={3}
      >
        <Tabs
          value={tab}
          onChange={handleTabChange} 
          variant="fullWidth"
        >
          <Tab label="Вход" value="in" />
          <Tab label="Регистрация" value="up" />
        </Tabs>
        <div style={{
          padding: 32,
          gap: 32,
        }}>
          {tab === 'in' ? <SignIn /> : <SignUp />}
        </div>
      </Paper>
    </div>
  )
};

export default LoginPage;