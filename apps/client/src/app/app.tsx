import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { ClientRecipes } from '@nutri/client-recipes';
import { ClientAuth } from '@nutri/client-auth';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/recipes" element={<ClientRecipes />}></Route>
      <Route path="/auth" element={<ClientAuth />}></Route>
    </Routes>
  );
}

export default App;
