/*
* @Author: Marte
* @Date:   2018-02-08 18:55:35
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-12 15:10:10
*/

import React,{Component} from 'react';
import './Jobs.css';
import axios from 'axios';
import "./font_309774_qkbh0c7h1l9pb9/iconfont.css";
class Jobs extends Component {
    constructor(){
        super()

       this.state={
        Data:[]
       }


    }
    render(){
         let{city,companyLogo,companyName,positionName,salary} = JSON.parse(document.cookie.split("=")[1])





        return(


            <div >

            <header className="header"  ><div className="left" onClick={()=>{window.history.back()}}><i className="iconfont">&#xe60c;</i></div>职位详情

            <div className="right"><i className="iconfont">&#xe620;</i></div>
            </header>
             <div className="postitle">
                    <h2 className="title">{positionName}</h2>
                    <div className="collicon activeable">
                    <span className="icon notcoll"></span>
                    <span className="text"> 未收藏</span>
                    </div>
                </div>


        <div className="detail">
            < div className="items">
                                                    <span className="itemss salary">
                        <em className="icon"></em>
                        <span className="text">{salary}</span>
                    </span>
                                                    <span className="itemss workaddress">
                        <em className="icon"></em>
                        <span className="text">{city}</span>
                    </span>
                                                    <span className="itemss jobnature">
                        <em className="icon"></em>
                        <span className="text">全职</span>
                    </span>
                                                    <span className="itemss workyear">
                        <em className="icon"></em>
                        <span className="text">不限</span>
                    </span>
                                                    <span className="itemss education">
                        <em className="icon"></em>
                        <span className="text">
                            大专及以上                        </span>
                    </span>
                            </div>

            <div className="temptation">
                职位诱惑：平台稳定 晋升空间大
            </div>
        </div>

<div className="company activeable" >
            <img src={"https://static.lagou.com/"+companyLogo} alt="" className="logo" />
            <div className="desc">
                <div className="dleft">
                    <h2 className="title">
                        {companyName}
                    </h2>
                    <p className="info"> 移动互联网 /未融资 /500-2000人</p>
                </div>
                   <span className="dright"></span>
                </div>
        </div>
        <div className="positiondesc">
                    <header className="header">
                        职位描述
                    </header>
                    <div className="content">
                        <p>岗位职责：</p>
        <p>1. 负责整理和落实运营的活动文案；</p>
        <p>2. 负责内容产品在各大平台的更新及维护；</p>
        <p>3. 负责与种子用户的互动和沟通；</p>
        <p>4. 根据工作需要，利用贴吧、论坛、社群等渠道，获取核心目标用户；</p>
        <p>5. 参与线下线上活动的策划，并和团队成员一起完成活动方案落地；</p>
        <p>任职要求：</p>
        <p>1. 大专以上学历，市场营销、广告设计、电子商务优先；</p>
        <p>2. 熟悉办公软件，Word、Excel 、PPT；</p>
        <p>3. 了解一定的网络操作流程，了解网络推广路径；</p>
        <p>4. 熟悉贴吧、论坛、社区、新媒体等渠道的优先；</p>
        <p>5. 性格乐观开朗，工作细致认真，善于观察，能承受一定的工作压力，可很好的待人接物；</p>
        <p>6. 最好有过一些工作经验，例如兼职；</p>

                    </div>
                </div>

            <div className="eval-title">
                面试评价
                    <span id="total">(<span>0</span>)</span>
            </div>
           <ul className="list-bottom"><li className="list-item-empty list-item">暂无面试评价</li></ul>



               <footer className="fix_btn_group" >
               <div className="deliver deliver_resume rows_bar" >投递简历</div>
             </footer>


             </div>

            )
    }



}

export default Jobs;