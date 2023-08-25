import express from 'express';
import loginRouter from './login.js';
import indexRouter from './index.js';
import mypageRouter from './mypage.js';
import medicineRouter from './medicine.js';
import calendarRouter from './calendar.js';
import drugstoreRouter from './drugstore.js';
import announcementRouter from './announcement.js';
import findRouter from './find.js';
import joinRouter from './join.js';
import logoutRouter from './logout.js';

const router = express.Router();


router.use('/index',indexRouter)
router.use('/login', loginRouter);
router.use('/join',joinRouter);
router.use('/mypage',mypageRouter)
router.use('/drugstore', drugstoreRouter);
router.use('/medicine', medicineRouter);
router.use('/calendar', calendarRouter);
router.use('/announcement', announcementRouter)
router.use('/find', findRouter)
router.use('/logout', logoutRouter)

export default router;