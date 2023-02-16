import express from 'express';
import { getAllMotherboards } from '../controllers';

const router = express.Router();

router.route('/').get(getAllMotherboards);

export default router;
