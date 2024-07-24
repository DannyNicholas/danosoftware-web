import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppPage from './AppPage'
import AppTitle from './AppTitle'
import { MediaContextProvider } from './Media'

const App = () => (
  <>
    <div className="background-image">
      <MediaContextProvider>
        <AppHeader />
        <AppTitle />
        <AppPage />
        <AppFooter />
      </MediaContextProvider>
    </div>
  </>
)

export default App
