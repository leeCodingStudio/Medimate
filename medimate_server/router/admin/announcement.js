import express from 'express';
import * as AnnounceController from '../../controller/admin/announcement.js';
import { isAuth } from '../../middleware/token.js'

const router = express.Router();


router.post('/', isAuth,AnnounceController.createAnnounce);

router.get('/', AnnounceController.getAllAnnounce);

router.get('/:id',AnnounceController.searchAnnounceNum);

router.get('/', AnnounceController.getAllAnnounce);

router.get('/write')

router.put('/:id', isAuth,AnnounceController.updateAnnounce);

router.delete('/:id', AnnounceController.deleteAnnounce);

export default router;