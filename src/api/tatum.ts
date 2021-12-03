import axios from "axios";


export const generateWallet = (): Promise<any> => {
    return axios.request({
        method: 'get',
        url: 'https://api-eu1.tatum.io/v3/algorand/wallet',
        "headers": {
            "x-api-key": process.env.REACT_APP_TATUM_KEY || '',
        }
    })
}

export const getDepositAddress = (secret: String): Promise<any> => {
    return axios.request({
        method: "get",
        url: `https://api-eu1.tatum.io/v3/algorand/address/${secret}`,
        "headers": {
            "x-api-key": process.env.REACT_APP_TATUM_KEY || '',
        }
    })
}