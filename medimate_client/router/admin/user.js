import express from 'express';
import * as userService from '../../service/admin/user.js';

const router = express.Router();

router.get('/', userService.showAll);
router.post('/update', userService.modify);
router.get('/remove/:id', userService.drop);

export default router;