
import { AreasCard, AreasCardCotainer, AreasContainer, AreasContent, AreasHeader, AreasImg } from "./styles";

const cards = [
    {
        name: 'FILMAGEM E FOTOGRAFIA',
        img: '/assets/video.png',
        id: 1
    },
    {
        name: 'PRODUÇÃO E DIREÇÃO',
        img: '/assets/cadeira-diretor.png',
        id: 2
    },
    {
        name: 'SOM E ÁUDIO',
        img: '/assets/sound-waves.png',
        id: 3
    },
    {
        name: 'ARTE E DESIGN',
        img: '/assets/design-grafico.png',
        id:4
    },
    {
        name: 'COMUNICAÇÃO E MARKETING',
        img: '/assets/comunicacao.png',
        id: 5
    },
    {
        name: 'EDIÇÃO E PÓS-PRODUÇÃO',
        img: '/assets/ferramenta-de-corte.png',
        id: 6
    },
]

export const Areas = () => {
  return (
    <AreasContainer>
      <AreasHeader>
      <AreasImg src='/assets/logo.png' />
      </AreasHeader>
      <AreasContent >
        {cards.map(c => <AreasCardCotainer href={`/portfolio/${c.id}`}>
            <AreasCard> <img src={c.img} /></AreasCard>
            <p>{c.name}</p>
        </AreasCardCotainer>)}
      </AreasContent>
    </AreasContainer>
  );
};
