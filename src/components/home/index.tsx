import {
  HomeBackground,
  HomeContainer,
  HomeContent,
  HomeFrame,
  HomeProjectKnowBox,
  HomeProjectKnowBoxText,
  HomeProjectParagraph,
  HomeProjetContainer,
  HomeProjetcTitle,
  HomeTitle,
  HomeTitleContainer,
} from "./styles";

export const HomeComponent = () => {
  return (
    <HomeContainer>
      <HomeBackground />
      <HomeContent>
        <HomeTitleContainer>
          <span>
            <HomeTitle>
              TRANSFORMANDO REALIDADES | CRIATIVOS DA FAVELA <b>MINIDOC</b>
            </HomeTitle>{" "}

          </span>
        </HomeTitleContainer>
        <HomeFrame
          
          src="https://www.youtube.com/embed/GiUnbGdrwYYll"
          title="Eu Vou pro Baile da Gaiola (1964)"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         
       
        ></HomeFrame>
        <HomeProjetContainer>
            <HomeProjetcTitle>O PROJETO</HomeProjetcTitle>
            <HomeProjectParagraph>Unindo tecnologia e criatividade, o <b>Criativos da Favela</b> é mais que um projeto social: é uma revolução cultural. Atuando em São Paulo, Rio de Janeiro e além, <b> capacitamos jovens da periferia no audiovisual com Inteligência Artificial </b>, proporcionando acesso a equipamentos de ponta e experiências únicas.</HomeProjectParagraph>
            <HomeProjectParagraph>Cada projeto aqui <b> conta uma história, cada jovem representa um futuro cheio de possibilidades. </b> Este é o espaço onde talento e oportunidade se encontram para transformar vidas.
            </HomeProjectParagraph>
            <br />
            <HomeProjectParagraph>⮕ Explore nosso impacto e veja como estamos moldando o futuro.</HomeProjectParagraph>
        </HomeProjetContainer>
        <HomeProjectKnowBox>
            <HomeProjectKnowBoxText>CONHEÇA OS CRIATIVOS</HomeProjectKnowBoxText>
        </HomeProjectKnowBox>
      </HomeContent>
    </HomeContainer>
  );
};
