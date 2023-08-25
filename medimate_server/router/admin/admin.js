import express from 'express';
import { body } from 'express-validator';
import userRouter from './user.js';
import medicineRouter from './medicine.js';
import qnaRouter from './qna.js';
import announcementRouter from './announcement.js';
import drugstoreRouter from './drugstore.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/medicine', medicineRouter);
router.use('/drugstore', drugstoreRouter);
router.use('/announcement', announcementRouter);
router.use('/qna', qnaRouter);

export default router;