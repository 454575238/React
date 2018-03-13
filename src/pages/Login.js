/*
* @Author: Marte
* @Date:   2018-02-05 17:36:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 18:48:50
*/

import React,{Component} from 'react';
import './Login.css';
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom'

import Lo_phone from "../logins/Lo_phone.js"
import Lo_pass from "../logins/Lo_pass.js"
class Login extends Component {
    constructor(){
        super()
        this.state = {
         flag : false,
         userId:"",
         pwd:""
        }
        this.onchange = this.onchange.bind(this)
        this.submit = this.submit.bind(this)
    }
    render(){


        var style = this.state.flag?{display:"none"}:{display:"block"}
        var style2 = !this.state.flag?{display:"none"}:{display:"block"}
        let{userId,pwd} = this.state

        return(

            <div className="Container">
            <section className="form_container active">
                 <form className="form_body form_password">
                <header className="form_header"><h2 className="title">登录拉勾</h2>
                 <a href="/register" className="brother_link">注册</a></header>
                <Switch>
                <Route exact path="/login"  >
                 <Lo_pass val={{userId,pwd}} change={this.onchange} />

                </Route>
                    <Route path="/login/Phone" component={Lo_phone} />
                </Switch>


                <div className="input_label btn_group">
                <input type="button" onClick={()=>{this.submit()}} className="submit_btn" value="登录" />
                </div>
                </form>
                 <footer className="form_footer" >

                 <NavLink to="/login/Phone" ><span onClick={()=>{this.change()}} className="signin_type_btn" style={style}>手机号登录</span></NavLink>


                  <NavLink to="/login" ><span style={style2} onClick={()=>{this.change()}} className="signin_type_btn">账号密码登录</span></NavLink>
              </footer>
              </section>
            </div>

            )
    }

    change(){
        this.setState({
            flag:!this.state.flag
        })
    }
   onchange(e){
      var name = e.target.type==="text"?"userId":"pwd";
      this.setState({
        [name]:e.target.value
      })
   }
   submit(){
    var users = this.state
    if(users.pwd!==""&&users.userId!==""){
                    localStorage.user=users.userId;localStorage.pwd=users.pwd
                    window.location = "/"
                }else{
                    alert("用户名密码不能为空")
                }
   }



}

export default Login;