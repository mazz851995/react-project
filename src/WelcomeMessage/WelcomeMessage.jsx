import React, { Component } from 'react'

class WelcomeMessage extends Component {
    state = {
        name : "Mashroor"
    }
    render() {
        const bgBackground={
            background : "#0000ff33",
            alignItems: "center",
            height:"100vh",
            display: "flex",
            justifyContent: "center",
            width: "100%"   
        }
        const content = {
            padding: "20px",
            height: "300px",
            width: "400px",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "7%",
            background:"white"
        }
        const h1 = {
            textAlign: "center",
            width: "100%"
        }
        let greeting = ""
        const textCol = {}
        const cusDate = new Date(2020, 11, 24, 16);
        const curDate = cusDate.getHours();
        console.log(cusDate.getHours());
        
        if(curDate >= 1 && curDate<12){
            greeting = "Good Morning";
            textCol.color = "green";
        }else if(curDate > 12 && curDate<16){
            greeting = "Good Afternoon";
            textCol.color = "yellow";
        }else{
            greeting = "Good Night";
            textCol.color = "red";
        }
        return (

            <div style={bgBackground}>
                <div style={content}>
                    <h1 style={h1}>Hello {this.state.name}, <span style={textCol}>{greeting}</span></h1>
                </div>
            </div>
        )
    }
}

export default WelcomeMessage;