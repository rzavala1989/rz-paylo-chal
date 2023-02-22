import { BenefitsResponse } from './interfaces/BenefitsResponse';
import { EmployeeData } from './interfaces/EmployeeData';

export const calculateBenefits = (
  employeeData: EmployeeData
): BenefitsResponse => {
  const { numDependents, firstName, lastName } = employeeData;

  //constants
  const fullName = `${firstName} ${lastName}`;
  const employeeCost = 1000;
  const employeePaycheck = 2000;

  const dependentCost = 500;
  const numPaychecks = 26;

  const totalCost = employeeCost + dependentCost * numDependents;

  // Apply discount for names that start with 'A'

  const applyDiscount = fullName.charAt(0).toUpperCase() === 'A';
  const discountAmount = applyDiscount ? 0.1 : 0;
  const discount = totalCost * discountAmount;
  const discountedTotalCost = totalCost - discount;

  return {
    totalCost,
    discountAmount,
    discountedTotalCost,
    costPerPaycheck: discountedTotalCost / numPaychecks,
  };
};
