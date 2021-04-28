import { Student } from '../../../shared/models/student';

interface Props {
  students: Student[];
}

export default function StudentsComponents(student: Props): JSX.Element {
  return (
    <>
      <ul>
        {student.students.map((v) => {
          return (
            <li key={v.id}>
              <p>firstName: {v.firstName}</p>
              <p>lastName: {v.lastName}</p>
              <p>country: {v.country}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
