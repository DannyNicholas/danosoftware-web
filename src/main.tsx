import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './components/App.tsx'
import { ABOUT_ROUTE, CONTACT_ROUTE, EXAMPLES_ROUTE, EXAMPLES_SUMMARY, GALLERY_ROUTE, HOME_ROUTE, PRICES_ROUTE } from './constants/Constants.ts'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Example from './pages/Example.tsx'
import ExampleSummary from './pages/ExampleSummary.tsx'
import Gallery from './pages/Gallery.tsx'
import Home from './pages/Home.tsx'
import Prices from './pages/Prices.tsx'

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
        path: GALLERY_ROUTE,
        element: <Gallery />,
      },
      {
        path: PRICES_ROUTE,
        element: <Prices />,
      },
      {
        path: CONTACT_ROUTE,
        element: <Contact />,
      },
      {
        path: ABOUT_ROUTE,
        element: <About />,
      },
      {
        path: EXAMPLES_ROUTE,
        element: <Example />,
      },
      {
        path: EXAMPLES_SUMMARY,
        element: <ExampleSummary />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
