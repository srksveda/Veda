/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      regnum
      name
      rollnum
      classSection {
        id
        name
        strength
        timetable {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
        school {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      marks {
        items {
          assignment
          exams
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      regnum
      name
      rollnum
      classSection {
        id
        name
        strength
        timetable {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
        school {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      marks {
        items {
          assignment
          exams
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      regnum
      name
      rollnum
      classSection {
        id
        name
        strength
        timetable {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
        school {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      marks {
        items {
          assignment
          exams
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMarks = /* GraphQL */ `
  mutation CreateMarks(
    $input: CreateMarksInput!
    $condition: ModelMarksConditionInput
  ) {
    createMarks(input: $input, condition: $condition) {
      subject {
        id
        subjectCode
        subjectName
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      assignment
      exams
      student {
        id
        regnum
        name
        rollnum
        classSection {
          id
          name
          strength
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMarks = /* GraphQL */ `
  mutation UpdateMarks(
    $input: UpdateMarksInput!
    $condition: ModelMarksConditionInput
  ) {
    updateMarks(input: $input, condition: $condition) {
      subject {
        id
        subjectCode
        subjectName
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      assignment
      exams
      student {
        id
        regnum
        name
        rollnum
        classSection {
          id
          name
          strength
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMarks = /* GraphQL */ `
  mutation DeleteMarks(
    $input: DeleteMarksInput!
    $condition: ModelMarksConditionInput
  ) {
    deleteMarks(input: $input, condition: $condition) {
      subject {
        id
        subjectCode
        subjectName
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      assignment
      exams
      student {
        id
        regnum
        name
        rollnum
        classSection {
          id
          name
          strength
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createClassSection = /* GraphQL */ `
  mutation CreateClassSection(
    $input: CreateClassSectionInput!
    $condition: ModelClassSectionConditionInput
  ) {
    createClassSection(input: $input, condition: $condition) {
      id
      name
      strength
      timetable {
        items {
          id
          time
          day
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          regnum
          name
          rollnum
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      school {
        id
        classSection {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateClassSection = /* GraphQL */ `
  mutation UpdateClassSection(
    $input: UpdateClassSectionInput!
    $condition: ModelClassSectionConditionInput
  ) {
    updateClassSection(input: $input, condition: $condition) {
      id
      name
      strength
      timetable {
        items {
          id
          time
          day
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          regnum
          name
          rollnum
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      school {
        id
        classSection {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteClassSection = /* GraphQL */ `
  mutation DeleteClassSection(
    $input: DeleteClassSectionInput!
    $condition: ModelClassSectionConditionInput
  ) {
    deleteClassSection(input: $input, condition: $condition) {
      id
      name
      strength
      timetable {
        items {
          id
          time
          day
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          regnum
          name
          rollnum
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      school {
        id
        classSection {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTimetableSlot = /* GraphQL */ `
  mutation CreateTimetableSlot(
    $input: CreateTimetableSlotInput!
    $condition: ModelTimetableSlotConditionInput
  ) {
    createTimetableSlot(input: $input, condition: $condition) {
      id
      time
      subject {
        id
        subjectCode
        subjectName
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      faculty {
        id
        facultyName
        regnum
        timetableSlot {
          nextToken
          startedAt
        }
        department {
          id
          departmentName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      day
      classSection {
        id
        name
        strength
        timetable {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
        school {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTimetableSlot = /* GraphQL */ `
  mutation UpdateTimetableSlot(
    $input: UpdateTimetableSlotInput!
    $condition: ModelTimetableSlotConditionInput
  ) {
    updateTimetableSlot(input: $input, condition: $condition) {
      id
      time
      subject {
        id
        subjectCode
        subjectName
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      faculty {
        id
        facultyName
        regnum
        timetableSlot {
          nextToken
          startedAt
        }
        department {
          id
          departmentName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      day
      classSection {
        id
        name
        strength
        timetable {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
        school {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTimetableSlot = /* GraphQL */ `
  mutation DeleteTimetableSlot(
    $input: DeleteTimetableSlotInput!
    $condition: ModelTimetableSlotConditionInput
  ) {
    deleteTimetableSlot(input: $input, condition: $condition) {
      id
      time
      subject {
        id
        subjectCode
        subjectName
        marks {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      faculty {
        id
        facultyName
        regnum
        timetableSlot {
          nextToken
          startedAt
        }
        department {
          id
          departmentName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      day
      classSection {
        id
        name
        strength
        timetable {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
        school {
          id
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
      id
      classSection {
        items {
          id
          name
          strength
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
      id
      classSection {
        items {
          id
          name
          strength
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
      id
      classSection {
        items {
          id
          name
          strength
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSubject = /* GraphQL */ `
  mutation CreateSubject(
    $input: CreateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    createSubject(input: $input, condition: $condition) {
      id
      subjectCode
      subjectName
      marks {
        items {
          assignment
          exams
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSubject = /* GraphQL */ `
  mutation UpdateSubject(
    $input: UpdateSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    updateSubject(input: $input, condition: $condition) {
      id
      subjectCode
      subjectName
      marks {
        items {
          assignment
          exams
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubject = /* GraphQL */ `
  mutation DeleteSubject(
    $input: DeleteSubjectInput!
    $condition: ModelSubjectConditionInput
  ) {
    deleteSubject(input: $input, condition: $condition) {
      id
      subjectCode
      subjectName
      marks {
        items {
          assignment
          exams
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createFaculty = /* GraphQL */ `
  mutation CreateFaculty(
    $input: CreateFacultyInput!
    $condition: ModelFacultyConditionInput
  ) {
    createFaculty(input: $input, condition: $condition) {
      id
      facultyName
      regnum
      timetableSlot {
        items {
          id
          time
          day
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      department {
        id
        departmentName
        faculty {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFaculty = /* GraphQL */ `
  mutation UpdateFaculty(
    $input: UpdateFacultyInput!
    $condition: ModelFacultyConditionInput
  ) {
    updateFaculty(input: $input, condition: $condition) {
      id
      facultyName
      regnum
      timetableSlot {
        items {
          id
          time
          day
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      department {
        id
        departmentName
        faculty {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFaculty = /* GraphQL */ `
  mutation DeleteFaculty(
    $input: DeleteFacultyInput!
    $condition: ModelFacultyConditionInput
  ) {
    deleteFaculty(input: $input, condition: $condition) {
      id
      facultyName
      regnum
      timetableSlot {
        items {
          id
          time
          day
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      department {
        id
        departmentName
        faculty {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      departmentName
      faculty {
        items {
          id
          facultyName
          regnum
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      departmentName
      faculty {
        items {
          id
          facultyName
          regnum
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      departmentName
      faculty {
        items {
          id
          facultyName
          regnum
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
