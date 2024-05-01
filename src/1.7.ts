// Spread Operator, Rest Operator
{
  // Spread Operator
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["d", "e", "f"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizba",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //  Rest Operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("a", "b", "c", "d", "e");
}
