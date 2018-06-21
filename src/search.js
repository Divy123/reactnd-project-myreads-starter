import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {search} from './BooksAPI';
import List from './list';


class Search extends React.Component{
   state={
           value:'',
           collection:[],
           error:null
        }
        dis=()=>{
            search(this.state.value).then((res)=>
          {
            if(res.error===undefined)
            {
              this.setState({collection:res})
            }
          })
          .catch(e=>{});
        }
    addInput=(event)=>{
      this.setState({value:event.target.value,collection:[]})
      this.dis()
  };
  componentWillMount(){
    this.dis();
  }
    render(){
      
       
       return ( <div className="search-books">
       <div className="search-books-bar">
         <Link key={this.state.value} className="close-search" to="/" >Close</Link>
         <div className="search-books-input-wrapper">
           <input type="text" value={this.state.value} onChange={(event)=>{this.addInput(event)}}  placeholder="Search by title or author"/>
         </div>
       </div>
    {(this.state.value==='')?
      '':(<div className="search-books-results">
         <ol className="books-grid">
         {
           this.state.collection.map(item=>{return(
            <List book={item} key={item.id} books={this.props.books} changeState={this.props.changeState} />
          )}) 
         } 
         </ol>
       </div>)}
     </div>);
    
    }
}
export default Search;