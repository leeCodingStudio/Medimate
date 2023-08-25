import express from 'express';
import * as drugstore from '../../service/main/drugstore.js';

const router = express.Router();

router.get('/', drugstore.showAll);

export default router;