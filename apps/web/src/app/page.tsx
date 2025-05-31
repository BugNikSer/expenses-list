'use server';

import { subMonths, startOfDay, endOfDay } from 'date-fns';

import { cookies } from 'next/headers'
import expensesService from "../server/features/expenses/service";
// import userService from '../server/features/users/service';
import tokensService from '../server/features/token/tokenService';
import AddExpense from './AddExpense';

const IndexPage = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('access-token')?.value || '';
    const refreshToken = cookieStore.get('refresh-token')?.value || '';
    const data = await tokensService.parseTokens({ token, refreshToken });

    if (!data?.userId) return <div>no user</div>

    const expenses = await expensesService.list({
      filter: {
        userId: data.userId,
        date: {
          from: Number(subMonths(startOfDay(new Date()), 1)),
          to: Number(endOfDay(new Date())),
        },
      },
    });

    return (
      <div>
        <div>Hello user</div>
        <div>{expenses ? JSON.stringify(expenses) : '...'}</div>
        <AddExpense />
      </div>
    );
  } catch (e: unknown) {
    return <div>{(e as Error).message}</div>
  }

}

export default IndexPage;