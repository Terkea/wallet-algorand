import React, {FC, ReactNode} from "react";
import {generateWallet} from "../api/tatum";


type Props = { children: ReactNode }


const Container: FC<Props> = () => {
    const CreateWallet = () => {
        const [wallet, setWallet] = React.useState()
        const [refresh, setRefresh] = React.useState(false)

        React.useEffect(() => {
            const fetchNewWallet = async () => {
                const {data} = await generateWallet()
                setWallet(data)
            }
            fetchNewWallet()
        }, [refresh])


        return (
            <>
                <a
                    className='bg-transparent border-1 border-algorandBorder hover:bg-algorandHover
                    rounded-full text-xl text-center p-3 text-algorand hover:text-white'
                    onClick={() => setRefresh(!refresh)}
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                        JSON.stringify(wallet)
                    )}`}
                    download="algorandWallet.json"
                >
                    Download Wallet
                </a>
            </>
        )
    }

    const GenerateAddress = () => {
        return (
            <p>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet cupiditate doloremque ea
                exercitationem explicabo, id laboriosam mollitia necessitatibus perspiciatis quas qui reprehenderit
                vitae. Dignissimos ea impedit quasi tempora tenetur.
            </p>
        )
    }

    const [container, setContainer] = React.useState(<CreateWallet/>);

    return (
        <div className='flex flex-col bg-black bg-opacity-30 w-1/2 mt-20 md:mt-48'
             style={{boxShadow: '3px 3px 50px 3px rgba(255, 255, 255, 0.5)'}}>
            {/*{children}*/}
            <div className="flex flex-row space-x-5 md:space-x-20 p-5 flex-grow justify-center border-b-2 border-white">
                <button className='text-xl text-white hover:text-algorand cursor-pointer'
                        onClick={() => setContainer(<CreateWallet/>)}>
                    Create new
                </button>
                <button className='text-xl text-white hover:text-algorand cursor-pointer'
                        onClick={() => setContainer(<GenerateAddress/>)}>Restore wallet
                </button>
            </div>
            <div className='flex flex-col bg-black bg-opacity-10 h-1/2 p-10'>
                {container}
            </div>
        </div>
    )
}

export default Container