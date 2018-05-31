export default function ({ store, redirect, error }) {
  // if (!store.getters.activeUser) {
  //   return redirect('/login')
  // }
  if(!store.getters['users/loadedUser']) {
  	return redirect('/home')
  }
}
