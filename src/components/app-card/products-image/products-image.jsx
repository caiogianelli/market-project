// style
import * as S from "./styles"

export function ProductsImage({ image }) {
  return (
    <S.StyledCard withBorder p={0}>
      <S.StyledImageSection>
        <S.StyledImage src={image[0]} alt={image[0]} />
      </S.StyledImageSection>
    </S.StyledCard>
  );
}
