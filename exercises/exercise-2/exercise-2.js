let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

let [firstName, lastName, occupation] = hogwarts;

function displayNames(hogwarts) {
  hogwarts.forEach(student => {
    if(student.house.includes("Gryffindor") && student.occupation.includes("Student")) {
      console.log(`Hi, I go to Hogwarts School of Witchcraft and Wizardy. I'm ${student.firstName} ${student.lastName}, and I'm in Gryffindor House. `);
    } else if(student.house.includes("Gryffindor") && student.occupation.includes("Teacher")) {
      console.log(`Hi, I teach at Hogwarts School of Witchcraft and Wizardy. I'm ${student.firstName} ${student.lastName}, and I was in Gryffindor House. `);
    }
  });
};

displayNames(hogwarts);

let [firstName, lastName, pet] = hogwarts;

function teachersWithPets(hogwarts) {
  hogwarts.forEach(teacher => {
    if(teacher.occupation === "Teacher" && teacher.pet !== null) {
      console.log(`Hi I'm ${teacher.firstName} ${teacher.lastName} and I have a pet ${teacher.pet}.`)
    }
  })
}

teachersWithPets(hogwarts);