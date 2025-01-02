import ClientSide from "./ClientSide";
import { trpc } from "./trpc";

const HomePage = async () => {
  const response = await trpc.hello.query({ name: 'User' })
  return (
    <div>
      {response} (server)
      <ClientSide />
    </div>
  );
}

export default HomePage;
