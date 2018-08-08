export default function ({ store, redirect, error }) {
	// if (!store.getters.activeUser) {
	//   return redirect('/login')
	// }
	console.log('Entering auth-check')
  	// if (store.getters['users/loadedUser'].length <= 0) {
  	if (!store.getters['users/loadedUser']) {
		return redirect('/')
  	} 
  	// else {
  	// 	// console.log(this.$i18n.t('pages.index.welcome'))
   //      if (!store.getters['users/loadedUser'].level) {
   //      	console.log('User level is not defined')
   //      	store.dispatch('users/loadedUser')
   //      } else {
   //      	console.log('User level: ', this.loadedUser.level)
   //      }
  	// }
}
