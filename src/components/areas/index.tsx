
import { cards } from "../../../data";
import { AreasCard, AreasCardCotainer, AreasContainer, AreasContent, AreasHeader, AreasImg } from "./styles";



export const Areas = () => {
  return (
    <AreasContainer>
      <AreasHeader>
      <AreasImg src='/assets/logo.png' />
      </AreasHeader>
      <AreasContent >
        {cards.map(c => <AreasCardCotainer key={c.id}  href={`/portfolio/${c.id}`}>
            <AreasCard> <img src={c.img} /></AreasCard>
            <p>{c.name}</p>
        </AreasCardCotainer>)}
      </AreasContent>
    </AreasContainer>
  );
};
