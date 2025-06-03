import { db } from './firebase';

export interface TurnData {
	battle_id: string;
	turn: number;
	p1_action: string;
	p1_pokemon: string;
	p1_start_health: number;
	p1_end_health: number;
	p1_reaction: number;
	p2_action: string;
	p2_pokemon: string;
	p2_start_health: number;
	p2_end_health: number;
	p2_reaction: number;
}

export async function logTurn(turnData: TurnData) {
	try {
		await db.collection('turndata').add({turnData});
		console.log('Logged turn')
	} catch(err) {
		console.error('Logging error: ', err)
	}

}
