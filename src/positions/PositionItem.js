/*
* @Author: Marte
* @Date:   2018-02-05 13:47:00
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-09 10:34:16
*/

import React,{Component} from 'react';
import './PositionList.css'
class PositionItem extends Component {
    constructor(){
        super()
    }
    render(){

        let{city,companyLogo,companyName,createTime,salary,positionName,positionId} = this.props.value

          var str =JSON.stringify({city,companyLogo,companyName,positionName,positionId} )



        return(

            <div className="item" onClick={(e)=>{var str = JSON.stringify({city,companyLogo,companyName,positionName,positionId,salary});


                 window.location=`/jobs/${positionId}`
                 document.cookie=`key=${str};path=/;`
                }}>
            <img  src={"https://static.lagou.com/"+companyLogo} />
            <div className="item-desc">
                <h2>{companyName}</h2>
                <p>{positionName}[ {city} ]<span className="item-salary">{salary}</span></p>
                <p>{createTime}</p>
            </div>
            </div>

            )
    }
}

export default PositionItem;