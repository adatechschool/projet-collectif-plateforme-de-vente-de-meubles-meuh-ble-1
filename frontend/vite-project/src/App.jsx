import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./Home.jsx";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return <RouterProvider router={router} />;
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique de validation du login.
    // Par exemple, envoyer une requête au serveur avec Axios.
    // axios.post("/api/login", { username, password })
    //   .then((response) => {
    //     // Gérer la réponse du serveur
    //   })
    //   .catch((error) => {
    //     // Gérer les erreurs
    //   });
  };

  return (
    <div>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default App;
