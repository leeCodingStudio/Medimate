import express from 'express';
import * as qnaService from '../../service/admin/qna.js';

const router = express.Router();

router.get('/',qnaService.showAll);
router.post('/',qnaService.create)

export default router;