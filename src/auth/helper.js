export const signup = (user) => {
	let users = [];
	if(typeof window !== undefined) {
		console.log("inside 1");
		users = JSON.parse(window.localStorage.getItem("user"));
		if(!users) users = [];
	}
	users = users.filter(data => data.email === user.email);
	if(users && users.length > 0) return {data : "" , error : "email id already exists"};
	users?.push(user);
	window.localStorage.setItem("user" , JSON.stringify(users));
	return {data : user , error : ""};
}
export const signin = (user) => {
	let users = [];
	if(typeof window !== undefined) {
		users = JSON.parse(window.localStorage.getItem("user"));
		if(!users) users = [];
	}
	
	users = users.filter(data => data.email === user.email);
	if(!users || users.length == 0) {
		return {data : "" , error : "Email id doesnt exist"}
	}
	users = users.filter(data => data.password == user.password);
	// console.log(users , user);
	if(!users || users.length == 0) {
		return {data : "" , error : "Wrong password"}
	}
	return users[0];
}
export const isSignedIn = () => {
	if(typeof window === undefined) {
		return false;
	}
	if(!window.localStorage.getItem("user")) return false
	const data = JSON.parse(window.localStorage.getItem("user"));
	if(data.length == 0) return false;
	return true;
}

export const signOut = (f) => {
	if(typeof window !== undefined) {
		window.localStorage.clear();
	}
	f();
}