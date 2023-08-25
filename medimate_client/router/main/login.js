import express from 'express';
import * as loginService from '../../service/main/login.js';

const router = express.Router();

router.get('/', loginService.showAll);
router.post('/',loginService.login)

export default router;