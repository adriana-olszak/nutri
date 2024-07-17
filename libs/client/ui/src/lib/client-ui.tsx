import styled from 'tailwind';

const StyledClientUi = styled.div`
  color: pink;
`;

export function ClientUi() {
  return (
    <StyledClientUi>
      <h1>Welcome to ClientUi!</h1>
    </StyledClientUi>
  );
}

export default ClientUi;
