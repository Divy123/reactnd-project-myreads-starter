import React from 'react'
import {Route} from 'react-router-dom';
import {getAll,update} from './BooksAPI'
import Display from './display';
import Search from './search';
import './App.css'

class BooksApp extends React.Component {
  state={
    books:[]
}
  changeState=(book,shelf)=>{
      update(book, shelf).then(() => {
      book.shelf = shelf        
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))     
})
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
        <Search books={this.state.books} changeState={this.changeState}/>)}/>
      </div>
    )
  }
}

export default BooksApp;
