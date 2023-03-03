const postData = async (url, data) => { //async говороит функции, что внутри будет асинхронный код
    const res = await fetch(url, { // await - переменная res будет ожидать выполнения промиса
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResources = async (url) => { //async говороит функции, что внутри будет асинхронный код
    const res = await fetch(url); // await - переменная res будет ожидать выполнения промиса

    // обработка ошибок от fetch
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); //конструируем новую ошибку
    }

    return await res.json();
};

export {postData};
export {getResources};