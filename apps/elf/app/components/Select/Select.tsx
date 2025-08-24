"use client"

import { useState, useRef, useMemo, useEffect } from 'react';
import { Button, Popper, Backdrop, MenuList, Stack, Chip, IconButton, Input } from "@mui/material"
import { CloseRounded, SearchRounded } from '@mui/icons-material';

import type { Value } from "./types";
import Option from "./Option";
import Item from "./Item";

function Select({
    options,
    filterable,
    multiple,
    clearable,
    value,
    onChange,
    placeholder = "Выберите значение"
}: {
    options: any[];
    filterable?: boolean;
    multiple?: boolean;
    clearable?: boolean;
    value: Value;
    onChange: (value: Value) => void;
    placeholder?: string;
}) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [hiddenItems, setHiddenItems] = useState<any[]>([]);

    const handleOptionCLick = (id: string | number) => {
        if (multiple) {
            if (!value || !Array.isArray(value)) {
                onChange([id] as Value);
            } else {
                const optionValueIndex = (value as any[]).indexOf(id);
                if (optionValueIndex === -1) {
                    onChange([...(value as any[]), id]);
                } else {
                    onChange((value as any[]).toSpliced(optionValueIndex, 1));
                }
            }
        } else {
            onChange(id);
            setIsOpen(false);
        }
    };

    const handleChipDelete = (id: any) => {
        if (multiple) {
            if (!Array.isArray(value) || value.length === 1) onChange(null);

            const optionValueIndex = (value as any[]).indexOf(id);
            if (optionValueIndex !== -1) {
                onChange((value as any[]).toSpliced(optionValueIndex, 1));
            }
        } else {
            onChange(null);
        }
    };

    const handleChipIntersect = ({ id, isIntersecting }: { id: any, isIntersecting: boolean }) => {
        if (isIntersecting) {
            const index = hiddenItems.indexOf(id);
            setHiddenItems(hiddenItems.toSpliced(index, 1));
        } else setHiddenItems([...hiddenItems, id]);
    };

    useEffect(() => {
        if (!isOpen) setFilterValue("");
    }, [isOpen])

    const content = useMemo(() => {
        if (Array.isArray(value)) {
            if (value.length) return (
                <Stack
                    direction="row"
                    gap="4px"
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    {value.map((valueItem) => {
                        const option = options.find(({ id }) => id === valueItem)
                        return (
                            <Item
                                key={option.id}
                                id={option.id}
                                label={option.label}
                                onDelete={handleChipDelete}
                                handleIntersect={handleChipIntersect}
                            />
                        )
                    })}
                </Stack>
            )
            return placeholder;
        }

        if (value === null || value === "") return placeholder;
        const option = options.find(({ id }) => id === value);
        return <Chip label={option.label} />
    }, [value]);

    const filteredOptions = useMemo(() => {
        const filterRegExp = new RegExp(filterValue.toLowerCase())
        return options.filter(({ label }) => filterRegExp.test(label.toLowerCase()));
    }, [options, filterValue]);

    return (
        <>
            <Button
                ref={buttonRef}
                variant='outlined'
                onClick={() => setIsOpen(true)}
                endIcon={(
                    <>
                        {hiddenItems.length ? (
                            <Chip
                                onClick={(e) => e.stopPropagation()}
                                label={`+${hiddenItems.length}`}
                            />
                        ) : (<></>)}
                        {clearable && (
                            <IconButton
                                size='small'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onChange(null);
                                }}
                            >
                                <CloseRounded />
                            </IconButton>
                        )}
                    </>
                )}
                sx={{
                    width: "300px"
                }}
            >
                {content}
            </Button>
            <Backdrop
                open={isOpen}
                onClick={() => setIsOpen(false)}
                sx={(theme) => ({
                    zIndex: theme.zIndex.drawer + 1,
                    backgroundColor: "transparent",
                })}
            >
                <Popper
                    anchorEl={buttonRef?.current}
                    open={isOpen}
                    placement='bottom-start'
                    sx={(theme) => ({
                        boxShadow: `0 0 8px 4px rgba(0, 0, 0, 0.3)`,
                        zIndex: theme.zIndex.drawer + 2,
                        width: "300px"
                    })}
                    onClick={e => e.stopPropagation()}
                >
                    {filterable && (
                        <Input
                            value={filterValue}
                            onChange={e => setFilterValue(e.target.value)}
                            sx={{ width: '100%' }}
                            startAdornment={<SearchRounded />}
                        />
                    )}
                    <MenuList sx={{ padding: 0 }}>
                        {filteredOptions.map(option => (
                            <Option
                                key={option.id}
                                option={option}
                                onClick={handleOptionCLick}
                                value={value}
                            />
                        ))}
                    </MenuList>
                </Popper>
            </Backdrop>
        </>
    )
};

export default Select;