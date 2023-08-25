import express from 'express';
import * as mypageService from '../../service/main/mypage.js';
import * as pwService from '../../service/main/pw.js';
import * as qnaService from '../../service/main/qna.js';
import * as wdService from '../../service/main/withdrawal.js';

const router = express.Router();

router.get('/info',mypageService.show);
router.post('/info',mypageService.changeInfo);

router.get('/pw',pwService.show)
router.post('/pw',pwService.changepw)

router.get('/qna',qnaService.show)
router.post('/qna',qnaService.create)


router.get ('/withdrawal',wdService.show)
router.post ('/withdrawal',wdService.Delete)


export default router;