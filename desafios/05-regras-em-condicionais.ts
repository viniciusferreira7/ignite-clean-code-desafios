const necessaryGradeToBeApproved = 7
const studentGrade = 10

const numberOfAbsensesToFailSchool = 100
const studentNumberOfAbsenses = 109

function checkIfStudentPassedTheSchoolYear() {
  const userDoesntHasNecessaryGradeToBeApproved = studentGrade < necessaryGradeToBeApproved
  const userHasNumberAbsensesToFail = studentNumberOfAbsenses > numberOfAbsensesToFailSchool

  if (userDoesntHasNecessaryGradeToBeApproved) {
    return { error: true, message: 'Student was not approved because his grade was below the necessary.' }
  }

  if (userHasNumberAbsensesToFail) {
    return { error: true, message: 'Student was not approved because of his absenses' }
  }

  return { error: false, message: 'Student was approved :)' }

}

console.log(checkIfStudentPassedTheSchoolYear())