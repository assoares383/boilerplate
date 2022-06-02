import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/images/logo.svg" alt="Boilerplate NextJS" />
    <S.Title>React Avancado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/images/hero-illustration.svg"
      alt="Hero Illustration"
    />
  </S.Wrapper>
)

export default Main
