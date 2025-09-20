import './App.css'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppPage from './AppPage'
import AppTitle from './AppTitle'
import { MediaContextProvider } from './Media'

const App = () => (
  <div className="page-container background-image">
    <MediaContextProvider>
      <AppHeader />
      <AppTitle />
      <main className="content">
        <AppPage />
      </main>
      <footer className="footer">
        <AppFooter />
      </footer>
    </MediaContextProvider>
  </div>
)

export default App
