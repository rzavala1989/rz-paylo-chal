export interface EmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numDependents: number;
  dependents: Dependent[];
}

export interface Dependent {
  firstName: string;
  lastName: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}
