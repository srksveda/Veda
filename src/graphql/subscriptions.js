/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateMarks = /* GraphQL */ `
  subscription OnCreateMarks {
    onCreateMarks {
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
export const onUpdateMarks = /* GraphQL */ `
  subscription OnUpdateMarks {
    onUpdateMarks {
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
export const onDeleteMarks = /* GraphQL */ `
  subscription OnDeleteMarks {
    onDeleteMarks {
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
export const onCreateClassSection = /* GraphQL */ `
  subscription OnCreateClassSection {
    onCreateClassSection {
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
export const onUpdateClassSection = /* GraphQL */ `
  subscription OnUpdateClassSection {
    onUpdateClassSection {
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
export const onDeleteClassSection = /* GraphQL */ `
  subscription OnDeleteClassSection {
    onDeleteClassSection {
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
export const onCreateTimetableSlot = /* GraphQL */ `
  subscription OnCreateTimetableSlot {
    onCreateTimetableSlot {
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
export const onUpdateTimetableSlot = /* GraphQL */ `
  subscription OnUpdateTimetableSlot {
    onUpdateTimetableSlot {
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
export const onDeleteTimetableSlot = /* GraphQL */ `
  subscription OnDeleteTimetableSlot {
    onDeleteTimetableSlot {
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool {
    onCreateSchool {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool {
    onUpdateSchool {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool {
    onDeleteSchool {
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
export const onCreateSubject = /* GraphQL */ `
  subscription OnCreateSubject {
    onCreateSubject {
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
export const onUpdateSubject = /* GraphQL */ `
  subscription OnUpdateSubject {
    onUpdateSubject {
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
export const onDeleteSubject = /* GraphQL */ `
  subscription OnDeleteSubject {
    onDeleteSubject {
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
export const onCreateFaculty = /* GraphQL */ `
  subscription OnCreateFaculty {
    onCreateFaculty {
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
export const onUpdateFaculty = /* GraphQL */ `
  subscription OnUpdateFaculty {
    onUpdateFaculty {
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
export const onDeleteFaculty = /* GraphQL */ `
  subscription OnDeleteFaculty {
    onDeleteFaculty {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
