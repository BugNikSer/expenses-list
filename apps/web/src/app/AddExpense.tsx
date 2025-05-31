'use client';

import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Box, Button, Drawer, Fab, IconButton, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useMemo, useState } from "react";

import { trpc } from '@web/src/lib/trpc';
import CategorySelect from "./_components/CategorySelect";
import ProductSelect from './_components/ProductSelect';
import TypeSelect from "./_components/TypeSelect";

const AddExpense = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const [productId, setProductId] = useState<number | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [typeId, setTypeId] = useState<number | null>(null);
  const [date, setDate] = useState<number | null>(null);
  const [cost, setCost] = useState<number | null>(null);
  const [amount, setAmount] = useState(1);
  const selectedDate = useMemo(() => date ? new Date(date) : null, [date]);
  const handleSelectDate = (date: Date | null) => {
    if (date) setDate(Number(date))
    else setDate(null);
  };

  const createExpense = trpc.expenses.create.useMutation();
  const expenseData = (productId || categoryId || typeId) && date && cost && amount ? {
    productId: productId || undefined,
    categoryId: categoryId || undefined,
    typeId: typeId || undefined,
    date: date - new Date().getTimezoneOffset() * 60_000, // To UTC timestamp
    cost,
    amount,
  } : null;
  const handleCreate = () => {
    if (!expenseData) return;
    const { amount, ...data } = expenseData;
    for (let i = 1; i <= amount; i++) createExpense.mutate(data);
  }

  const fabSx = useMemo(() => ({
    position: 'fixed',
    bottom: 'calc(var(--mui-spacing) * 2)',
    right: 'calc(var(--mui-spacing) * 2)',
  }), [])

  return (
    <>
      <Fab color="primary" sx={fabSx} onClick={openDrawer}>
        <AddIcon />
      </Fab>

      <Drawer anchor="bottom" open={showDrawer} onClose={closeDrawer}>
        <Box sx={{ width: 'calc(100%) - var(--mui-spacing) * 4', p: 2 }}>
          <Stack alignItems='end' justifyContent='center' direction='row' spacing={2}>

            {/* Product */}
            <Stack direction='row' alignItems='end' spacing={1} sx={{ flexGrow: 1 }}>
              <Tooltip
                title={
                  <Stack>
                    <Typography variant='h6'>Товар</Typography>
                    <Typography>Куриные крылья 1кг, Snickers, Поездка на работу, Тормоза</Typography>
                  </Stack>
                }
              >
                <HelpOutlineIcon />
              </Tooltip>
              <ProductSelect
                value={productId}
                onChange={setProductId}
                sx={{ flexGrow: 1 }}
                disabled={createExpense.isPending}
              />
            </Stack>

            {/* Category */}
            <Stack direction='row' alignItems='end' spacing={1} sx={{ flexGrow: 1 }}>
              <Tooltip
                title={
                  <Stack>
                    <Typography variant='h6'>Категория</Typography>
                    <Typography>Продукты, бытовая химия, такси, техника, запчасти, театр</Typography>
                  </Stack>
                }
              >
                <HelpOutlineIcon />
              </Tooltip>
              <CategorySelect
                value={categoryId}
                onChange={setCategoryId}
                sx={{ flexGrow: 1 }}
                disabled={createExpense.isPending}
              />
            </Stack>

            {/* Type */}
            <Stack direction='row' alignItems='end' spacing={1} sx={{ flexGrow: 1 }} >
              <Tooltip
                title={
                  <Stack>
                    <Typography variant='h6'>Тип</Typography>
                    <Typography>Базовые потребности, вредние привычки, развлечения, хобби, подарки, ремонт, обслуживание автомобиля</Typography>
                  </Stack>
                }
              >
                <HelpOutlineIcon />
              </Tooltip>
              <TypeSelect
                value={typeId}
                onChange={setTypeId}
                sx={{ flexGrow: 1 }}
                disabled={createExpense.isPending}
              />
            </Stack>
          </Stack>

          <Stack alignItems='end' justifyContent='center' direction='row' spacing={2}>

            {/* Date */}
            <DatePicker
              value={selectedDate}
              onChange={handleSelectDate}
              sx={{ flexGrow: 1 }}
              slotProps={{
                textField: {
                  variant: 'standard',
                  label: 'Дата',
                },
                field: {
                  clearable: true,
                }
              }}
              format='dd.MM.yyyy'
              disabled={createExpense.isPending}
              disableFuture={true}
            />

            {/* Amount */}
            <Stack direction='row' alignItems='end' spacing={1}>
              <IconButton size='small' onClick={() => setAmount(p => p > 1 ? p - 1 : p)}>+</IconButton>
              <Typography>{amount}</Typography>
              <IconButton size='small' onClick={() => setAmount(p => p + 1)}>-</IconButton>
            </Stack>

            {/* Price */}
            <TextField
              value={cost}
              sx={{ flexGrow: 1 }}
              onChange={(e) => setCost(Number(e.target.value.match(/^[0-9.]*$/g)))}
              label='Цена за 1шт/кг'
              placeholder='299.99'
            />

            {/* Submit */}
            <Button
              onClick={handleCreate}
              disabled={!expenseData} 
              loading={createExpense.isPending}
              variant='contained'
            >
              Создать
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  )
};

export default trpc.withTRPC(AddExpense);
