import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

export default class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state={
            num:props.num
        }
       //var num='1544741';
        console.log("***",this.state.num);
    }
    render(){
        return(
            <div>
                <h1> Welcome!! you are in Contact page. please contact {this.state.num} !
                </h1>
                </div>
        );
    }

}