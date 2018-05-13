export default function setUser(authData) {
	let user = {
	    email: authData.email,
	    id: authData.id,
	    status: authData.status,
	    avatar: authData.avatar ? authData.avatar : ''
	}
	return user
}