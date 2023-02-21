import { Dependent } from './DependentData';

export interface EmployeeBody {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numDependents: number;
  dependents: Dependent[];
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}
