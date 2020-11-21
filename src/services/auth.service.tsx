export const signIn = async(login: string, password: string) => {
    const response = await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password})
    })
    const data = await response.json();
    console.log(data);
}

export const request = async(url: string, method = 'GET', body?: any, headers?: any) => {
    try {
        if (body) {
            body = JSON.stringify(body);
            headers = {...headers};
            headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, { method, body, headers})
        const data = await response.json()

        if (!response.ok) {
            throw new Error;
        }
        console.log('response is: ', data);
        return data

    } catch (error) {
        throw error
    }
}