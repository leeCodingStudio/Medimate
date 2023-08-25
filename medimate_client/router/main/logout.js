import express from 'express';
import * as logoutService from '../../service/main/logout.js';

const router = express.Router();

router.get('/', logoutService.logout);

export default router;