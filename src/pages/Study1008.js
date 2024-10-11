import React, { Component, useState } from 'react';
import './task0924.css';

const Study1008 = () => {
    //useState 훅을 사용하여 상태 관리 
    const [count, setCount] = useState(0);
    return (
        <div className="task0924-container">
            <h1>Hello world</h1>
            <p>현재 카운트 : {count}</p>
            <button onClick={()=>setCount(count+1)}>카운트 증가</button>
            <CCounter />
            <CGreeting name="Hanseo!"/>
            <FGreeting name="Hanseo!"/>
        </div>
    );
};
//Class Greeting
class CGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Hello World!'
        };
    }

    handleChangeGreeting = () => {
        if (this.state.greeting === 'Hello Universe!') {
            this.setState({greeting: 'Hello World!'});
            return;
        } 
        this.setState({greeting: 'Hello Universe!'});
        
    };

    render() {
        return (
            <div>
                <h1>{this.state.greeting} {this.props.name}</h1>
                <button onClick={this.handleChangeGreeting}>Change Greeting</button>
            </div>
        );
    }
}
//Function Greeting
function FGreeting({name}) {
    const [greeting, setGreeting] = useState('Hello World!');
  
    const handleChangeGreeting = () => {
      if (greeting === 'Hello Universe!') {
        setGreeting('Hello World!');
        return;
      }
      setGreeting('Hello Universe!');
    };
  
    return (
      <div>
          <h1>{greeting} {name}</h1>
          <button onClick={handleChangeGreeting}>Change Greeting</button>
      </div>
      );
  }
/* 
class를 이용한 컴포넌트 새파일로 만들어 작성해야함
*/
class CCounter extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        };
    }
    handleIncrement = () =>{
        this.setState({count: this.state.count+1});
    };
    render(){
        return(
            <div>
                <p>현재카운트: {this.state.count}</p>
                <button onClick={this.handleIncrement}>카운트 증가</button>
            </div>
        );
    }
}

export default Study1008;