/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMarks = /* GraphQL */ `
  query SyncMarks(
    $filter: ModelMarksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMarks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        subject {
          id
          subjectCode
          subjectName
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
      nextToken
      startedAt
    }
  }
`;
export const getMarks = /* GraphQL */ `
  query GetMarks($id: ID!) {
    getMarks(id: $id) {
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
export const listMarkss = /* GraphQL */ `
  query ListMarkss(
    $filter: ModelMarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        subject {
          id
          subjectCode
          subjectName
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
      nextToken
      startedAt
    }
  }
`;
export const syncClassSections = /* GraphQL */ `
  query SyncClassSections(
    $filter: ModelClassSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClassSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getClassSection = /* GraphQL */ `
  query GetClassSection($id: ID!) {
    getClassSection(id: $id) {
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
export const listClassSections = /* GraphQL */ `
  query ListClassSections(
    $filter: ModelClassSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTimetableSlots = /* GraphQL */ `
  query SyncTimetableSlots(
    $filter: ModelTimetableSlotFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimetableSlots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        time
        subject {
          id
          subjectCode
          subjectName
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
      nextToken
      startedAt
    }
  }
`;
export const getTimetableSlot = /* GraphQL */ `
  query GetTimetableSlot($id: ID!) {
    getTimetableSlot(id: $id) {
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
export const listTimetableSlots = /* GraphQL */ `
  query ListTimetableSlots(
    $filter: ModelTimetableSlotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimetableSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        subject {
          id
          subjectCode
          subjectName
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
      nextToken
      startedAt
    }
  }
`;
export const syncSchools = /* GraphQL */ `
  query SyncSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncSubjects = /* GraphQL */ `
  query SyncSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getSubject = /* GraphQL */ `
  query GetSubject($id: ID!) {
    getSubject(id: $id) {
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
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFaculties = /* GraphQL */ `
  query SyncFaculties(
    $filter: ModelFacultyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFaculties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFaculty = /* GraphQL */ `
  query GetFaculty($id: ID!) {
    getFaculty(id: $id) {
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
export const listFacultys = /* GraphQL */ `
  query ListFacultys(
    $filter: ModelFacultyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacultys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncDepartments = /* GraphQL */ `
  query SyncDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
