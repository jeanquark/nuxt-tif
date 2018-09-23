<template>
	<div id="modalTitle" class="modal-body-match">
		<div class="flex-container-modal-matchStats banner2 text-center">
			<h2>Tu as choisis ton camp ?</h2>
			<p style="#000;">
				<!-- event: {{ event }} -->
			</p>
		</div>
		<div class="borderMatchAgenda">
		  	<span class="OtherTeam"><img :src="'/images/teams/' + event.home_team.slug + '.png'" class="imgModalAvatar"/><div class="overlay" @click="addEvent(event.home_team)"><div class="textEventCountry" v-if="event.home_team">Soutenir</br>{{ event.home_team.name }}</div><div class="textEventCountry2">Vas-y, clique</div></div></span>
		  	<span class="OtherTeam"><img :src="'/images/teams/' + event.visitor_team.slug + '.png'" class="imgModalAvatar"/><div class="overlay" @click="addEvent(event.visitor_team)"><div class="textEventCountry" v-if="event.visitor_team">Soutenir</br>{{ event.visitor_team.name }}</div><div class="textEventCountry2">Vas-y, clique</div></div></span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['event'],
		data () {
			return {

			}
		},
		methods: {
			addEvent(team) {
				console.log('addEvent')
				console.log('team: ', team)
				const payload = {
					event: this.event,
					team
				}
				// return
				// return this.$emit('page', 'home')

				this.$store.dispatch('users/updateUserEvents', payload).then(() => {
					return this.$emit('page', 'home')
				})
			}
 		}
	}
</script>

<style scoped>
	.overlay {
		cursor: pointer;
	}
</style>