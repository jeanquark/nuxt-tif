export default function setUser(authData) {
	let user = {
	    email: authData.user ? authData.user.email : '',
	    id: authData.user ? authData.user.uid : '',
	    status: authData.status ? authData.status : 'user',
	    avatar: authData.avatar ? authData.avatar : ''
	}
	return user
}