// Destructuring

// Object Destructuring
const user = {
  id: 38,
  name: {
    firstName: "Ismat",
    middleName: "Jerin",
    lastName: "Arpa",
  },
  contactNo: "6483494",
  address: "Bangladesh",
};

const {
  contactNo,
  name: { middleName: midName },
} = user;

// Array Destructuring
const myFriends = ["A", "B", "C", "D"];

const [a, b, bestFriend] = myFriends;
// If i want to skip a,b value thn
const [, , bestFriendd] = myFriends;

const friends = ["A", "B", "C", "D", "E", "F", "G"];
const [c, d, e, ...rest] = friends;
