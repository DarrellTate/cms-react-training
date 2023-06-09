import { NextResponse } from 'next/server';
import md5 from "md5"; // requires a hash

const apiURL = 'http://gateway.marvel.com/v1/public/comics';
const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE;
const now = Date.now();

let params = {
    apikey: publicKey,
    ts: now,
    hash: md5(now + privateKey + publicKey)
}

const fetchURL =
    `${apiURL}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`

export async function GET() {
    
    const res = await fetch(fetchURL, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': params.apikey,
            'ts' : params.ts,
            'hash': params.hash
        }
    });
    const data = await res.json();

    return NextResponse.json({ data });
}