export async function fetchYahoo(url: string): Promise<any>{
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0"
        }
    });

    //checking if the url is returning
    if (!res.ok) {
        throw new Error("Failed to fetchYahoo: " + res.statusText);
    }
    return res.json();
}