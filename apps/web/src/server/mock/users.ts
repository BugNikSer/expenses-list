type MockUser = { login: string; password: string; id: number };
const mockUsers: MockUser[] = [];
let lastId = 0;

export const addMockUser = async ({ login, password }: Omit<MockUser, 'id'>) => {
  if (mockUsers.some(user => user.login === login)) throw new Error('User exists')
  lastId++;
  mockUsers.push({ login, password, id: lastId });
  return lastId;
};

export const findMockUser = async ({ login, password }: Omit<MockUser, 'id'>) => {
  return mockUsers.find(user => user.login === login && user.password === password);
};

export const getMockUserById = (id: number) => {
  return mockUsers.find(u => u.id === id);
};
