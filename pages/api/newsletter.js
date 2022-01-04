import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        // if (!userEmail || !userEmail.includes('@')) {
        //     res.status(422).json({message: 'Invalied email.'});
        //     return;
        // }

        const client = await MongoClient.connect('mongodb+srv://testUser:testUser123456@cluster0.agazq.mongodb.net/newsletter?retryWrites=true&w=majority')
        
        const db = client.db();
        await db.collection('emails').insertOne({email: userEmail});
        client.close();

        res.status(201).json({message: 'Signed up!'});
    }
}

export default handler;