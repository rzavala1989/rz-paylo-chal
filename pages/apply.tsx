import { ApplicationSchema } from '@/utils/schemas/ApplicationSchema';
import { Formik, Form, FormikHelpers } from 'formik';
import React from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { initialData } from './api/initialData';
import FormApplicant from './form-applicant';
import { EmployeePreviewCard } from '@/components/EmployeePreviewCard';
import { EmployeeData } from '@/utils/interfaces/EmployeeData';
import { createEmployee } from './api/employees';

const ApplyForm: React.FC<{}> = () => {
  const handleSubmit = async (
    values: EmployeeData,
    { setSubmitting, resetForm }: FormikHelpers<EmployeeData>
  ) => {
    createEmployee(values);
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
