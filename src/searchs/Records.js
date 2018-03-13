/*
* @Author: Marte
* @Date:   2018-02-08 10:16:52
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 15:59:17
*/

import React,{Component} from 'react';
import './Records.css';

class Records extends Component {
    constructor(){
        super()
        this.state={
            arr :sessionStorage.arr?JSON.parse(sessionStorage.arr):[]
        }
       this.dele = this.dele.bind(this)
    }
    render(){
           if(sessionStorage.arr){

            var arr = JSON.parse(sessionStorage.arr);

           var that = this;

           var lis= arr.map(function(elem,index){
            return <li key={index}  className ="activeable history-item"><div
               className="clickBar" onClick={(e)=>{that.props.record(e)}}>{elem}</div><div className="de"><span onClick={(e)=>{that.dele(e)}} className="delicon" data-id={index}></span></div></li>
            })
}

  return(

             <ul  className="his-list history">

             {lis?lis:<div></div>}

             </ul>


            )

    }

dele(e){

    var arr = JSON.parse(sessionStorage.arr);
    arr.splice(e.target.dataset.id,1);
    sessionStorage.setItem("arr",JSON.stringify(arr));
    this.setState({
        arr:arr
    })

}


}

export default Records;