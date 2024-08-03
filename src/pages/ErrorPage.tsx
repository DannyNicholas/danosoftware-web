import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Container, Header } from "semantic-ui-react";
import AppFooter from "../components/AppFooter.tsx";
import AppHeader from '../components/AppHeader.tsx';
import AppTitle from "../components/AppTitle.tsx";
import { MediaContextProvider } from "../components/Media.tsx";


const ErrorPage = () => {

  const error: unknown = useRouteError() as Error;
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <>
      <div className="app-background">
        <MediaContextProvider>
          <AppHeader />
          <AppTitle />
          <Container>
            <Container>
              <Header as='h3'>Oops!</Header>
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>{errorMessage}</i>
              </p>
            </Container>
          </Container>
          <AppFooter />
        </MediaContextProvider>
      </div>
    </>
  )
}

export default ErrorPage
