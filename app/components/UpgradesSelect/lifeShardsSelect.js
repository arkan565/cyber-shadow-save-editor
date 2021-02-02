import { h, Component } from 'preact';
const ls ={"hp_boat_3":"collected","hp_ai_2":"collected","hp_sewer_1":"collected","hp_darklab_1":"collected","hp_hunt_train_1":"collected","hp_ai_re_2":"collected","hp_ai_re_secret":"collected","hp_factory_7":"collected","hp_disposal_2":"collected","hp_geofront_elevator":"collected","hp_geofront_2":"collected","hp_boat_1":"collected","hp_darklab_6":"collected","hp_ai_3":"collected","hp_factory_3":"collected"}

export default class LifeShardSelect extends Component{
    constructor (props) {
        super(props)
        
        this.state ={
            "c2dictionary":true,
            data:{
               
            }
        }
        this.changeLS = this.changeLS.bind(this);
    }
    changeLS(name,e){
        let data = {...this.state.data}
        if(e.target.checked){
            data[name]='collected'
        }else{
            delete data[name];
        }
        this.setState({data}, ()=>{
            this.props.changeLS(JSON.stringify(this.state));
        })
        
    }
    render (){
        return (<div>
            <h2 class="subtitle">Select Life Shards Collections</h2>
            {Object.keys(ls).map(key =>{
                return (<div>
                 <label class="checkbox">
                     <input onChange={(e)=>this.changeLS(key,e)} type="checkbox"/>
                     {key}
                 </label>
                </div>)
            })}
        </div>)
    }
}