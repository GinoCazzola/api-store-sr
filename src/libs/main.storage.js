import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        cb(null, "./temp/imgs") 
    },
    filename: (req, file, cb) => {
        cb(null,`${file.fieldname}-${Date.now()}.png`)
        
    },    


})


const uploead = multer({ storage })

export default uploead;