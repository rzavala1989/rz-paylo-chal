import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { EmployeeBody } from '@/utils/interfaces/EmployeeBody';

type Props = {
  results: EmployeeBody[];
};

const EmployeeTable = ({ results }: Props) => {
  console.log(results);
  const [employeesData, setEmployeesData] = useState<EmployeeBody[]>(results);

  useEffect(() => {
    axios.get('/api/employees').then((res) => {
      setEmployeesData(results);
    });
  }, [results]);

  return (
    <div className='flex flex-col h-100'>
      <div className='my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <h1 className='text-center my-12 text-5xl'>Employees Table</h1>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    ID
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    First Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Last Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Phone
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Num Dependents
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {employeesData?.map((employee) => (
                  <tr key={employee.email}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {employee.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {employee.firstName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {employee.lastName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {employee.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {employee.phone}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {employee.numDependents}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <section className='my-8'>
              <em>
                Employee Benefits and Pay info aggregated here - unfinished
              </em>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/employees');

  return {
    props: {
      results: data.data.employees,
    },
  };
};

export default EmployeeTable;
