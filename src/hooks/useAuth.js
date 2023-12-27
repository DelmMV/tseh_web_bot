import {useContext} from "react";
import AppContext from "../contexts/AppContext.jsx";

export default function useAuth() {
	return useContext(AppContext)
}
