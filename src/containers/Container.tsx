import React, {FC, ReactNode} from "react";
import {generateWallet, getDepositAddress} from "../api/tatum";
import QRCode from 'qrcode'

type Props = { children: ReactNode }


const Container: FC<Props> = () => {
    const CreateWallet = () => {
        interface Wallet {
            address: string,
            secret: string
        }

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

    const [container, setContainer] = React.useState<React.ReactNode>(<CreateWallet/>);

    return (
        <div
            className='flex flex-col bg-black bg-opacity-30 w-auto ml-5 mr-5 md:w-1/2 mt-20 md:mt-48 border border-gray-400 border-opacity-50'
            style={{boxShadow: '2px 2px 50px 2px rgba(255, 255, 255, 0.5)'}}>
            {/*{children}*/}
            <div className="flex flex-row space-x-5 md:space-x-20 p-5 flex-grow justify-center border-b-2 border-white">
                <button className='text-xl text-white hover:text-algorand cursor-pointer'
                        onClick={() => setContainer(<CreateWallet/>)}>
                    Create New Wallet
                </button>
                <button className='text-xl text-white hover:text-algorand cursor-pointer'
                        onClick={() => setContainer(<GenerateAddress/>)}>Generate Deposit Address
                </button>
            </div>
            <div className='flex flex-col bg-black bg-opacity-10 h-1/2 p-10'>
                {container}
            </div>
        </div>
    )
}

export default Container