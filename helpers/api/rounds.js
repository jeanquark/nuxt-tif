const roundsArray = [
	{
		id: 1,
		name: 'Group stage',
		slug: 'group_stage',
		abbreviation: 'GS'
	},
	{
		id: 2,
		name: 'Quarter Final',
		slug: 'quarter_final',
		abbreviation: 'QF'
	},
	{
		id: 3,
		name: 'Semi Final',
		slug: 'semi_final',
		abbreviation: 'SF'
	},
	{
		id: 4,
		name: 'Final',
		slug: 'final',
		abbreviation: 'F'
	}
]

module.exports = {
	round: function(abbreviation) {
		return roundsArray.find(round => round.abbreviation === abbreviation)
	}
}