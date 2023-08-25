import nodemailer from 'nodemailer';
import { config } from '../config.js';

const transporter = nodemailer.createTransport({
	// 사용하고자 하는 서비스
	service: 'naver',
	host: config.senderSmtp, // 'smtp.gmail.com'
	port: config.senderPort, // 587
	auth: {
		user: config.senderEmail, // 'myemail@gmail.com'
		pass: config.senderPass, // 'password486!'
    }
});

export async function emailPost(U_EMAIL, text){
    await transporter.sendMail({
        // 보내는 곳의 이름과, 메일 주소를 입력
        from: `"MEDIMATE" ${config.senderEmail}`,
        // 받는 곳의 메일 주소를 입력
        to: U_EMAIL,
        // 보내는 메일의 제목을 입력
        subject: 'MEDIMATE',
        text
});}