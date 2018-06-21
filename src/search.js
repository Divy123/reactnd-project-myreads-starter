import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {search,update} from './BooksAPI';
import List from './list';


class Search extends React.Component{
   state={
           value:'',
           collection:[],
           error:null
        }
        dis=()=>{
       
            search(this.state.value).then((res)=>{this.setState({collection:res});console.log(res)}).catch(err=>this.setState({error:err}));
        }
    addInput=(event)=>{
      this.setState({value:event.target.value,collection:[]})
  };
    render(){
      
      if(this.state.collection.error!=='empty query')
       return ( <div className="search-books">
       <div className="search-books-bar">
         <Link className="close-search" to="/" >Close</Link>
         <div className="search-books-input-wrapper">
           <input type="text" value={this.state.value} onChange={(event)=>{this.addInput(event)}} onKeyPress={(event)=>{if(event.key==="Enter")this.dis();}} placeholder="Search by title or author"/>
         </div>
       </div>
    {(this.state.collection===[])?
      '':(<div className="search-books-results">
         <ol className="books-grid">
         {
           this.state.collection.map(item=>{return(
            <List book={item} changeState={this.props.changeState} />
          )}) 
         } 
         </ol>
       </div>)}
     </div>);
     else 
        return (<div><h1 >No results Found.</h1>
        <h2>Refresh to enter again.</h2></div>) ;
    }
}
export default Search;