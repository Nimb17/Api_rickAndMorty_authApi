import MyRoutes from './routers/MyRoutes'
import { ContextProvider } from './context/Context'
import Header from "./components/Header"
import { Toaster } from 'sonner'

function App() {

  return (
    <ContextProvider>
      <Toaster position="top-center" expand={true} richColors />
      <Header />
      <MyRoutes />
    </ContextProvider>
  )
}

export default App
