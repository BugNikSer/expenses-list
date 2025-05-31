'use client';

import { useMemo, FC } from "react";
import { Autocomplete, TextField } from "@mui/material";

import { trpc } from '@web/src/lib/trpc';
import SelectRequestError from "./SelectRequestError";
import { filterOptions, getOptionLabel, type TInnerOption } from "./selectUtils";

const CategorySelect: FC<{
  value: number | null;
  onChange: (v: number | null) => void;
  sx?: Parameters<typeof Autocomplete>[0]['sx'];
  disabled?: Parameters<typeof Autocomplete>[0]['disabled'];
  required?: boolean
}> = ({ value, onChange, sx, disabled, required }) => {
  const categories = trpc.categories.all.useQuery();
  const createCategory = trpc.categories.create.useMutation();

  const selected = useMemo(() => categories.data?.find(i => i.id === value) || null, [categories.data, value]);
  
  const handleChange = async (value: TInnerOption | string | null) => {
    if (!value) {
      onChange(null);
    } else if (typeof value === 'string' || value.inputValue ) {
      const name = typeof value === 'string' ? value : value.inputValue;
      if (!name) return;

      const newCategory = await createCategory.mutateAsync({ name });
      onChange(newCategory.id);
      void categories.refetch();
    } else {
      onChange(value.id);
    }
  }

  if (categories.error) return <SelectRequestError refetch={categories.refetch} />

  return (
    <Autocomplete
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      loading={categories.isLoading || createCategory.isPending}
      options={(categories.data || []) as TInnerOption[]}
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
          label="Категория"
          placeholder="Еда"
          required={required}
        />
      )}
    />
  )
};

export default CategorySelect;
