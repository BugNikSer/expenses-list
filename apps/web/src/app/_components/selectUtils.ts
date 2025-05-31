import { createFilterOptions } from '@mui/material/Autocomplete';
import { FilterOptionsState } from "@mui/material";

export type TInnerOption = {
  id: number;
  name: string;
  inputValue?: string
}

const filter = createFilterOptions<TInnerOption>();

export const filterOptions = (options: TInnerOption[], params: FilterOptionsState<TInnerOption>) => {
  const filtered = filter(options, params);

      const { inputValue } = params;
      const isExisting = options.some((option) => inputValue === option.name);
      if (inputValue !== '' && !isExisting) {
        filtered.push({
          id: -1,
          inputValue,
          name: `Add "${inputValue}"`,
        });
      }

      return filtered;
};
export const getOptionLabel = (option: TInnerOption | string) => {
  if (typeof option === 'string') {
    return option;
  }
  if (option.inputValue) {
    return option.inputValue;
  }
  return option.name;
};
