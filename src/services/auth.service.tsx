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
