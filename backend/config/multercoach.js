const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'coaches',
    format: async (req, file) => 'pdf', // supports promises as well
    public_id: (req, file) => Date.now() + '-' + file.originalname,
  },
});

const parser = multer({ storage: storage });

module.exports = parser;