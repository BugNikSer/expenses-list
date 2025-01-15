'use client';

import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import { ReactNode } from "react";

const QueryHandler = <T extends UseTRPCQueryResult<unknown, unknown>>({
  children,
  query,
  error,
  spinnerColor,
}: {
  children: ReactNode;
  query: T;
  error?: ReactNode
  spinnerColor?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
}) => {
  if (query.isLoading) return <CircularProgress size={'2rem'} color={spinnerColor} />
  if (query.data) return children
  if (query.error) return error || (
    <ErrorOutlineOutlinedIcon color="error" />
  )
  return <span>no response</span>
};

export default QueryHandler;
