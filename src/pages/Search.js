/*
* @Author: Marte
* @Date:   2018-02-05 10:25:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 12:41:37
*/

import React,{Component} from 'react';
import './Search.css';
import CityList from '../searchs/CityList.js';
import Records from "../searchs/Records.js";
import axios from 'axios';
import PositionList from '../positions/PositionList.js';
import {Route,Switch,NavLink,Redirect } from 'react-router-dom';

class Search extends Component {
    constructor(){
        super()
        this.state={
            style3:{display:"block"},
            style4:{display:"none"},
            flag:true,
            city:"全国",
            list:[],
            data:[],
            val:"",


        }
if(window.location.pathname=="/searchiserror/list"){
    window.location="/searchiserror"
}


        this.getVal = this.getVal.bind(this);
        this.search = this.search.bind(this);
         this.change = this.change.bind(this);
         this.record = this.record.bind(this);
    }
    render(){

        var arr = this.state.arr

        var style =this.state.flag?{display:"block"}:{display:"none"};
        var style2 = !this.state.flag?{display:"block"}:{display:"none"};





        return(


        <div className="Search">
        <header className="header"><span style={style2} onClick={()=>{this.display()}}><i className="iconfont">&#xe60c;</i></span>拉勾网</header>
         <div className="linputer" style={style}>
              <div className="lbutton" onClick={()=>{this.display()}}>
                <span className="city" >{this.state.city}</span>
                <span className="cityicon"><b><i className="iconfont">&#xe6a7;</i></b></span>
              </div>
              <div className="rinput">
                <input ref="myinput" className="inputer" value={this.state.val} onChange={(e)=>{this.change(e)}} type="text" placeholder="搜索职位或公司" />
                 <button className="search" onClick={()=>{this.search(this.state.val)}}><i className="iconfont">&#xe621;</i></button>
              </div>
         </div>

           <CityList style={style2} val={this.getVal} list={this.state.list} />

                 <div style={this.state.style3}>
                <Records record={this.record} />
                </div>
                <div style={this.state.style4}>
                {!this.state.data.length?<div>没有相关内容</div>:<PositionList data={this.state.data} />}
                </div>


        </div>


            )
    }

  display(){
    this.setState({
        flag:!this.state.flag
    })
  }
getVal(e){
    var that = this

    this.setState({
        city:e.target.innerText
    },function(){
        that.display()
    })

}

componentWillMount(){

    var that  =  this;
    axios.get("list.json").then(function(data){
        that.setState({
            list:data.data
        })

    })

   }
componentDidMount(){
    var that = this ;
    this.refs.myinput.onkeydown = function(e){
          if(e.keyCode==13){
              that.search(that.state.val)
          }
    }
}



 change(e){
   var that = this;
     this.setState({
        val:e.target.value
     },function(){
        if(that.state.val===""){
             this.setState({
            style3:{display:"block"},
            style4:{display:"none"}
        })
        }
     })
 }


 record(e){
   this.setState({
    val:e.target.innerText
   })
    this.searchList(e.target.innerText)

 }





 search(str){

     var  that = this;
       var str = str.trim().toUpperCase();
     if(sessionStorage.arr){
        var arr = JSON.parse(sessionStorage.arr)
     }else{
        var arr=[]
     }

     if(str!==""){
        arr.push(str)
         if(arr.length!==0){

    sessionStorage.setItem("arr",JSON.stringify(arr))

}

     }else{
        alert(
               " 将搜索地区和关键词设为定制条件"
            )
        return
     }

      this.setState({
          arr:arr
      }
)

this.searchList(str)


 }




 searchList(str){
    var that = this;
    this.setState({
            style3:{display:"none"}

        })

    axios.post(`/listmore.json?pageNo=1&pageSize=500`).then(function(datas){
            var result =  datas.data.content.data.page.result;


          var list = result.filter(function(elem) {


               if(that.state.city==="全国"){

                 return (elem.companyName.match(str)!==null||elem.positionName.match(str)!==null)
             }else{
                return (elem.city==that.state.city&&(elem.companyName.match(str)!==null||elem.positionName.match(str)!==null))
             }

           });


           that.setState({
            data:list,
             style4:{display:"block"}
           })


           })


 }



}

export default Search;