console.log("✅ TOM Pokedex loaded");

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	tomgrass: {
		name: 'TOMGrass',
		num: 2000,
		types: ['Grass'],
		abilities: {0: 'Ball Fetch'},
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		eggGroups: ['Monster'],
		weightkg: 0,
	},
	tomwater: {
		name: 'TOMWater',
		num: 2001,
		types: ['Water'],
		abilities: {0: 'Ball Fetch'},
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		eggGroups: ['Monster'],
		weightkg: 0
	},
	tomfire: {
		name: 'TOMFire',
		num: 2002,
		types: ['Fire'],
		abilities: {0: 'Ball Fetch'},
		baseStats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
		eggGroups: ['Monster'],
		weightkg: 0
	},
}