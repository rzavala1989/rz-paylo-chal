import { Dependent } from './DependentData';

export interface EmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  numDependents: number;
  dependents: Dependent[];
}
