import jwt from 'jsonwebtoken';
import * as UserRepository from '../data/admin/user.js';
import {config} from '../config.js'

const AUTH_ERROR = { message: '인증에러' };

export const adminIsAuth = async (req, res, next) => { // 인증의 여부를 알려주는 함수 생성
    const authHeader = req.get('Authorization')
    if (!(authHeader && authHeader.startsWith('Bearer '))){ //  만약 authHeader와 autherHeader에서 Bearer 로 시작하는 값이 정해져있지 않다면(and연산), 401오류를 출력함.
        return res.status(401).json({message:'로그인 필요'});}
        const token = authHeader.split(' ')[1]; // token값을 한칸 띄운 split값의 첫번째자리를 가져옴.
        jwt.verify(
            token,
            config.jwt.secretKey, // server>controller>auth.js에서의 secretkey를 가져옴.
            async (error, decoded) => {
                if (error) {
                    return res.status(402).json({message:'로그인 필요'});
                }
                const user = await UserRepository.getByUNum(decoded.id);
                if (!user) {
                    return res.status(403).json(decoded);
                }
                if (user.U_NUM > 10){
                    return res.status(402).json({message:'관리자 권한 없음'});
                }
                req.U_NUM = user.U_NUM;
                next(); // 이후 위에서 설정한 isAuth를 router>auth.js의 me와 authController.me 사이에 넣음.
            }
    )
    }
