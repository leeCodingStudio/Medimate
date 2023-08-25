import express from 'express';
import * as adminAnnouncement from '../../service/admin/announcement.js';
import { upload } from '../../middleware/image.js';
import fs from 'fs'

const router = express.Router();

router.get('/',adminAnnouncement.showAll);
router.get('/write',adminAnnouncement.showWrite)
router.get('/:id',adminAnnouncement.showOne);
router.post('/',upload.single("A_IMAGE"), adminAnnouncement.create);
router.post('/update',upload.single("A_IMAGE"), adminAnnouncement.modify);
router.get('/remove/:id',adminAnnouncement.drop);




export default router;