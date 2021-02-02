import { h, Component } from 'preact';
const sp ={"sp_bonus_boat":"collected","sp_bonus_disposal":"collected","sp_bonus_hunt":"collected","sp_bonus_geofront":"collected","sp_hunt_surface_2":"collected","sp_disposal_1":"collected","sp_geofront_1":"collected","sp_disposal_3":"collected","sp_darklab_3":"collected","sp_factory_5":"collected"}
export default class SpiritShardsSelect extends Component{
    constructor (props) {
        super(props)
        
        this.state ={
            "c2dictionary":true,
            data:{
               
            }
        }
        this.changeSP = this.changeSP.bind(this);
    }
    changeSP(name,e){
        let data = {...this.state.data}
        if(e.target.checked){
            data[name]='collected'
        }else{
            delete data[name];
        }
        this.setState({data}, ()=>{
            this.props.changeSp(JSON.stringify(this.state));
        })
        
    }
    render (){
        return (<div>
            <h2 class="subtitle">Select Spirit shards Collections</h2>
            {Object.keys(sp).map(key =>{
                return (<div>
                 <label class="checkbox">
                     <input onChange={(e)=>this.changeSP(key,e)} type="checkbox"/>
                     {key}
                 </label>
                </div>)
            })}
        </div>)
    }
}