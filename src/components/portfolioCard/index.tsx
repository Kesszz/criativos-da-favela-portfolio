
import { IEmployee } from "../../../data"
import { CardButton, CardButtonInfos } from "./styles"

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
        <CardButtonInfos>
            <p>{employee.nome}</p>
        </CardButtonInfos>
    </CardButton>
}