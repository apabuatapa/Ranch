import { urlRegister } from './GlobalUrl';

const register = async (name, phone, email, id_type, id_number, referral_code, password) => {
    const formdata = new URLSearchParams();

    formdata.append('name', name)
    formdata.append('phone', phone)
    formdata.append('email', email)
    formdata.append('id_type', id_type)
    formdata.append('id_number', id_number)
    formdata.append('referral_code', referral_code)
    formdata.append('password', password)
    console.log(formdata, '========data')

    try {

        let response = await fetch(urlRegister, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            redirect: 'follow',
            body: formdata.toString()
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

export default register;
