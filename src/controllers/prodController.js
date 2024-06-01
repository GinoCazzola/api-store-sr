import { Products } from "../models/Products.js"

export const createProduct = async (req, res) => {
    const {body, file} = req
    try {

        if (!file) {
            return res.status(400)
            .json({
                ok: false,
                msg: "La foto es obligatoria."
            
            })

     }
     console.log(body)
     console.log(file.filename)
        const product = await Products.create({
            ...body,
            imgUrl:`${process.env.BASE_URL}/public/${file.filename}`
        
        });
        

        if (!product) {
            return res.status(400)
            .json({
                ok: false,
                msg: "No se pudo crear el producto"
            })
        
        }

        res.json({
            ok:true,
            product,
            msg: "Se ha creado el producto existosamente."
        })

    } catch (error) {
        console.log("Ha habido un error al crear el producto.")
        res.status(500).json ({
            ok: false,
            msg: "Ha habido un error con el sv"
        })


    }   


}