export interface GetStudentsResponse {
  total: number;
  items: {
    id: string;
    name: string;
    country: string;
  }[];
}
