
const sendClarifaiRequest = async (imageURL) => {
    const PAT = '7cbab129482f461a9eac2b56f8a6c73c';
    const USER_ID = 'wnammmq0x3moa';
    const APP_ID = 'APIFun';

    const raw = JSON.stringify({
        user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
        },
        inputs: [
        {
            data: {
            image: {
                url: imageURL,
            },
            },
        },
        ],
    });

    const requestOptions = {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        Authorization: 'Key ' + PAT,
        'Content-Type': 'application/json',
        },
        body: raw,
    };

    const response = await fetch('https://api.clarifai.com/v2/models/face-detection/outputs', requestOptions);
    return response.json();
};

module.exports = { sendClarifaiRequest };