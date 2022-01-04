import { MongoClient } from 'mongodb';

async function connectDatabase() {
    const client = await MongoClient.connect('mongodb+srv://testUser:testUser123456@cluster0.agazq.mongodb.net/events?retryWrites=true&w=majority')
    return client;
}

async function insertDocument(client, document) {
    const db = client.db();
    await db.collection('newsletter').insertOne(document);
}

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        let client;
        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({message: 'Connectiong to db failed!'});
            return;
        }

        try {
            await insertDocument(client, {email: userEmail});
            client.close();
        } catch (error) {
            res.status(500).json({message: 'Inserting data to db failed!'});
            return;
        }

        res.status(201).json({ message: 'Signed up!' });
    }
}

export default handler;