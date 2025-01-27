import {
  PortfolioCardBox,
  PortfolioContainer,
  PortfolioParagraph,
  PortfolioTextBox,
  PortfolioTitleOne,
  PortfolioTitleTwo,
} from "./styles";
import { employees, IEmployee } from "../../../data.ts";
import { PortfolioCard } from "../../components/portfolioCard/index.tsx";
import { useState } from "react";
import { CardVisualization } from "../../components/cardVisualization/index.tsx";
import { useParams } from "react-router";
export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployee | null>(
    null
  );
  const {areaId} = useParams()
  const handleClick = (employee: IEmployee) => {
    setShowModal(true);
    setSelectedEmployee(employee);
    console.log("oie");
  };
  return (
    <PortfolioContainer>
      <PortfolioTextBox>
        <PortfolioTitleOne>CONHEÇA OS PROFISSIONAIS MAIS</PortfolioTitleOne>
        <PortfolioTitleTwo>CRIATIVOS</PortfolioTitleTwo>
        <PortfolioParagraph>
          Portfólios audiovisuais para contratantes e criadores explorarem o
          universo do <b> CrI.Ativos da Favela. </b>
        </PortfolioParagraph>
      </PortfolioTextBox>
      <PortfolioCardBox>
        {employees.filter(x => x.areaAtuacao.includes(Number(areaId))).map((e, i) => (
          <PortfolioCard
            employee={e}
            key={e.nome + i}
            img={e.foto}
            setModal={() => handleClick(e)}
          />
        ))}
      </PortfolioCardBox>
      {showModal && selectedEmployee && (
        <CardVisualization closeFn={() => setShowModal(false)} employee={selectedEmployee} />
      )}
    </PortfolioContainer>
  );
};
