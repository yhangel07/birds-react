import express from 'express';
import {
    getBirdDetails, getListOfBirds
} from '../controllers/birdController';

const router = express.Router();

router.get('/birds', getListOfBirds);
router.get('/birds/:id', getBirdDetails);

export default router;