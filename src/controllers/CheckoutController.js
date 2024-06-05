import { MercadoPagoConfig, Preference } from 'mercadopago';

export const createCheckoutPreference = async (req, res) => {
    const {body} = req;
    try {
        const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
        const preference = new Preference(client);

        
        const response = await preference.create({body})
        res.json({

            ok: true,
            preferenceId: response.id
            
        })
       
        res.json(response)
      
    } catch (error) {
        console.log(error)
        res.status(500).send("Error con el servidor")
    }
}