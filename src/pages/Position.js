/*
* @Author: Marte
* @Date:   2018-02-05 10:25:27
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-07 19:52:41
*/
import React,{Component} from 'react';
import './Position.css';
import axios from 'axios';
import PositionList from '../positions/PositionList.js'
class Position extends Component {
    constructor(){
        super()

       this.state = {
        page:1,
        Data:[],


       }
    }
    render(){



        return(

           <div>
           <div className="info">10秒钟定制职位<span>{localStorage.length?<a>编辑</a>:<a onClick={()=>{window.location='/login'}}>去登陆</a>}</span>

                 </div>
                 <PositionList data={this.state.Data} / >

                 <div className="more" onClick={()=>{this.onPage()}}>加载更多</div>

                   <div id="copyright"><p>©2015 lagou.com, all right reserved </p><div className="copyright-item"><span className="phone active">移动版&nbsp;·&nbsp;</span><span className="computer">电脑版&nbsp;·&nbsp;</span><a href="#header">回顶部</a></div>
                   </div>
            </div>

            )
    }
    onPage(){
        var that = this;
        this.setState({
            page:this.state.page+1
        },function(){

          axios.post(`/listmore.json?pageNo=${that.state.page}&pageSize=15`).then(function(datas){
              var Data = that.state.Data

                 that.setState({
                    Data: Data.concat(JSON.parse(datas.request.response).content.data.page.result)
                 })
                })
        })
    }



    componentWillMount(){
         var that = this;
         axios.post(`/listmore.json?pageNo=1&pageSize=15`).then(function(datas){

                 that.setState({
                    Data:JSON.parse(datas.request.response).content.data.page.result
                 })




           })

    }


}

export default Position;