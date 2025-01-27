import { IEmployee } from "../../../data"
import { CloseBtn, InfoCardBody, InfoCardContainer, InfoCardHeader, InfoCardLink, InfoCardTags, InfoModalContainer } from "./styles"

interface ICardVisualizationProps {
    employee: IEmployee,
    closeFn: () => void
}

export const CardVisualization = ({employee, closeFn}: ICardVisualizationProps) => {
    return <InfoModalContainer>
        <InfoCardContainer>
            <CloseBtn onClick={closeFn}>
                <img src='/assets/close.png' />
            </CloseBtn>
            <InfoCardHeader>
                <img src={employee.foto} />
                <p>{employee.nome}</p>
            </InfoCardHeader>
            <InfoCardBody>
                <h2>
                        HABILIDADES
                </h2>
                <div>{employee.habilidades.map(i => <InfoCardTags>{i}</InfoCardTags>)}</div>
                <br />
            <h2>LINK PORTFÓLIO</h2>
            <InfoCardLink href={employee.link} target="_blank" >{employee.link}</InfoCardLink>
            </InfoCardBody>
        </InfoCardContainer>
    </InfoModalContainer>
}