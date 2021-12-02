import React, {FC, ReactNode} from "react";
import {generateWallet} from "../api/tatum";


type Props = { children: ReactNode }

const CreateWallet = () => {
    return (
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid asperiores consequuntur culpa
            dicta doloremque error eum exercitationem, facere fugiat impedit nostrum obcaecati odio omnis,
            perferendis sint suscipit? Commodi, laborum.</p>
    )
}


const Container: FC<Props> = () => {
    const [container, setContainer] = React.useState(<CreateWallet/>);

    React.useEffect(() => {

        fetchNewWallet()

    }, [])


    const fetchNewWallet = async () => {
        const wallet = await generateWallet()
        console.log(wallet)
    }


    return (
        <div className='flex flex-col bg-red-500 w-80 md:w-1/3 mt-20 md:mt-48'>
            {/*{children}*/}
            <div className="flex flex-row space-x-5 md:space-x-20 p-5 flex-grow justify-center border-b-2 border-white">
                <button className='text-xl text-white cursor-pointer'>Create new</button>
                <button className='text-xl text-white cursor-pointer'>Restore wallet</button>
            </div>
            <div className='flex flex-col bg-red-200 h-1/2 p-10'>
                {container}
            </div>
        </div>
    )
}

export default Container