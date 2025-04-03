import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage,
    // limits: {
    //     fileSize: 10 * 1024 * 1024 // 10 MB size limit
    // },
    // fileFilter: function (req, file, cb) {
    //     // Accept images only
    //     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    //         return cb(new Error('Only image files are allowed!'), false);
    //     }
    //     cb(null, true);
    // }
})
