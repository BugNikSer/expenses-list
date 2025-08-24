'use-client';

import { useEffect } from "react";
import { Chip } from '@mui/material';
import { useIntersectionObserver } from 'usehooks-ts';

function Item({
    label,
    id,
    onDelete,
    handleIntersect,
}: {
    label: any;
    id: any;
    onDelete: (id: any) => void;
    handleIntersect: (options: { id: any, isIntersecting: boolean }) => void
}) {
    const { isIntersecting, ref } = useIntersectionObserver({ threshold: 1 });
    useEffect(() => handleIntersect({ isIntersecting, id }), [isIntersecting, id])

    return (
        <Chip
            ref={ref}
            label={label}
            onClick={(e) => e.stopPropagation()}
            onDelete={() => onDelete(id)}
            sx={{
                visibility: isIntersecting ? "visible" : "hidden",
            }}
        />
    )
};

export default Item;
