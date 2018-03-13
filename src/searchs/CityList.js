/*
* @Author: Marte
* @Date:   2018-02-06 15:33:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 10:37:38
*/

import React, {Component} from 'react';
import CityItem from '../searchs/CityItem.js';

import './CityList.css'

class CityList extends Component{
    constructor(){
        super()


    };
   render(){

      if(this.props.list.length){
           var that = this;
         var list =  this.props.list.map(function(elem){
            return <CityItem key={elem.nameStr} on={that.props.val} val={elem} />
          })

      }
     return (
        <div style={this.props.style} className="citylist">

          {list}


         </div>)
   }




}
export default CityList;