export interface StudentResponse {
  id: string;
  name: string;
  country: string;
}
export interface GetStudentsResponse {
  total: number;
  items: StudentResponse[];
}
