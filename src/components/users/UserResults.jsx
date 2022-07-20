import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GitHubContext";
const UserResults = () => {
	const { users, loading } = useContext(GithubContext);

	if (!loading) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-4 lg:grid-cols-3 md:grid-cols-2">
				{users.map((user) => {
					return <UserItem key={user.id} user={user} />;
				})}
			</div>
		);
	} else {
		return <FaSpinner className="text-8xl" />;
	}
};

export default UserResults;
