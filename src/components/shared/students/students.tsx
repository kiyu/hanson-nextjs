import { Student } from '../../../shared/models/student';
import { StudentViewModels } from './view-model';

interface Props {
  viewModels: StudentViewModels;
}

export default function StudentsComponents(student: Props): JSX.Element {
  return (
    <>
      <ul>
        {student.viewModels.toArray().map((v) => {
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
