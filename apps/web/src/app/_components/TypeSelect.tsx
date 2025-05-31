import { useMemo } from "react";
import {
  Autocomplete,
  TextField,
} from "@mui/material";

import { trpc } from '@web/src/lib/trpc';
import SelectRequestError from "./SelectRequestError";
import { filterOptions, getOptionLabel, type TInnerOption } from "./selectUtils";

const TypeSelect = ({ value, onChange, sx, disabled, required }: {
  value: number | null;
  onChange: (v: number | null) => void;
  sx?: Parameters<typeof Autocomplete>[0]['sx']
  disabled?: Parameters<typeof Autocomplete>[0]['disabled'];
  required?: boolean
}) => {
  const types = trpc.types.all.useQuery();
  const createType = trpc.types.create.useMutation();

  const selected = useMemo(() => types.data?.find(i => i.id === value) || null, [types.data, value]);

  const handleChange = async (value: TInnerOption | string | null) => {
    if (!value) {
      onChange(null);
    } else if (typeof value === 'string' || value.inputValue ) {
      const name = typeof value === 'string' ? value : value.inputValue;
      if (!name) return;

      const newType = await createType.mutateAsync({ name });
      onChange(newType.id);
      void types.refetch();
    } else {
      onChange(value.id);
    }
  };

  if (types.error) return <SelectRequestError refetch={types.refetch} />

  return (
    <Autocomplete
      value={selected}
      options={types.data as TInnerOption[]}
      onChange={(event, value) => handleChange(value)}
      sx={sx}
      disabled={disabled}
      loading={types.isLoading || createType.isPending}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
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
          label="Тип"
          placeholder="Еда"
          required={required}
        />
      )}
    />
  )
};

export default TypeSelect;