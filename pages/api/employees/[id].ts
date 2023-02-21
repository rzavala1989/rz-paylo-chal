import nc from 'next-connect';
// handle server error middleware
import onError from '@/utils/middleware/errors';
// import the notes controller for postingNotes and fetching all notes
import {
  updateEmployee,
  getEmployee,
} from '../controllers/EmployeesController';

const handler = nc({ onError });

// get a single note
handler.get(getEmployee);
// update a single note
handler.put(updateEmployee);

export default handler;
