import { StudentResponse } from '../api/students/response';
import { Student } from '../models/student';

export const adaptStudent = (v: StudentResponse): Student => {
  const [firstName, lastName] = v.name.split(' ');
  return {
    id: v.id,
    country: v.country,
    firstName,
    lastName,
  };
};
