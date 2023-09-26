const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (personType,id){
    return this[personType].filter(person => person.id === id);
  },
  assignStudent: function(studentId,subject){
    const currentStudent = this.students.filter(student => student.id === studentId)[0];
    for( teacher of this.teachers){
        if(teacher.subjects.includes(subject) && teacher.capacityLeft >0){
            teacher.students.push(currentStudent);
            teacher.capacityLeft--;
            return `${currentStudent.name} was assigned to the teacher ${teacher.name}.`
        }
    }
    return 'Sorry, no available teachers left.'
  }
};
/* --------------------------------- testing -------------------------------- */
console.log(school.findPerson('teachers',2));
console.log(school.assignStudent(10,'physics'));
console.log(school.teachers);
console.log(school.assignStudent(11,'physics'));
console.log(school.assignStudent(12,'physics'));
console.log(school.assignStudent(13,'physics'));
