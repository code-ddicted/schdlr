import React from 'react';
import './css/UI.css';
import List from './List.jsx';

class Content extends React.Component{

    render(){
       {/*
  figure useEffect()
  figure componentDidMount,componentDidUpdate,componentUpdated
  figure state and props
  figure make fetch() call to apis
      */}
      const activities=[
        {
          "title":"Morning Activity",
          "desc":"  git push -u origin master "
        },
        {
          "title":"Send Emails",
          "desc":"Forward report on computer networks and telecommunications course."
        },
        {
          "title":"Medicine",
          "desc":"Pick up some cough syrup on route home."
        },
        {
          "title":"Code",
          "desc":"Add features to my task scheduling application: configure mail server, and sms integration."
        }
      ];
     
      return (
        <div>
        {
          activities.map(activity=>{
            return (
              <List title={activity.title} desc={activity.desc}/>
            )
          }

          )
        }
        </div>
      )
    }
}
export default Content;
