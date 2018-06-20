import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {search,update} from './BooksAPI';
import List from './list';


class Search extends React.Component{
   state={
           value:'',
           collection:[]
        }
        dis=()=>{
          search(this.state.value).then((res)=>{this.setState({collection:res});console.log(this.state.collection);},(e)=>console.log(e));
          
        }
    addInput=(event)=>{
      this.setState({value:event.target.value,collection:[]})
  };
    
    render(){
       return ( <div className="search-books">
       <div className="search-books-bar">
         <Link className="close-search" to="/" >Close</Link>
         <div className="search-books-input-wrapper">
           <input type="text" value={this.state.value} onChange={(event)=>{this.addInput(event)}} onKeyPress={(event)=>{if(event.key==="Enter")this.dis();}} placeholder="Search by title or author"/>
         </div>
       </div>
       {(this.state.collection===[])?'':(<div className="search-books-results">
         <ol className="books-grid">
         {
           this.state.collection.map(item=>{return(
            <List book={item} changeState={this.props.changeState} />
          )}) 
         } 
         </ol>
       </div>)}
     </div>);
    }
}
export default Search;