import React from 'react';
import isPalindrome from './utils/PalindromeCheck';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      enterString: [],
      message: "",
      color: ""
    }
  }
  onSubmitHandle = () => {
    isPalindrome(this.state.enterString) ? this.setState({message : "This is Palindrome", color:"text-green" }) : this.setState({message : "This is not Palindrome", color:"text-red"})
  }

  onChangeHandle = (e) => {
    this.setState({
      enterString:e.target.value
    })
  }
  
  render(){
    return(
      <div>
        <input type="text" className="enterName" onChange={this.onChangeHandle}/>
        <button onClick={this.onSubmitHandle}>Check</button>
    <h1 className={this.state.color}>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;