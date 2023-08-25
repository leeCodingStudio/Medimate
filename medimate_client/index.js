import express from 'express';
import bodyParser from 'body-parser';
import adminRouter from './router/admin/admin.js';
import mainRouter from './router/main/main.js';
import { config } from './config.js';


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//첫 페이지 설정
app.get('/',(req,res)=>{
    res.redirect('/main/index')
})


app.use('/admin', adminRouter);
app.use('/main', mainRouter);

// 에러 페이지
app.use((req, res, next) => {
    res.sendStatus(404)
});
app.use((error, req, res, next) => {
    console.log(error)
    res.sendStatus(500)
});

app.listen(config.port);