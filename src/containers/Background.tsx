import {ReactNode, FC} from 'react'
import bg from '../assets/svg/bg.svg'

type Props = { children: ReactNode }


const Background: FC<Props> = ({children}) => {
    return (
        <div
            className="min-w-screen min-h-screen bg-no-repeat bg-center bg-cover flex flex-col items-center"
            style={{backgroundImage: `url(${bg})`}}>
            {children}
        </div>
    )
}

export default Background;
