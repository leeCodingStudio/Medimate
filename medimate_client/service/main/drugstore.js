import { config } from '../../config.js';
import Pagination from '../../middleware/pagination.js';
import * as TokenStorage from '../../token.js'

export async function showAll(req, res) {
    const page = req.query.page || 1;
    const P_ADDRESS = req.query.P_ADDRESS;
    const P_NAME = req.query.P_NAME;
    const url = P_NAME 
    ? `${config.base}/main/pharm?page=${page}&P_ADDRESS=${P_ADDRESS}&P_NAME=${P_NAME}`
    : `${config.base}/main/pharm?page=${page}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(pharmList => {
            const tokenCheck = TokenStorage.getToken() ? true : false;
            let pagination = Pagination(page, pharmList.count, 8);
            pagination.list = pharmList.rows;
            pagination.P_NAME = P_NAME;
            pagination.P_ADDRESS = P_ADDRESS;
            pagination.tokenCheck = tokenCheck;

            res.render('../public/ejs/main/drugstore', pagination)
        });
}