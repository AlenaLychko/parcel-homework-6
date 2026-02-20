export const users = [
  { name: "Олена", age: 16, city: "Монреаль" },
  { name: "Влад", age: 17, city: "Онатрио" },
  { name: "Саша", age: 13, city: "Херсон" },
  { name: "Аня", age: 16, city: "Лондон" },
];

export function getRandomUser() {
  const index = Math.floor(Math.random() * users.length);
  return users(index);
}
