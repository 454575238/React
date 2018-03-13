/*
* @Author: Marte
* @Date:   2018-02-05 18:51:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 14:35:00
*/
import React, {Component} from 'react';

import Phone_list from "./Phone_list.js"
import citys from './citys.json'
import "./phone_list.css"
class Lo_phone extends Component{
     constructor(){
        super()
      this.state={
        list:citys.content.rows,
        flag : true,
        city:"0086",
      }
this.getVal = this.getVal.bind(this)
     }


    render(){
        var style =this.state.flag?{display:"block"}:{display:"none"};
        var style2 = !this.state.flag?{display:"block"}:{display:"none"};

        return(
             <div>
                <div className="input_label phone_wrapper" style={style}>
                  <span className="area_code" onClick={()=>{this.display()}}>{this.state.city}</span>
                <input type="text" placeholder="请输入常用手机号" className="input_text phone_input" />
                </div>
                <div className="input_label dn">
                    <input type="text" placeholder="请证明你不是机器人" className="input_text pcode_input" />
                    <img src="https://passport.lagou.com/vcode/create?from=register" className="pcode_img" />
                    <a className="pcode_link">换一张</a>
                </div>
                <div className="input_label" >
                    <input type="text" className="input_text vcode_input" placeholder="请输入收到的验证码" />
                    <input type="button" className="input_text vcode_link" value="获取验证码" placeholder="获取验证码" />
                </div>
                <Phone_list list={this.state.list} style={style2} on={this.getVal}  />

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
        city:e.target.dataset.code
    },function(){
        that.display()
    })

}

}


export default Lo_phone;







