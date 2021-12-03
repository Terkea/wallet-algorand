import React from "react";
import {generateWallet} from "../api/tatum";


interface Wallet {
    address: string,
    secret: string
}


const CreateWallet = () => {
    const [wallet, setWallet] = React.useState<Wallet>()
    const [refresh, setRefresh] = React.useState<boolean>(false)

    React.useEffect(() => {
        const fetchNewWallet = async (): Promise<void> => {
            const {data} = await generateWallet()
            setWallet(data)
        }
        fetchNewWallet()
    }, [refresh])


    return (
        <div className='text-white flex flex-col justify-center items-center'>
            <p>Algorand is a decentralized blockchain technology network. Algorand is enabling the simple creation
                of next generation financial products, protocols and exchange of value across defi, financial
                institutions and governments.
            </p>
            <a
                className='mt-5 w-1/2 bg-transparent border border-algorand hover:bg-algorandHover
                    rounded-full text-xl text-center p-3 text-algorand hover:text-white justify-center'
                onClick={() => setRefresh(!refresh)}
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(wallet)
                )}`}
                download="algorandWallet.json"
            >
                Download Wallet
            </a>
        </div>
    )
}

export default CreateWallet;