import React from 'react';
import { useFormikContext } from 'formik';
import { EmployeeData } from '@/utils/interfaces/EmployeeData';

export const EmployeePreviewCard = () => {
  const { values } = useFormikContext();
  const { numDependents, firstName, lastName } = values as EmployeeData;

  /*NOTE: This is where you would calculate the cost of benefits for the employee and their dependents. 
          For this challenge, taking into consideration its unfinished, I just hardcode the values.
          The values are calculated in the utils folder in the calculateBenefits 
          so they can be returned in the Employee table */

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

  return (
    <aside className='flex flex-col gap-4'>
      <div className='bg-[#160f62b7] text-white border-2 rounded-md border-orange-500 shadow  p-4 w-full'>
        <h3 className='text-lg font-bold mb-2'>Cost of Benefits</h3>
        <p className='mb-2'>Employee: ${employeeCost.toFixed(2)}</p>
        <p>
          Dependents ({numDependents} x ${dependentCost}): $
          {(numDependents * dependentCost).toFixed(2)}
        </p>
        <hr className='my-4 border-orange-300' />
        <p className='text-lg font-bold mb-2'>
          Total Cost: ${totalCost.toFixed(2)}
        </p>
        <p>
          Discount ({discountedTotalCost / totalCost}%): -$
          {(totalCost - discountedTotalCost).toFixed(2)}
        </p>
        <hr className='my-4 border-orange-300' />
        <p className='text-lg font-bold mb-2'>
          Cost per Paycheck: ${(discountedTotalCost / numPaychecks).toFixed(2)}
        </p>
      </div>
      <div className='bg-[#160f62b7] text-white shadow border-2 rounded-md border-orange-500 p-4 w-full'>
        <h3 className='text-lg font-bold mb-2'>Paycheck Details</h3>
        <p>Employee Paycheck: ${employeePaycheck.toFixed(2)}</p>
        <p>
          Benefits Deduction: -$
          {(discountedTotalCost / numPaychecks).toFixed(2)}
        </p>
        <hr className='my-4 border-orange-300' />
        <p className='text-lg font-bold mb-2'>
          Take-Home Pay: $
          {(employeePaycheck - discountedTotalCost / numPaychecks).toFixed(2)}
        </p>
      </div>
    </aside>
  );
};
