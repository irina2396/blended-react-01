type User = {
  name: string;
  age: number;
};

type CreateUser = {
  name: string;
  age: number;
  isAdmin: boolean;
};

function createUser({ name, age }: User): CreateUser {
  return {
    name,
    age,
    isAdmin: false,
  };
}

console.log(createUser({ name: "Alice", age: 30 }));
