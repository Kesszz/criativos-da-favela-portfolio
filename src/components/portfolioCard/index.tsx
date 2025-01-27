
import { IEmployee } from "../../../data"
import { CardButton } from "./styles"

interface CardButtonProps {
    img: string
    setModal: () => void
    employee: IEmployee
}

export const PortfolioCard = ({img, setModal, employee}: CardButtonProps) => {
    const handleClick = () => {
        setModal()
        console.log(employee)
    }

    return <CardButton  onClick={handleClick} >
        <img src={img} />
    </CardButton>
}