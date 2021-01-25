let apiDomain = ''
if (process.env.NODE_ENV === 'production') {
    apiDomain = 'https://somethinsomethin.com';
} else {
    apiDomain = 'http://localhost:8001';
}

class UrlService {
    static loginUrl() { 
        return apiDomain + '/api/login'; 
    }
}

export default UrlService;