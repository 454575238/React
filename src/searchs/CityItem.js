/*
* @Author: Marte
* @Date:   2018-02-06 15:34:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 15:52:37
*/

import React,{Component} from 'react';

 class  CityItem extends Component{
   constructor(){
    super()
   }

  render(){

       let {nameStr,cityList} =  this.props.val;
        var that = this.props.on;


       var arr = []
         for(var i = 3 ,j=0,len=cityList.length;i<=len;i+=3){
                   arr.push(cityList.slice(j,i))

            j+=3
         }

      var lists =  arr.map(function(elem){
             var _td =    elem.map(function(el){
                     return( <td  key={el} onClick={(e)=>{that(e)}} className="activeable cities-item" data-item={el}>{el}</td>)
                   })


         return  (<tr className="cities-list-item" key={elem} >
                        {_td}
                   </tr>
            )
         })



    return (
         <div>
            <div className="cities-header">{nameStr}</div>
            <table className="cities-list">
             <tbody>
                {lists}

             </tbody>

            </table>
        </div>
        )
  }

 }
 export default CityItem;