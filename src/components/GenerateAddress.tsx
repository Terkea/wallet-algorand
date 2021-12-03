import React from "react";
import QRCode from "qrcode";
import {getDepositAddress} from "../api/tatum";


const GenerateAddress = () => {
    const [secret, setSecret] = React.useState<string>('')
    const [error, setError] = React.useState<string>('')
    const [depositAddress, setDepositAddress] = React.useState<string>('')
    const [qr, setQr] = React.useState<string>('')

    const generateQR = (data: string): Promise<string> => {
        return QRCode.toDataURL(data)
    }

    const onClick = async (): Promise<void> => {
        if (secret.length === 0 || secret === "") {
            setError('Invalid secret')
        } else {
            setSecret("")
            const address = await getDepositAddress(secret).catch(e => setError('Invalid secret'))
            setDepositAddress(address.data)
            setQr(await generateQR(address.data))
        }
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-white'>Generate Algorand account deposit address from private key.</p>
            <p className='text-red-500 text-sm mt-2'>{error}</p>
            <input
                className='bg-gray-300 mt-2 mb-2 border border-gray-600 outline-none p-2 md:w-1/2'
                type="text"
                onChange={(e) => setSecret(e.target.value)}
                placeholder='secret'/>
            {depositAddress &&
			<>
				<p className='text-white'>Donation Address:</p>
                {window.innerWidth > 700 && <p className='text-white'>{depositAddress}</p>}
				<img className='w-full md:h-1/2 md:w-1/2' src={qr} alt="donationAddress"/>
			</>
            }

            <button
                onClick={onClick}
                className='mt-2 w-1/2 bg-transparent border border-algorand hover:bg-algorandHover
                    rounded-full text-xl text-center p-3 text-algorand hover:text-white justify-center'>
                Generate Address
            </button>
        </div>
    )
}

export default GenerateAddress;