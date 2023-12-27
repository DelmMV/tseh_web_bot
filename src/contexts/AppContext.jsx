import {createContext, useState} from "react";

const AppContext = createContext(null);

export const AppProvider = ({children}) => {
	const [value, setValue] = useState( 1)
	const [tokenContext, setTokenContext] = useState(localStorage.getItem('AccessToken') || null)
	
	
	const signIn = (token, cb) => {
		localStorage.setItem("AccessToken", token)
		setTokenContext(token)
		if(localStorage.getItem("AccessToken")) {
			cb();
		}
	}
	const signOut = (cb) => {
		localStorage.removeItem("AccessToken")
		setTokenContext(null)
		cb();
	}
	
	return (
			<AppContext.Provider
					value={{value,setValue, tokenContext, signIn, signOut}}
			>
				{children}
			</AppContext.Provider>
	)
}

export default AppContext
