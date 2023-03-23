import product from '@/app/products/[name]/page';



export async function GET(request: Request) {
    let products
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    const collection = client.db("productsDb").collection("products");
    products = await collection.find({}).toArray();
    client.close();
    console.log(products);
    return new Response(JSON.stringify(products))
}

