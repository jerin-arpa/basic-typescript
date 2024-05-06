// Type Alias In Typescript
{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Ismat",
    age: 23,
    gender: "Female",
    contactNo: "4589374",
    address: "Bangladesh",
  };

  const student2: Student = {
    name: "Jerin",
    age: 23,
    gender: "Female",
    address: "Bangladesh",
  };

  const student3: Student = {
    name: "Arpa",
    age: 23,
    gender: "Female",
    address: "Bangladesh",
  };

  //  Type alias in string
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Ismat";
  const isAdmin: IsAdmin = true;

  //  Type alias in Function
  const add1 = (num1: number, num2: number): number => num1 + num2;

  //   Using type alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
