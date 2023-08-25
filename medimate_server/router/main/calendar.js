import express from "express";
import * as calendarController from '../../controller/main/calendar.js';
import { isAuth } from '../../middleware/token.js'

const router = express.Router();

router.get('/', isAuth, calendarController.showAll);
router.get('/:id', isAuth, calendarController.showOne);
router.post('/', isAuth, calendarController.create);
router.put('/:id', isAuth, calendarController.modify);
router.delete('/:id', isAuth, calendarController.drop);

export default router;