import React from 'react'
import {getAll,update} from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import Display from './display';
import Search from './search';
class BooksApp extends React.Component {
  state={
    books:[]
}
  changeState=(b,val)=>{
    update(b,val).then(undefined,(e)=>console.log(e));
    getAll().then((res)=>this.setState({books:res}),(e)=>console.log(e));
    
  }
 componentWillMount(){
  getAll().then((res)=>this.setState({books:res}),(e)=>console.log(e));
 }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <Display books={this.state.books} changeState={this.changeState}/>
        ) }/>
        <Route path="/search" render={()=>(
        <Search changeState={this.changeState}/>)}/>
      </div>
    )
  }
}

export default BooksApp;
