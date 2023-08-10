const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');

exports.uploader = async function upload(buffer) {
    try {
        const { ext } = await fromBuffer(buffer);
    
        if (!ext) {
        throw new Error('Unable to determine file type.');
        }
    
        const filename = `${Date.now()}.${ext}`;
    
        const formData = new FormData();
        formData.append('file', buffer, { filename });
    
        const response = await axios.post('https://cdn.paimon.games/upload', formData, {
        headers: formData.getHeaders(),
        });
    
        const fileUrl = response.data;
        return fileUrl;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
    }