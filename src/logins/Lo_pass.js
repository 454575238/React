/*
* @Author: Marte
* @Date:   2018-02-05 18:52:12
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 11:25:41
*/
import React, {Component} from 'react';

class Lo_pass extends Component{

    render(){

        return( <div>
                   <div className="input_label">
                        <input type="text" placeholder="请输入已验证的手机号或邮箱" className="input_text user_input" onChange={(e)=>{this.props.change(e)}} />
                    </div>
                    <div className="input_label">
                        <input type="password" onChange={(e)=>{this.props.change(e)}} className="input_text password_input" placeholder="请输入密码" />
                    </div>
            </div>
            )
    }
}


export default Lo_pass;