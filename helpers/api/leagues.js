// export default function leagues (id) {
// 	return leaguesArray.find(league => league.id === id)
// }

const leaguesArray = [
	{
		id: 25,
		name: 'English Premier League',
		slug: 'english_premier_league'
	},
	{
		id: 74,
		name: 'Spanish La Liga',
		slug: 'spanish_la_liga'
	},
	{
		id: 114,
		name: 'German Bundesliga',
		slug: 'german_bundesliga'
	},
	{
		id: 73,
		name: 'Italian Serie A',
		slug: 'italian_serie_a'
	},
	{
		id: 12,
		name: 'Swiss Super League',
		slug: 'swiss_super_league'
	},
	{
		id: 174,
		name: 'Champions League Group A',
		slug: 'champions_league_group_a'
	},
	{
		id: 175,
		name: 'Champions League Group B',
		slug: 'champions_league_group_b'
	},
	{
		id: 176,
		name: 'Champions League Group C',
		slug: 'champions_league_group_c'
	},
	{
		id: 177,
		name: 'Champions League Group D',
		slug: 'champions_league_group_d'
	},
	{
		id: 232,
		name: 'Champions League Group E',
		slug: 'champions_league_group_e'
	},
	{
		id: 233,
		name: 'Champions League Group F',
		slug: 'champions_league_group_f'
	},
	{
		id: 234,
		name: 'Champions League Group G',
		slug: 'champions_league_group_g'
	},
	{
		id: 235,
		name: 'Champions League Group H',
		slug: 'champions_league_group_h'
	},
	{
		id: 236,
		name: 'Europa League Group A',
		slug: 'europa_league_group_a'
	},
	{
		id: 237,
		name: 'Europa League Group B',
		slug: 'europa_league_group_b'
	},
	{
		id: 238,
		name: 'Europa League Group C',
		slug: 'europa_league_group_c'
	},
	{
		id: 239,
		name: 'Europa League Group D',
		slug: 'europa_league_group_d'
	},
	{
		id: 240,
		name: 'Europa League Group E',
		slug: 'europa_league_group_e'
	},
	{
		id: 241,
		name: 'Europa League Group F',
		slug: 'europa_league_group_f'
	},
	{
		id: 242,
		name: 'Europa League Group G',
		slug: 'europa_league_group_g'
	},
	{
		id: 243,
		name: 'Europa League Group H',
		slug: 'europa_league_group_h'
	},
	{
		id: 244,
		name: 'Europa League Group I',
		slug: 'europa_league_group_i'
	},
	{
		id: 245,
		name: 'Europa League Group J',
		slug: 'europa_league_group_j'
	},
	{
		id: 246,
		name: 'Europa League Group K',
		slug: 'europa_league_group_k'
	},
	{
		id: 247,
		name: 'Europa League Group L',
		slug: 'europa_league_group_l'
	}
]

module.exports = {
	league: function(id) {
		return leaguesArray.find(league => league.id === id)
	}
}