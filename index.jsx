import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Layout from "./components/Layout"
import TranslationRequest, {action as translationAction} from "./pages/TranslationRequest"
import 
  TranslationResult, 
  {loader as translatedLoader, action as translatedAction} 
from "./pages/TranslationResult"



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route 
      index 
      element={<TranslationRequest />}
      action={translationAction}
    />
    <Route 
    path="result" 
    element={<TranslationResult />}
    loader={translatedLoader}
    action={translatedAction}
  />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);