import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/img/");
    },
    filename: function (req, file, cb){
        if (!file) {
            cb(); // 파일이 없는 경우 아무 작업도 수행하지 않고 콜백 호출
            return;
        }
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + "-" + Date.now() + ext);
    }
});

export const upload = multer({ storage: storage });