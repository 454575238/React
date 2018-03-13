/*
* @Author: Marte
* @Date:   2018-02-07 15:14:03
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 15:24:42
*/

import React,{Component} from "react";
import {BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom'
import Lo_phone from "../logins/Lo_phone.js";
class Register extends Component{
    constructor(){
        super()
    }
    render(){
        return (<div className="Container">
            <section className="form_container active">
                 <form className="form_body form_password">
                <header className="form_header"><h2 className="title">注册拉勾</h2>
                 <a href="/login" className="brother_link">登录</a></header>
                <Switch>


                    <Route  component={Lo_phone} />
                </Switch>


                <div className="input_label btn_group">
                <input type="button"  className="submit_btn" value="注册" />
                </div>
                </form>

              </section>
            </div>
)
    }
}


export default Register;