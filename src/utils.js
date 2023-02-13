export default async function getHexDigest(algo, string) {
    const dataBlob = new Blob([string], {type: 'text/plain; charset=utf-8'});
    const dataBuffer = await dataBlob.arrayBuffer()
    const digestBuffer = await crypto.subtle.digest(algo, dataBuffer)
    // convert buffer to byte array
    const hashArray = Array.from(new Uint8Array(digestBuffer));
    // convert bytes to hex string
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}