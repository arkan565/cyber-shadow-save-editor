import { h, Component } from 'preact';

export default class LifeTrisSelect extends Component{
    constructor (props) {
        super(props)
        this.state ={
            "c2dictionary":true,
            data:{
               
            }
        }
        this.changeTri = this.changeTri.bind(this);
    }
    changeTri(name,e){
        let data = {...this.state.data}
        if(e.target.checked){
            data[name]='collected'
        }else{
            delete data[name];
        }
        this.setState({data}, ()=>{
            this.props.changeTris(JSON.stringify(this.state));
        })
        
    }
    render (){
        return (<div>
            <h2 class="subtitle">Select Full Health Collections</h2>
            <label class="checkbox">
                <input onChange={(e)=>this.changeTri('tri_combinatron',e)} type="checkbox"/>
                Combinatron
            </label>
            <br/>
            <label class="checkbox">
                <input onChange={(e)=>this.changeTri('tri_hunter_tank',e)} type="checkbox"/>
                Hunter tank
            </label>
            <br/>
            <label class="checkbox">
                <input onChange={(e)=>this.changeTri('tri_laserbrain',e)} type="checkbox"/>
                Laserbrain
            </label>
            <br/>
            <label class="checkbox">
                <input onChange={(e)=>this.changeTri('tri_smasher',e)} type="checkbox"/>
                Smasher
            </label>
            <br/>
            <label class="checkbox">
                <input onChange={(e)=>this.changeTri('tri_tunnel_cleaner',e)} type="checkbox"/>
                Tunnel Cleaner
            </label>
            <br/>
        </div>)
    }
}