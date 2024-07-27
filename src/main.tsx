import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App.tsx'
import { ABOUT_ROUTE, HOME_ROUTE, PRIVACY_ID_ROUTE, PROJECTS_ID_ROUTE, PROJECTS_ROUTE } from './constants/Constants.ts'
import About from './pages/About.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Home from './pages/Home.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import Example from './pages/Project.tsx'
import ExampleSummary from './pages/ProjectSummary.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME_ROUTE,
        element: <Home />,
      },
      {
        path: ABOUT_ROUTE,
        element: <About />,
      },
      {
        path: PROJECTS_ID_ROUTE,
        element: <Example />,
      },
      {
        path: PROJECTS_ROUTE,
        element: <ExampleSummary />,
      },
      {
        path: PRIVACY_ID_ROUTE,
        element: <PrivacyPolicy />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
