import { db } from './firebase';

export interface TurnData {
	battle_id: string;
	turn: number;
	timestamp: number;
	p1_action: string;
	p1_pokemon: string;
	p1_start_health: number;
	p1_end_health: number;
	p1_reaction: number;
	p1_timeout: boolean;
	p1_move1: number[];
	p1_move2: number[];
	p1_move3: number[];
	p1_switch2: number[];
	p1_switch3: number[];
	p1_own_pokemon1: number[];
	p1_own_pokemon2: number[];
	p1_own_pokemon3: number[];
	p1_foe_pokemon1: number[];
	p1_foe_pokemon2: number[];
	p1_foe_pokemon3: number[];
	p2_action: string;
	p2_pokemon: string;
	p2_start_health: number;
	p2_end_health: number;
	p2_reaction: number;
	p2_timeout: boolean;
	p2_move1: number[];
	p2_move2: number[];
	p2_move3: number[];
	p2_switch2: number[];
	p2_switch3: number[];
	p2_own_pokemon1: number[];
	p2_own_pokemon2: number[];
	p2_own_pokemon3: number[];
	p2_foe_pokemon1: number[];
	p2_foe_pokemon2: number[];
	p2_foe_pokemon3: number[];

}

export async function logTurn(turnData: TurnData) {
	try {
		await db.collection('turndata').add({turnData});
		console.log('Logged turn')
	} catch(err) {
		console.error('Logging error: ', err)
	}

}
