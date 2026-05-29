export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'john', age: 30, gender: 'male', isMarried: false },
    { id: 2, name: 'Ajiboye', age: 30, gender: 'female', isMarried: true },
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
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
    return user;
  }
}
