import styled from 'tailwind';

const StyledClientRecipes = styled.div`
  color: pink;
`;

export function ClientRecipes() {
  return (
    <StyledClientRecipes>
      <h1>Welcome to ClientRecipes!</h1>
    </StyledClientRecipes>
  );
}

export default ClientRecipes;
