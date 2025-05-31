import { Alert, Button } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

const SelectRequestError = ({
  refetch
}: {
  refetch: () => void;
}) => (
  <Alert
    severity="error"
    action={
      <Button
        color="inherit"
        size="small"
        endIcon={<RefreshIcon />}
        onClick={refetch}
      >
        Повторить
      </Button>
    }
  >
    Ошибка
  </Alert>
);

export default SelectRequestError;
