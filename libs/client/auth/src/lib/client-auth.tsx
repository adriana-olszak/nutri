import styled from 'tailwind';

const StyledClientAuth = styled.div`
  color: pink;
`;

export function ClientAuth() {
  return (
    <StyledClientAuth>
      <h1>Welcome to ClientAuth!</h1>
    </StyledClientAuth>
  );
}

export default ClientAuth;
