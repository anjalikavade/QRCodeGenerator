// service.js
const QRCode = require('qrcode');

// Generate QR Code for the given text (which will be the link here)
exports.generateQRCode = async (qrCodeText) => {
    const options = {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        margin: 1
    };

    const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
    return qrCodeBuffer;
};
