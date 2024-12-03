// controller.js
const service = require('./service');

exports.generateQR = async (req, res) => {
    try {
        const { link } = req.body.data;  // Extract the link from the request body

        const qrCodeBuffer = await service.generateQRCode(link);  // Generate QR code for the link (URL)

        res.setHeader('Content-Disposition', 'attachment; filename=qrcode.png');
        res.type('image/png').send(qrCodeBuffer);
    } catch (err) {
        console.error('Error generating QR code:', err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};
