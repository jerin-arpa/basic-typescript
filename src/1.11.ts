// Ternary, Optional Chaining & Nullish Coalescing Operator
{
  // Ternary Operator
  const age: number = 15;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  //  console.log(isAdult);

  // Nullish Coalescing Operator(Null/Undefined ---> Decision making)
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // Optional Chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Jerin",
    address: {
      city: "Sylhet",
      road: "Sylhet",
      presentAddress: "Sylhet",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No PermanentAddress";
  console.log({ permanentAddress });
}
