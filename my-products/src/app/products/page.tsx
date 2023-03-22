import navigation from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

{ fallback: false }
const contentful = require('contentful')

const ProductDetails = async () => {
    let products: any = [];
    let items: any = {};

    const client = contentful.createClient({
        space: '7uuqxrnmuccs',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'D1qmFqsFdSsDLhHejnSD0ysWzsJQpCngR9nGzoZCJY4'
    })
    items = (await client.getEntries().then((response: any) => response.items))

    return (<div>
        {items.map(((item: any, index: number) =>
            <li key={index} className="product-item">
                <div><Link href={`/products/${item.fields.name}`}> <Image src={'https:' + item.fields.image.fields.file.url} alt="" width={100} height={100} />{item.fields.name}{item.fields.price}</Link></div>
            </li>))}
    </div>)
};
export default ProductDetails;
