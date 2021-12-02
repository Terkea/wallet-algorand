import axios from "axios";


export const generateWallet = () => {
    return axios.request({
        method: 'get',
        url: 'https://api-eu1.tatum.io/v3/algorand/wallet?mnemonic=SOME_STRING_VALUE',
        "headers": {
            "x-api-key": process.env.REACT_APP_TATUM_KEY || '',
        }
    })
}