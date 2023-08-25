import express from 'express';
import * as announcementService from '../../service/main/announcement.js';

const router = express.Router();

router.get('/', announcementService.showAll);
router.get('/:id', announcementService.showOne);


export default router;