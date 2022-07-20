import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
	};
	const [state, dispatch] = useReducer(githubReducer, initialState);
	const clearUsers = () => {
		dispatch({ type: "ClearUsers" });
	};
	const searchUsers = async (text) => {
		setLoading();
		const params = new URLSearchParams({
			q: text,
		});
		const response = await fetch(
			`https://api.github.com/search/users?${params}`
		);
		const { items } = await response.json();

		dispatch({
			type: "GetUsers",
			payload: items,
		});
	};

	const getUser = async (login) => {
		setLoading();

		const response = await fetch(`https://api.github.com/users/${login}`);

		const data = await response.json();
		console.log(data);

		dispatch({
			type: "GetUser",
			load: data,
		});
	};

	const setLoading = () => {
		dispatch({ type: "Set_Loading" });
	};
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				searchUsers,
				clearUsers,
				getUser,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};
export default GithubContext;
