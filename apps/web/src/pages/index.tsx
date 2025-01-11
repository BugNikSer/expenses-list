'use server';

import { trpc } from '@web/src/lib/trpc';

const IndexPage = () => {
  const hello = trpc.hello.useQuery({ text: 'client' });
  const test = trpc.auth.test.useQuery();

  const logOut = trpc.auth.signOut.useMutation();

  const handleLogOut = () => {
    logOut.mutate();
  }

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      <p>{test.data ? JSON.stringify(test.data) : 'no data'}</p>
      <button onClick={handleLogOut}>Log Out</button>
      {/* <form action={action}>
        <button disabled={pending}>Sign out</button>
      </form> */}
    </div>
  );
}

export default IndexPage;