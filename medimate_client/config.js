import dotenv from 'dotenv';

dotenv.config();
function required(key, defaultvalue = undefined) {
    const value = process.env[key] || defaultvalue;
    if(value == null) {
        throw new Error(`key ${key} is undefined`);
    }
    return value;
}

export const config = {
    base:required('BASE_URL'),
    client:required('CLIENT_URL'),
    port:parseInt(required('PORT', 3000)),
    senderSmtp:required('SENDERSMTP'),
    senderPort:parseInt(required('SENDERPORT')),
    senderEmail:required('SENDEREMAIL'),
    senderPass:required('SENDERPASS')
}