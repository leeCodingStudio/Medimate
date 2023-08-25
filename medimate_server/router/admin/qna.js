import express from 'express'
import * as QNA from '../../controller/admin/qna.js'
import { isAuth } from '../../middleware/token.js'

const app = express()
app.use(express.json())

const router = express.Router()


router.get('/',isAuth,QNA.SearchQnaAll)
router.get('/:id',QNA.SearchQnaOne)


router.post('/',isAuth,QNA.ChangeQna)

router.put('/',QNA.ChangeQna)


export default router; 