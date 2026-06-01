export class UsersService {
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'john',
      email: 'ojo@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Ajiboye',
      email: 'ajiboye24@gmail.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Gbeiga',
      email: 'taiwo5@yahoo.com',
      gender: 'male',
      isMarried: false,
    },
  ];

  nonUsers: { id: number; name: string; age: number }[] = [
    { id: 3, name: 'taiwo', age: 40 },
    { id: 4, name: 'Ajibade', age: 30 },
  ];

  getAllUsers() {
    return this.users;
  }

  getAllNonUsers() {
    return this.nonUsers;
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

  createUser(user: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
    return user;
  }
}
