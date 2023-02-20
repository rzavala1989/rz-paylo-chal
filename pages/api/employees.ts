import { Request, Response } from 'express';
import prisma from '@/pages/api/prisma';
import { EmployeeData } from '@/utils/interfaces/EmployeeData';

export const createEmployee = async (req: Request, res: Response) => {
  const data: EmployeeData = await req.body;
  const { firstName, lastName, email, phone, numDependents, dependents } = data;

  const employee = prisma.employee.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
      numDependents,
      dependents: {
        create: dependents.map((dependent) => ({
          firstName: dependent.firstName,
          lastName: dependent.lastName,
        })),
      },
    },
  });

  return employee;
};

export const getAllEmployees = async () => {
  const employees = await prisma.employee.findMany();
  return employees;
};
