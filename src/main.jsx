import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/**
 * Point d'entrée de l'application.
 * 
 * Le composant `App` est monté dans l'élément HTML avec l'ID `root`.
 * L'application est rendue dans le mode strict pour détecter les erreurs et 
 * avertissements en développement.
 * 
 * @returns {void}  void :la fonction exécute une action ou une série d'actions, mais ne retourne pas de résultat ou de valeur
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
