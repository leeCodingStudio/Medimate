import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'

export async function logout(req, res){
    goodbyeHeaders()
    res.redirect('/');
    
}

function goodbyeHeaders() {
    const token = TokenStorage.clearToken();
}