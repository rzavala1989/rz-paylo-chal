import catchAsyncErrors from '@/utils/middleware/catchAsyncErrors';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prismaClient';
import { EmployeeBody } from '@/utils/interfaces/EmployeeBody';
import { calculateBenefits } from '@/utils/benefitsCalculator';

const getAllEmployees = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const employees = await prisma.employee.findMany();

    res.status(200).json({
      status: 'success',
      data: {
        employees,
      },
      // 'eagar loading' of dependents
      include: { dependents: true },
    });
  }
);

const createEmployee = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const employeeBody: EmployeeBody = req.body;
      const newEmployee = await prisma.employee.create({
        data: {
          firstName: employeeBody.firstName,
          lastName: employeeBody.lastName,
          email: employeeBody.email,
          phone: employeeBody.phone,
          numDependents: employeeBody.numDependents,
          dependents: {
            create: employeeBody.dependents.map((dependent) => ({
              firstName: dependent.firstName,
              lastName: dependent.lastName,
            })),
          },
        },
        include: { dependents: true },
      });

      // find the employee that was just created, and return its benefits
      const benefits = await calculateBenefits(newEmployee);

      res.json({ newEmployee, benefits });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  }
);

// get one note from with a note id request dynamically
const getEmployee = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const employee = await prisma.employee.findUnique({
      where: {
        id: id as string,
      },
    });

    res.status(200).json({
      status: 'success',
      data: {
        employee,
      },
    });
  }
);

// update a employee from with a employee id request dynamically
const updateEmployee = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    const employeeBody: EmployeeBody = req.body;

    const employee = await prisma.employee.update({
      where: {
        id: id as string,
      },
      data: {
        firstName: employeeBody.firstName,
        lastName: employeeBody.lastName,
        email: employeeBody.email,
        phone: employeeBody.phone,
        numDependents: employeeBody.numDependents,
        dependents: {
          create: employeeBody.dependents,
        },
      },
    });
    res.status(200).json({
      status: 'success',
      data: {
        employee,
      },
    });
  }
);

export { getAllEmployees, createEmployee, getEmployee, updateEmployee };
