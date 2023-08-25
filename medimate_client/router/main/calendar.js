import express from 'express';
import * as calendarService from '../../service/main/calendar.js';

const router = express.Router();

router.get('/', calendarService.showAll);
router.get('/insert', calendarService.create);
router.get('/update/:id', calendarService.modify);
router.get('/remove/:id', calendarService.drop);

export default router;