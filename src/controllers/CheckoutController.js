import mercadopago from 'mercadopago';

export const createCheckoutPreference = async (req, res) => {
    const { items } = req.body;
    try {
        mercadopago.configure({
            access_token: process.env.MP_ACCESS_TOKEN
        });

        const preference = {
            items: items,
        };

        const response = await mercadopago.preferences.create(preference);

        res.json({
            ok: true,
            preferenceId: response.body.id
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error con el servidor");
    }
}
