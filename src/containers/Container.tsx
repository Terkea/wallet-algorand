import React, {FC, ReactNode} from "react";
import CreateWallet from "../components/CreateWallet";
import GenerateAddress from "../components/GenerateAddress";


type Props = { children: ReactNode }


const Container: FC<Props> = () => {
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