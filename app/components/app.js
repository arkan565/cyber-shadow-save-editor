import { h, Component, useState } from 'preact';
import { Router } from 'preact-router';
import CheckpointSelect from './CheckpointSelect/CheckpointSelect'
import LifeTrisSelect from './LifeTrisSelect/LifeTrisSelect'
import SpiritShardsSelect from './UpgradesSelect/spiritShardsSelect'
import LifeShardSelect from './UpgradesSelect/lifeShardsSelect'
import fs from 'fs'


export default class App extends Component  {
	constructor(){
		super();
		this.state ={
			saveFolder: '',
			saveNumber: 0,
			save:{
				"found_sp_dispenser": 0,
				"found_blaster": 0,
				"found_salvager": 0,
				"found_extend": 0,
				"found_e_field": 0,
				"found_orbiter": 0,
				"found_ningun": 0,
				"found_swag": 0,
				"enemies_killed_smasher": 0,
				"parries": 0,
				"special_items_found": 0,
				"hunter_bores_destroyed": 0,
				"dic_seen": "{\"c2dictionary\":true,\"data\":{}}\n",
				"sec_door_save": "{\"c2dictionary\":true,\"data\":{}}\n",
				"chapters": "{\"c2dictionary\":true,\"data\":{\"latest\":\"chapter_LVL_geofront_1\",\"chapter_LVL_geofront_1\":\"active\"}}\n",
				"dic_transport": "{\"c2dictionary\":true,\"data\":{}}\n",
				"save_reAnimator": "{\"c2dictionary\":true,\"data\":{}}\n",
				"save_activatables": "{\"c2dictionary\":true,\"data\":{\"enemies_killed_smasher\":\"false\",\"beginning_1\":\"active\",\"d_lgion_intro_2\":\"active\"}}\n",
				"transport_array": "{\"c2array\":true,\"size\":[10,1,1],\"data\":[[[0]],[[0]],[[0]],[[0]],[[0]],[[0]],[[0]],[[0]],[[0]],[[0]]]}",
				"permapickups_items": "{\"c2dictionary\":true,\"data\":{}}\n",
				"permapickups_spirit_shards": "{\"c2dictionary\":true,\"data\":{}}\n",
				"permapickups_life_shards": "{\"c2dictionary\":true,\"data\":{}}\n",
				"permapickups_life_tris": "{\"c2dictionary\":true,\"data\":{}}\n",
				"deaths": 0,
				"playtime_chapter": 46.95139,
				"playtime": 46.95139,
				"checkpoint_upgrades_available": 0,
				"mode": "normal",
				"cleared": 0,
				"dojo_falcon_defeated": 0,
				"darklab_ninja_freed": 0,
				"ai_dragon_freed": 0,
				"ai_entrance_ucd": 0,
				"surface_gate_darktower_opened": 0,
				"surface_gate_surface2_opened": 0,
				"train_1_concrete_door": 0,
				"hunt_2_rock_dropped": 0,
				"hunt_2_door_destroyed": 0,
				"miniboss_tunnel_cleaner_destroyed": 0,
				"boss_cybermonster_destroyed": 0,
				"boss_ai_core_destroyed": 0,
				"boss_ghost_ninjas_destroyed": 0,
				"boss_mekadragon_destroyed": 0,
				"ai_4_gate_opened": 0,
				"boss_biohunter_destroyed": 0,
				"boss_scrambler_destroyed": 0,
				"miniboss_hunter_tank_destroyed": 0,
				"disposal_3_gate_opened": 0,
				"disposal_generator_freed": 0,
				"disposal_bridge_extended": 0,
				"miniboss_smasher_elevator_busted": 0,
				"sword_lvl": 1,
				"wpn_charge_unlocked": 0,
				"wpn_shadow_unlocked": 0,
				"wpn_parry_unlocked": 0,
				"wpn_wallgrab_unlocked": 0,
				"wpn_lightning_unlocked": 0,
				"wpn_rising_unlocked": 0,
				"wpn_stars_unlocked": 0,
				"miniboss_laserbrain_destoyed": 0,
				"miniboss_smasher_destoyed": 0,
				"surface_gate_star_opened": 0,
				"boss_apparitor_v1_destroyed": 0,
				"playerSpirit": 0,
				"playerEssence": 2,
				"latestRespawnID": "geofront_1",
				"latestRespawnLevel": "LVL_geofront_1",
				"save": "true"
			}
		}
		this.save = this.save.bind(this);
	}
	save (){
		let save = {c2dictionary:true,data:{}}
		if(fs.existsSync(`${this.state.saveFolder}/save_master.save`)){
			save = JSON.parse(fs.readFileSync(`${this.state.saveFolder}/save_master.save`));
		}
		Object.keys(this.state.save).forEach(key=>{
			save.data[`${key}${this.state.saveNumber}`] = this.state.save[key];
		})
		fs.writeFileSync(`${this.state.saveFolder}/save_master.save`,JSON.stringify(save));
	}
	render(){
		return (
			<div id="app">
				<div>
					<h2 class="subtitle">Save Folder</h2>
					<input value={this.state.saveFolder} onChange={(e) => this.setState({saveFolder:e.target.value})} class="input" type="text" placeholder="Save folder"></input>
				</div>
				<div>
					<h2 class="subtitle">Save Number</h2>
					<div class="select">
						<select value={this.state.saveNumber}  onChange={(e) => this.setState({saveNumber:e.target.value})}>
							<option value={0}>1</option>
							<option value={1}>2</option>
							<option value={2}>3</option>
							<option value={3}>4</option>
							<option value={4}>5</option>
							<option value={5}>6</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Essence</h2>
					<input class="input" value={this.state.save.playerEssence} onChange={(e)=>this.setState({save:{...this.state.save,playerEssence:parseInt(e.target.value)}})} type="number" placeholder="Essence"></input>
				</div>
				<div>
					<h2 class="subtitle">Spirit</h2>
					<input class="input" value={this.state.save.playerSpirit} onChange={(e)=>this.setState({save:{...this.state.save,playerSpirit:parseInt(e.target.value)}})} type="number" placeholder="Essence"></input>
				</div>
				<CheckpointSelect changeCheckpoint={(e)=>this.setState({save:{...this.state.save,...e}})}/>
				<div>
					<h2 class="subtitle">Sword Level</h2>
					<div class="select">
						<select value={this.state.save.sword_lvl} onChange={(e)=>this.setState({save:{...this.state.save,sword_lvl:parseInt(e.target.value)}})}>
							<option value={1}>1</option>
							<option value={2}>2</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Attack Charge</h2>
					<div class="select">
						<select value={this.state.save.wpn_charge_unlocked} onChange={(e)=>this.setState({save:{...this.state.save,wpn_charge_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>Locked</option>
							<option value={1}>Unlocked</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Kunai</h2>
					<div class="select">
						<select value={this.state.save.wpn_stars_unlocked} onChange={(e)=>this.setState({save:{...this.state.save,wpn_stars_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>Locked</option>
							<option value={1}>Unlocked</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Wall Grab</h2>
					<div class="select">
						<select value={this.state.save.wpn_wallgrab_unlocked}  onChange={(e)=>this.setState({save:{...this.state.save,wpn_wallgrab_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>Locked</option>
							<option value={1}>Unlocked</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Parry</h2>
					<div class="select">
						<select onChange={(e)=>this.setState({save:{...this.state.save,wpn_wallgrab_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>Locked</option>
							<option value={1}>Unlocked</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Shadow Level</h2>
					<div class="select">
						<select  onChange={(e)=>this.setState({save:{...this.state.save,wpn_shadow_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>1</option>
							<option value={1}>2</option>
							<option value={2}>3</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Fire Attack Level</h2>
					<div class="select">
						<select  onChange={(e)=>this.setState({save:{...this.state.save,wpn_rising_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>1</option>
							<option value={1}>2</option>
							<option value={2}>3</option>
						</select>
					</div>
				</div>
				<div>
					<h2 class="subtitle">Down Attack Level</h2>
					<div class="select">
						<select  onChange={(e)=>this.setState({save:{...this.state.save,wpn_lightning_unlocked:parseInt(e.target.value)}})}>
							<option value={0}>1</option>
							<option value={1}>2</option>
							<option value={2}>3</option>
						</select>
					</div>
				</div>
				<LifeTrisSelect changeTris = {(permapickups_life_tris)=> this.setState({save:{...this.state.save,permapickups_life_tris:permapickups_life_tris}})}/>
				<SpiritShardsSelect changeSp =  {(permapickups_spirit_shards)=> this.setState({save:{...this.state.save,permapickups_spirit_shards:permapickups_spirit_shards}})}/>
				<LifeShardSelect changeLS =  {(permapickups_life_shards)=> this.setState({save:{...this.state.save,permapickups_life_shards:permapickups_life_shards}})}/>
			
				<button onClick={this.save} class="button">Generate Save</button>
			</div>
			
		);
	}
	
}