'use client';

import { Autocomplete, TextField } from "@mui/material";
import { FC, useMemo } from "react";

import { trpc } from '@web/src/lib/trpc';
import SelectRequestError from "./SelectRequestError";
import { filterOptions, getOptionLabel, type TInnerOption } from "./selectUtils";

const ProductSelect: FC<{
  value: number | null;
  onChange: (v: number | null) => void;
  sx?: Parameters<typeof Autocomplete>[0]['sx'];
  disabled?: Parameters<typeof Autocomplete>[0]['disabled'];
  required?: boolean
}> = ({ value, onChange, sx, disabled, required }) => {
  const products = trpc.products.all.useQuery();
  const createProduct = trpc.products.create.useMutation();

  const selected = useMemo(() => products.data?.find(i => i.id === value) || null, [products.data, value]);
  
  const handleChange = async (value: TInnerOption | string | null) => {
    if (!value) {
      onChange(null);
    } else if (typeof value === 'string' || value.inputValue ) {
      const name = typeof value === 'string' ? value : value.inputValue;
      if (!name) return;

      const newProduct = await createProduct.mutateAsync({ name });
      onChange(newProduct.id);
      void products.refetch();
    } else {
      onChange(value.id);
    }
  }

  if (products.error) return <SelectRequestError refetch={products.refetch} />

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      loading={products.isLoading || createProduct.isPending}
      options={(products.data || []) as TInnerOption[]}
      value={selected as TInnerOption}
      onChange={(event, value) => handleChange(value)}
      sx={sx}
      disabled={disabled}
      filterOptions={filterOptions}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.name}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Продукт"
          placeholder="Snickers"
          required={required}
        />
      )}
    />
  )
};

export default ProductSelect;
