export default function ({ store, redirect, error }) {
  // if (store.getters.activeUser) {
  //   return redirect('/')
  // }
  if (store.getters['users/loadedUser']) {
  	return redirect('/')
  }
}
