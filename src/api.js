export const listingsUrl = () => "https://api.opensea.io/api/v1/events?event_type=successful&only_opensea=true&offset=0&limit=12&format=json";

const baseUrl = 'https://api.etherscan.io/';
const escanApiKey = '';
export const supplyUrl = () => `${baseUrl}/api?module=stats&action=ethsupply&apikey=${escanApiKey}`;
export const priceUrl = () => `${baseUrl}/api?module=stats&action=ethprice&apikey=${escanApiKey}`;
export const gasUrl = () => `${baseUrl}/api?module=gastracker&action=gasoracle&apikey=${escanApiKey}`;
export const searchUrl = (addr) => 
    `${baseUrl}/api?module=account&action=balance&address=${addr}&tag=latest&apikey=${escanApiKey}`;