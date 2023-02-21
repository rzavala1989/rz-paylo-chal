// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect';
// handle server error middleware
import onError from '@/utils/middleware/errors';
// import the notes controller for postingNotes and fetching all notes
import {
  getAllEmployees,
  createEmployee,
} from '../controllers/EmployeesController';
// initiate next-connect with error middleware
const handler = nc({ onError });

// handler request from "api/notes" endpoint
// handle post request for posting a note
handler.get(getAllEmployees);
// handle post request for posting a note
handler.post(createEmployee);

export default handler;
