import { h, Component, useState } from 'preact';
import fs from 'fs'
export default class CheckPointSelect extends Component{
	constructor(props){
		super(props);
		const json = JSON.parse(fs.readFileSync('./chapterCheckpoints.json'));
		const chapter = Object.keys(json)[0];
		const checkpoint = json[chapter];
		const selectedCheckpoint = Object.keys(checkpoint)[0]
		props.changeCheckpoint(checkpoint[selectedCheckpoint]);
		this.state ={
			chapter,
			checkpoint,
			selectedCheckpoint,
			json
		}
		console.log(json)
		this.changeChapter = this.changeChapter.bind(this);
		this.changeCheckpoint = this.changeCheckpoint.bind(this);
	}
	changeChapter (e){
		const chapter = e.target.value
		const checkpoint = this.state.json[chapter];
		const selectedCheckpoint= Object.keys(checkpoint)[0];
		this.props.changeCheckpoint(checkpoint[selectedCheckpoint]);
		this.setState({chapter,checkpoint,selectedCheckpoint});
	}
	changeCheckpoint(e) {
		console.log(this.state.checkpoint[e.target.value])
		this.props.changeCheckpoint(this.state.checkpoint[e.target.value]);
		this.setState({selectedCheckpoint:e.target.value});
	}
	render(){
		return (
        <div>
            Chapter Select
            <br/>
			<div  class="select">
				<select onChange={this.changeChapter} value ={this.state.chapter}>
					{Object.keys(this.state.json).map(key=>{
						return <option key={key}>{key}</option>
					})}
				</select>
			</div>
            <br/>
            Checkpoint Select 
            <br/>
            <div class="select">
				<select onChange={this.changeCheckpoint} value={this.state.selectedCheckpoint}>
					{Object.keys(this.state.checkpoint).map(key=>{
						return <option key={key}>{key}</option>
					})}
				</select>
			</div>
        </div>
		);
	}
}