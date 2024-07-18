import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Container, Divider, Header } from "semantic-ui-react";
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

  const style = {
    backgroundColor: '#fff',
    margin: '3em 0em 0em',
    padding: '3em 0em',
  }

  return (
    <>
      <div className="background-image">
        <MediaContextProvider>
          <AppHeader />
          <AppTitle />
          <Container style={style}>
            <Container text>
              <Header as='h2'>Oops!</Header>
              <Divider />
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
