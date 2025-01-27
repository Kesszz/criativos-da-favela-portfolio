
import { AreasCard, AreasCardCotainer, AreasContainer, AreasContent, AreasHeader, AreasImg } from "./styles";

const cards = [
    {
        name: 'FILMAGEM E FOTOGRAFIA',
        img: '/assets/video.png'
    },
    {
        name: 'PRODUÇÃO E DIREÇÃO',
        img: '/assets/cadeira-diretor.png'
    },
    {
        name: 'SOM E ÁUDIO',
        img: '/assets/sound-waves.png'
    },
    {
        name: 'ARTE E DESIGN',
        img: '/assets/design-grafico.png'
    },
    {
        name: 'COMUNICAÇÃO E MARKETING',
        img: '/assets/comunicacao.png'
    },
    {
        name: 'EDIÇÃO E PÓS-PRODUÇÃO',
        img: '/assets/ferramenta-de-corte.png'
    },
]

export const Areas = () => {
  return (
    <AreasContainer>
      <AreasHeader>
      <AreasImg src='/assets/logo.png' />
      </AreasHeader>
      <AreasContent >
        {cards.map(c => <AreasCardCotainer>
            <AreasCard> <img src={c.img} /></AreasCard>
            <p>{c.name}</p>
        </AreasCardCotainer>)}
      </AreasContent>
    </AreasContainer>
  );
};
