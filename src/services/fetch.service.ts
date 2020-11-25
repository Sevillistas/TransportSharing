export const request = async(url: string, method = 'GET', body?: any, headers?: any) => {
    try {
        if (body) {
            headers = {};
            body = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, {method, body, headers});
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }
}
