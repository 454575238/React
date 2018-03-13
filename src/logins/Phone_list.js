/*
* @Author: Marte
* @Date:   2018-02-07 11:09:22
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 14:11:11
*/
import React,{Component} from 'react';

class Phone_list extends Component{
    constructor(){
        super()
    }
    render(){

var that = this.props.on;
 var lists = this.props.list.map(function(elem){
             var _dd = elem.countryList.map(function(e){
               return ( <dd onClick={(e)=>{that(e)}} data-code={e.code} key={e.code}>{e.name}</dd>)
             })

           return (<div  key={elem.name}><dt >{elem.name}</dt>
             {_dd}</div>

            )


 })

  return(
    <div className="area_code_list" style={this.props.style}>
   <dl>
     {lists}
   </dl>
   </div>
    )
    }
}

export default Phone_list;