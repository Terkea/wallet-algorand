import React, {FC, ReactNode} from "react";
import axios from 'axios'


type Props = { children: ReactNode }


const generateWallet = () => {
    axios({
        method: 'get',
        'url': 'https://api-eu1.tatum.io/v3/bitcoin/wallet',
        headers: {'x-api-key': process.env.REACT_APP_TATUM_KEY}
    })
}

const Container: FC<Props> = ({children}) => {
    const [PK, setPK] = React.useState('')
    const [PN, setPN] = React.useState('')

    return (
        <div className='flex flex-col bg-red-500 w-80 md:w-1/3 mt-20 md:mt-48'>
            {/*{children}*/}
            <div className="flex flex-row space-x-5 md:space-x-20 p-5 flex-grow justify-center border-b-2 border-white">
                <button className='text-xl text-white cursor-pointer'>Create new</button>
                <button className='text-xl text-white cursor-pointer'>Restore wallet</button>
            </div>
            <div className='flex flex-col bg-red-200 h-1/2 p-10'>
                <p>PK: {PK}</p>
                <p>PN: {PN}</p>
            </div>
        </div>
    )
}

export default Container