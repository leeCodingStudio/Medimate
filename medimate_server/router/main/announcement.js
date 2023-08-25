import express from 'express';
import * as AnnounceController from '../../controller/main/announcement.js';


const router = express.Router();

router.get('/:id', AnnounceController.getAnnounceOne);

router.get('/',AnnounceController.getAllAnnounce);


export default router;