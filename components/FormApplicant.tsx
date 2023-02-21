import { Field, FormikValues, useFormikContext, FieldArray } from 'formik';
import React, { useState, useMemo } from 'react';
import { Dependent } from '@/utils/interfaces/DependentData';

const FormApplicant: React.FC = () => {
  const { touched, errors, values, setFieldValue } =
    useFormikContext<FormikValues>();
  const { firstName, lastName, email, phone, dependents } = values;

  const [selectedDependent, setSelectedDependent] = useState<React.Key>(0);

  const handleSelectDependent = (selectedDependent: React.Key) => {
    setSelectedDependent(selectedDependent);
  };

  const showDependentsField = useMemo(
    () => !!firstName && !!lastName && !!email && !!phone,
    [firstName, lastName, email, phone]
  );

  return (
    <>
      <div>
        <h1 className='font-bold uppercase text-5xl'>
          Send us a <br /> message
        </h1>
      </div>
      <div className='flex flex-col gap-5 md:grid-cols-2 mt-5'>
        <Field
          className={
            touched?.firstName && errors.firstName
              ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
              : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          }
          name='firstName'
          type='text'
          placeholder='Employee First Name*'
        />
        <Field
          className={
            touched?.lastName && errors.lastName
              ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
              : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          }
          type='text'
          name='lastName'
          placeholder='Employee Last Name*'
        />
        <Field
          className={
            touched?.email && errors.email
              ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
              : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          }
          name='email'
          type='email'
          placeholder='Email*'
        />
        <Field
          className={
            touched?.phone && errors.phone
              ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
              : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          }
          name='phone'
          placeholder='Phone*'
        />
      </div>
      {showDependentsField && (
        <div className='flex flex-col gap-5 md:grid-cols-2 mt-16'>
          <label htmlFor='numDepedendents'># of Dependents</label>
          <Field
            type='number'
            name='numDependents'
            placeholder='# of Dependents'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const num = parseInt(e.target.value, 10);
              const newDependents = Array(num)
                .fill(null)
                .map(() => ({ firstName: '', lastName: '' }));
              setFieldValue('numDependents', num);
              setFieldValue('dependents', newDependents);
            }}
          />

          <FieldArray name='dependents'>
            {() => (
              <>
                <caption>
                  All fields must be filled out for each dependent
                </caption>
                <div>
                  {dependents.map((_: Dependent, index: number) => (
                    <div
                      key={index}
                      onClick={() => handleSelectDependent(index)}
                      className='flex flex-col my-10 gap-5 md:grid-cols-2'
                    >
                      Dependent #{index + 1}
                      <Field
                        className={
                          'shadow appearance-none border rounded w-full py-2 my-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        }
                        name={`dependents.${index}.firstName`}
                        placeholder='Dependent First Name*'
                      />
                      <Field
                        className='shadow appearance-none border rounded w-full py-2 my-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        name={`dependents.${index}.lastName`}
                        placeholder='Dependent Last Name*'
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </FieldArray>
        </div>
      )}

      <div className='my-4'></div>
      <div className='my-2 w-1/2 lg:w-1/4'>
        <button
          type='submit'
          className='px-8 py-3 text-white bg-orange-500
             rounded focus:outline-none'
        >
          Add Employee
        </button>
      </div>
    </>
  );
};

export default FormApplicant;
