// export default function leagues (id) {
// 	return leaguesArray.find(league => league.id === id)
// }

const teamsArray = [
	{
		id: 41,
		name: 'Borussia Dortmund',
		slug: 'borussia_dortmund'
	},
	{
		id: 60,
		name: 'AS Monaco',
		slug: 'monaco'
	},
	{
		id: 26,
		name: 'Atletico Madrid',
		slug: 'atletico_madrid'
	},
	{
		id: 803,
		name: 'Club Brugge',
		slug: 'club_brugge'
	},
	{
		id: 1386,
		name: 'PSV Eindhoven',
		slug: 'psv_eindhoven'
	},
	{
		id: 81,
		name: 'Inter Milan',
		slug: 'inter_milan'
	},
	{
		id: 15,
		name: 'Tottenham Hotspur',
		slug: 'tottenham_hotspur'
	},
	{
		id: 21,
		name: 'FC Barcelona',
		slug: 'barcelona'
	},
	{
		id: 59,
		name: 'Paris Saint Germain',
		slug: 'psg'
	},
	{
		id: 168,
		name: 'FK Crvena Zvezda',
		slug: 'crvena_zvezda'
	},
	{
		id: 80,
		name: 'SSC Napoli',
		slug: 'napoli'
	},
	{
		id: 7,
		name: 'Liverpool',
		slug: 'liverpool'
	},
	{
		id: 161,
		name: 'Lokomotiv Moscow',
		slug: 'lokomotiv_moscow'
	},
	{
		id: 45,
		name: 'Schalke 04',
		slug: 'schalke_04'
	},
	{
		id: 158,
		name: 'AEK Athens',
		slug: 'aek_athens'
	},
	{
		id: 131,
		name: 'Benfica Lisbon',
		slug: 'benfica_lisbon'
	},
	{
		id: 46,
		name: 'Bayern Munich',
		slug: 'bayern'
	},
	{
		id: 586,
		name: 'Ajax Amsterdam',
		slug: 'ajax'
	},
	{
		id: 42,
		name: 'Hoffenheim',
		slug: 'hoffenheim'
	},
	{
		id: 12,
		name: 'Manchester City',
		slug: 'manchester_city'
	},
	{
		id: 61,
		name: 'Olympique Lyonnais',
		slug: 'lyon'
	},
	{
		id: 142,
		name: 'Shakhtar Donetsk',
		slug: 'shakhtar_donetsk'
	},
	{
		id: 90,
		name: 'AS Roma',
		slug: 'roma'
	},
	{
		id: 165,
		name: 'Viktoria Plzen',
		slug: 'viktoria_plzen'
	},
	{
		id: 132,
		name: 'CSKA Moscow',
		slug: 'cska_moscow'
	},
	{
		id: 27,
		name: 'Real Madrid',
		slug: 'real'
	},
	{
		id: 79,
		name: 'Juventus',
		slug: 'juventus'
	},
	{
		id: 151,
		name: 'Young Boys Bern',
		slug: 'young_boys'
	},
	{
		id: 19,
		name: 'Manchester United',
		slug: 'manu'
	},
	{
		id: 29,
		name: 'Valencia',
		slug: 'valencia'
	}
]

module.exports = {
	team: function(id) {
		return teamsArray.find(team => team.id === id)
	}
}