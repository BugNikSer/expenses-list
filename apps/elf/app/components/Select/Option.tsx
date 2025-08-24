import { useMemo } from "react";
import { ListItemText, MenuItem } from "@mui/material";
import type { Value } from "./types";

function SelectOption ({
    option,
    value,
    onClick,
}: {
    option: any;
    value: Value;
    onClick: (id: string | number) => void;
}) {
    const id = useMemo(() => option.id, [option]);

    const isSelected = useMemo(() => {
        if (Array.isArray(value)) {
            return (value as any[]).includes(id);
        }
        return value === id;
    }, [value, option]);

    return (
        <MenuItem onClick={() => onClick(id)} selected={isSelected}>
            <ListItemText>{option.label}</ListItemText>
        </MenuItem>
    )
};

export default SelectOption;
