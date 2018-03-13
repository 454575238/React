/*
* @Author: Marte
* @Date:   2018-02-05 10:26:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 18:48:26
*/

import React,{Component} from 'react';
import './Mine.css';

class Mine extends Component {
    constructor(){
        super()
    }
    render(){

        return(
            <div className="container">
                 <div className="nologin center">
                      {localStorage.length?<img src="imgs/default_headpic.png" /> :<span className="loginbut" onClick={()=>{window.location="/login"}}  target="_self">登录 / 注册</span>}
                      {localStorage.length?<div className="username">{localStorage.user}</div>:""}
                    </div>
                <div className="buttons">

                <a className="button deliver" >
                    <span>投递</span>


                </a>
                <a className="button interview" >面试</a>

                <a className="button invitation">
                    <span>邀约</span>
                                </a>

                <a className="button collect">收藏</a>
                </div>
                <div>{localStorage.length?<a onClick={()=>{localStorage.clear();window.location.reload()}} className="logout">退出登录</a>:""}</div>
            </div>

            )
    }
}

export default Mine;