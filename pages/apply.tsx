import { ApplicationSchema } from '@/utils/schemas/ApplicationSchema';
import { Formik, Form, FormikHelpers } from 'formik';
import React, { useState, useId, useEffect } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { initialData } from '../utils/initialData';
import FormApplicant from '../components/FormApplicant';
import { EmployeePreviewCard } from '@/components/EmployeePreviewCard';
import { EmployeeData } from '@/utils/interfaces/EmployeeData';
import axios from 'axios';
import { EmployeeBody } from '@/utils/interfaces/EmployeeBody';
import { getServerSideProps } from './employees';

export { getServerSideProps };

type Props = {
  results: EmployeeBody[];
};

const ApplyForm: React.FC<Props> = ({ results }) => {
  console.log(results);
  const [employeesData, setEmployeesData] = useState<EmployeeBody[]>(results);
  const tempEmployeeId = useId();

  useEffect(() => {
    axios.get('/api/employees').then((res) => {
      setEmployeesData(results);
    });
  }, [results]);

  const handleAddSubmit = async (body: EmployeeData) => {
    // add Note optimistically to ui
    let oldEmployeeState = employeesData;

    try {
      const addEmployee = [
        ...employeesData,
        {
          id: tempEmployeeId,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
          numDependents: body.numDependents,
          dependents: body.dependents,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      console.log('add employee: ', addEmployee);
      setEmployeesData(addEmployee);
      const { data } = await axios.post(`/api/employees`, body);
    } catch (error) {
      console.error(error);
      setEmployeesData(oldEmployeeState);
    }
  };

  const handleSubmit = async (
    values: EmployeeData,
    { setSubmitting, resetForm }: FormikHelpers<EmployeeData>
  ) => {
    handleAddSubmit(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <section className='flex justify-between'>
      <Formik
        initialValues={initialData}
        validationSchema={toFormikValidationSchema(ApplicationSchema)}
        validateOnChange
        onSubmit={handleSubmit}
      >
        <>
          <Form className='h-auto w-1/2'>
            <FormApplicant />
          </Form>

          <details open className='w-1/3'>
            {' '}
            <EmployeePreviewCard />
          </details>
        </>
      </Formik>
    </section>
  );
};

export default ApplyForm;
