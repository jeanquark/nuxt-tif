import firebase from 'firebase'

export const state = () => ({
	loadedNews: []
})

export const mutations = {
	setNews(state, payload) {
        state.loadedNews = payload
    }
}

export const news = {
	loadedNews ({commit}) {
    	return firebase.database().ref('/news/').once('value').then(function (snapshot) {
	      	const newsArray = []
	      	for (const key in snapshot.val()) {
	        	newsArray.push({ ...snapshot.val()[key], id: key})
	      	}
	      	commit('setNews', newsArray)
	      	return newsArray
	    })
  	}
}

export const getters = {
	loadedNews(state) {
        return state.loadedNews
    }
}