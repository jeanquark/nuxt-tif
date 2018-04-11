export default function setUser(authData) {
	let user = {
	    email: authData.email,
	    id: authData.id,
	    status: authData.status
	}
	return user
}