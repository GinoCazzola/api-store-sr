import { Images } from "../models/Images.js";



export const getImage = async (req, res) => {
    const { idImage } = req.params;

    try {

//trabajamos con las imgs
        const image = await Images.findById(idImage)
        console.log (image)
        const imgBuffer = Buffer.from(image.img.data)

        res.writeHead(200, {
            "Content-Type": image.img.contentType,
            "Content-Length": imgBuffer.length



        })
        res.end( imgBuffer)
    } catch (error) {
        res.status(500).send("No se accedió a la imagen.")
    }



}