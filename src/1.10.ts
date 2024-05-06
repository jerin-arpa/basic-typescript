// Union And Intersection Types
{
  // Union Types
  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+" | "B-";
  };

  const user1: User = {
    name: "Jerin",
    email: "jerin@jerin.com",
    gender: "female",
    bloodGroup: "B-",
  };

  // Intersection Types
  type FrontendDeveloper1 = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper1 = FrontendDeveloper1 & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper1 = {
    skills: ["HTML", "CSS", "Javascript", "Reactjs", "Nodejs", "Expressjs"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
