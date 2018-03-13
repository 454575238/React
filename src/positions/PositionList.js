/*
* @Author: Marte
* @Date:   2018-02-05 13:46:35
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 09:36:11
*/


import React,{Component} from 'react';

import PositionItem from '../positions/PositionItem.js'
class PositionList extends Component {
    constructor(){
        super()
    }
    render(){
        if(this.props.data.length!==0){
               var that = this.props.data

                 var  item =  this.props.data.map(function(data){
                 return(<PositionItem   key={data.positionId} value={data} />)
            })




            }
  return(

             <ul className="list">
             {item?item:<p>loading..</p>}


             </ul>


            )

    }
}

export default PositionList;