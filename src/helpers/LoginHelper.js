import { urlLogin } from './GlobalUrl';

const LoginHelper = async (username, password) => {

    const formData = new URLSearchParams();

    formData.append('barcode', username);
    formData.append('password', password);
    console.log(formData, '======anjing=======sadasd===ini');
    try {

        let response = await fetch(urlLogin, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            redirect: 'follow',
            body: formData.toString(),
        });
        let data = await response.json();
        console.log(data, 'korewa data');
        return data;
    } catch (error) {
        console.log(error, 'ini error');
        if ('code' in error) {
            console.log('trueee', error);
            return error;
        } else {
            console.log('false');
            return {
                code: 500,
                message: error,
            };
        }
    }
};

export default LoginHelper;
