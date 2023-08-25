import express from 'express';
import { body } from 'express-validator';
import loginRouter from './login.js'
import joinRouter from './join.js'
import medicineRouter from './medicine.js'
import mypageRouter from './mypage.js'
import calendarRouter from './calendar.js'
import pharmRouter from './pharm.js'
import findRouter from './find.js'
import announcementRouter from './announcement.js'
import adminCheckRouter from './adminCheck.js'
import { isAuth } from '../../middleware/token.js';

const router = express.Router();

router.use('/login', loginRouter);
router.use('/join', joinRouter);
router.use('/medicine',medicineRouter);
router.use('/mypage', isAuth, mypageRouter);
router.use('/calendar', isAuth, calendarRouter)
router.use('/pharm',pharmRouter)
router.use('/find',findRouter)
router.use('/announcement',announcementRouter)
router.use('/adminCheck',adminCheckRouter)

export default router;