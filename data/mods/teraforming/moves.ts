export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	// non-new moves
	gigatonhammer: {
		num: 893,
		accuracy: 100,
		basePower: 160,
		category: "Physical",
		name: "Gigaton Hammer",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		self: {
			volatileStatus: 'gigatonhammer',
		},
		condition: {
			duration: 2,
			onModifyPriority(priority, source, target, move) {
				return priority + 1;
			},
		},
		secondary: null,
		target: "normal",
		type: "Steel",
	},
	bloodmoon: {
		num: 901,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Blood Moon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		self: {
			volatileStatus: 'gigatonhammer',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	teraused: {
		shortDesc: "Prevents Terastalization from being used multiple times.",
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Tera Used",
		pp: 5,
		priority: 0,
		flags: {},
		sideCondition: 'teraused',
		condition: {},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
};
