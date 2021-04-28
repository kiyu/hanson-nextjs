import { Student } from '../../../shared/models/student';

export type StudentViewModel = Student;

export class StudentViewModels {
  constructor(private list: StudentViewModel[]) {}

  toArray(): StudentViewModel[] {
    return this.list;
  }

  searchByName(name: string): StudentViewModels {
    const res = this.list.filter((v) => {
      const regex = new RegExp(`.*${name}.*`);
      return regex.test(v.firstName) || regex.test(v.lastName);
    });

    return new StudentViewModels(res);
  }
}
