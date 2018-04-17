import firebase from 'firebase'
import Noty from 'noty'

export const state = () => ({
    loadedTasks: []
})

export const mutations = {
    setTasks(state, payload) {
        state.loadedTasks = payload
    },
    createTask (state, payload) {
        state.loadedTasks.push(payload)
    },
    deleteTask (state, id) {
        const loadedTasks = state.loadedTasks
        state.loadedTasks.splice(loadedTasks.findIndex(task => task.id === id), 1)
    } 
}

export const actions = {
    loadedTasks ({commit}) {
        console.log('loadedTasks2')
        // commit('setLoading', true, { root: true })
        // firebase.database().ref('tasks/').on('value', function (snapshot) {
        //     console.log('abc')
        //     console.log(snapshot.val())
        //     const tasksArray = []
        //     for (const key in snapshot.val()) {
        //         tasksArray.push({ ...snapshot.val()[key]})
        //     }
        //     // console.log(postsArray)
        //     // setTimeout(function() {
        //         commit('setTasks', tasksArray)
        //         commit('setLoading', false, { root: true })
        //     // }, 3000)
        // })
        try {
            firebase.database().ref('/tasks/').once('value').then(function (snapshot) {
                console.log(snapshot.val())
                const tasksArray = []
                for (const key in snapshot.val()) {
                    tasksArray.push({ ...snapshot.val()[key], id: key})
                }
                // console.log(postsArray)
                commit('setTasks', tasksArray)
            })
        } catch(error) {
          console.log(error)
        }
    },
    createTask ({commit, getters}, payload) {
        commit('setLoading', true, { root: true })
        console.log(payload)
      
        const newTaskKey = firebase.database().ref().child('tasks/').push().key

        try {
            firebase.database().ref('tasks/' + newTaskKey).set(
            // {
            //     id: newTaskKey,
            //     title: payload.title,
            //     description: payload.description,
            //     status: payload.status,
            //     progress: payload.progress,
            //     users: payload.users,
            //     progress: payload.progress,
            //     start_date: payload.startDate,
            //     end_date: payload.endDate,
            //     _created_at: new Date().getTime(),
            //     _updated_at: new Date().getTime()
            // }
                { ...payload, _created_at: new Date().getTime()/1000, _updated_at: new Date().getTime()/1000}
            )

            commit('setLoading', false, { root: true })
            commit('createTask', payload)
            // this.$toast.success('Nouvelle tâche créée avec succès!', 'Succès')
            new Noty({type: 'success', layout: 'topRight', text: 'Nouvelle tâche créée avec succès!', timeout: 5000, theme: 'metroui'}).show()
            // router.push('/admin/tasks')
        } catch (error) {
            console.log(error)
            new Noty({type: 'error', layout: 'topRight', text: 'Une erreur est survenue lors de la création de la tâche', timeout: 5000, theme: 'metroui'}).show()
        }
    },
    updateTask ({commit, getters}, payload) {
        commit('setLoading', true, { root: true })

        const taskId = payload.id

        firebase.database().ref().child('/tasks/' + taskId).update(payload);

        // commit('setLoadedTasks', )
        commit('setLoading', false, { root: true })
        this.$toast.success('Tâche éditée avec succès!', 'Succès')
        router.push({ name: 'Back' })
    },
    deleteTask ({commit}, taskId) {
        commit('setLoading', true, { root: true })

        // const taskId = payload.task.id
        // console.log(taskId)

        try {
            // firebase.database().ref('/tasks/' + taskId).remove()
            new Noty({type: 'success', text: 'Tâche supprimée avec succès!', timeout: 5000, theme: 'metroui'}).show()
        } catch (error) {
            console.log(error)
            new Noty({type: 'error', layout: 'topRight', text: 'Erreur lors de la suppression de la tâche.', timeout: 5000, theme: 'metroui'}).show()
        }

        commit('deleteTask', taskId)
        commit('setLoading', false, { root: true })
    }
}

export const getters = {
    loadedTasks(state) {
        return state.loadedTasks
    }
}
