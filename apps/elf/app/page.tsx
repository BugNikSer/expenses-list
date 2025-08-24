"use client"

import { useState, useEffect } from 'react';
import { Select } from './components/Select';
import { Box } from '@mui/material';

export default function Home() {
    const [value, setValue] = useState<number | null>(null);

    return (
    <Box>
        <Select
            value={value}
            options={[
                { id: 1, label: "One" },
                { id: 2, label: "Two" },
                { id: 3, label: "Three" },
                { id: 4, label: "Four" },
                { id: 5, label: "Five" },
            ]}
            onChange={v => {
                setValue(v as number);
            }}
            multiple
            clearable
            filterable
        />
    </Box>
    );
}
