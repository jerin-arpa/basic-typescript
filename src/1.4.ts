// Basic DataType
{
  // String
  let firstName: string = "Jerin";
  // Number
  let roll: number = 123;
  // Boolean
  let isAdmin: boolean = true;
  // Undefine
  let x: undefined = undefined;
  // Null
  let y: null = null;

  // Anytype
  let d;
  d = 123;
  d = "dnff";
  d = true;

  // Array
  let friends: string[] = ["a", "b"];
  friends.push("c");
  console.log(friends);

  let eligibleRollList: number[] = [38, 74];

  // tuple ---> array --->order --> type of value
  let coordinates: [number, number] = [1, 5];

  let ageName: [number, string] = [23, "jerin"];
  let ageNameBool: [number, string, boolean] = [23, "jerin", true];
}
