export default function ({ store, redirect, error }) {
	// if (store.getters.activeUser) {
	//   return redirect('/')
	// }
	console.log('Entering unauth check')
	// if (store.getters['users/loadedUser'].length > 0) {
	if (store.getters['users/loadedUser']) {
		return redirect('/home')
	}
}
