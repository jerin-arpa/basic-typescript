"use strict";
// Spread Operator, Rest Operator
{
    // Spread Operator
    const bros1 = ["a", "b", "c"];
    const bros2 = ["d", "e", "f"];
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
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //  Rest Operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("a", "b", "c", "d", "e");
}
