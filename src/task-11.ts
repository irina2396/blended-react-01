interface User {
  username: string;
  age: number;
  city?: string;
}

type Role = "admin" | "user" | "guest";

function createUserCard(user: User, role: Role): string {
  const city = user.city || "Unknown";
  return `${user.username}`;
}
