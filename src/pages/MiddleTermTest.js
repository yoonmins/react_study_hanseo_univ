import React, { Component, useState } from 'react';
import MiddleTermTestComponent from './component/MiddleTermTestComponent'
import InputComponent from './component/InputComponent'

// function component
const FunctionComponent = (props) => {
    return(
        <div>
            <h1> Hello {props.value}</h1>
        </div>
    )
}

function FunctionClass(props){
    return (
        <div>
            <h1>Hello. {props.item}</h1>
        </div>
    )
}
//class component
class ClassComponentCounter extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }
    }
    handleIncrement =()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div>
                <p>현재 페이지 : {this.state.count}</p>
                <button onClick={this.handleIncrement}>카운트증가</button>
            </div>
        )
    }
}
//simple class component
class ClassSimpleComponent extends Component{
    render(){
        return(
            <div><h1>Hello this is simple Component</h1></div>
        )
    }
}

//useState example1
const CounterUsestate = ()=>{
    const [count,setCount]=useState(0);
    const countUp =()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h2>현재 값 {count}</h2>
            <button onClick={countUp}> count up</button>
        </div>
    )
}

const OtherCounterUsestate = ()=>{
    const [count,setCount]=useState(0);
    
    return(
        <div>
            <h2>현재 값 {count}</h2>
            <button onClick={() => (setCount(count + 1))}> count up</button>
        </div>
    )
}


//useStaet example2
const CounterButton = () =>{
    const[text, setText] = useState(0)

    function handleClick(num){
        setText(`change ${num} button`);
    }

    return(
        <div>
            <h2>
                {text}
            </h2>
            <button onClick={() => handleClick(1)}>Click 1 button</button>
            <button onClick={() => handleClick(2)}>Click 2 button</button>
            <button onClick={() => handleClick(3)}>Click 3 button</button>
            <button onClick={() => handleClick(4)}>Click 4 button</button>
        </div>
    )
}

//Function Component state&&props
function StatePropsFunctionComponent(props){
    const [text,setText] =useState();

    const StateComponent =()=>{
        setText("이름 변경완료");
    }

    return(
        <>
            <h2>{text}, {props.name}</h2>
            <button onClick={StateComponent}>change button</button>
        </>
    )
}
//Class Component state&&props
class StatePropsClassComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            greating : "안녕하세요"
        }
    }
    handleChangeGreting = () => {
        this.setState({greating:"바뀌었습니다"});
    }
    render(){
        return(            
            <div>
                <h1>{this.state.greating}, {this.props.name}</h1>
                <button onClick={this.handleChangeGreting}> change</button>
            </div>
        )
    }
}

//input handleing event 
const InputExample = () => {
    const [value,setValue]=useState('');

    const handleChange =(event)=>{
        setValue(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`입력한값 : ${value}`);
        
    }
    return(
        <div>
            <h2>{value}</h2>
            <input type='text' value={value} onChange={handleChange} />
            <form onSubmit={handleSubmit}>
                <MiddleTermTestComponent value={value} onChang={handleChange}/>
                <button type='submit'> 제출</button>
            </form>
            
        </div>
    );
}

const InputIdPwExample = () => {
    const [idValue, setIdValue] = useState("");
    const [pwValue, setPwValue] = useState("");

    const changeIdInputValue =(value)=>{
        setIdValue(value);
    }
    const changePwInputValue =(value)=>{
        setPwValue(value);
    }
    const handSubmit =(e)=>{
        e.preventDefault();
        alert(`당신의 ID는 ${idValue}`);
        alert(`당신의 PW는 ${pwValue}`);
    }

    return(
        <div>
            <form onSubmit={handSubmit}>
                <InputComponent idValue={idValue} pwValue={pwValue} onChangeID={changeIdInputValue} onChangePW={changePwInputValue} />
                <button type='submit'> 제출 </button>
            </form>
        </div>
    )
}

function MiddleTermTest(){
    return (
        <div>
            <FunctionClass item="World!"/>
            <FunctionComponent value="mu name is"/>
            <ClassComponentCounter />
            <ClassSimpleComponent />
            <CounterUsestate />
            <OtherCounterUsestate/>
            <CounterButton />
            < StatePropsFunctionComponent name="sungmin" />
            <StatePropsClassComponent name="junbyim" />
            <InputExample />
            <InputIdPwExample />
        </div>
    )
}

export default MiddleTermTest;