import '../styles/globals.css'
import {createContext} from "react";

const StoreContext = createContext()

const StoreProvider = ({children}) => {
  const initialState = {
    latLong: "",
    coffeeStores:[]
  }
  return (
      <StoreContext.Provider value={{state: initialState}}>
        {children}
    </StoreContext.Provider>
  )
}

function MyApp({ Component, pageProps }) {
  return <div>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>

    <footer>
      <p>2022 sakib</p>
    </footer>
  </div>
}

export default MyApp
