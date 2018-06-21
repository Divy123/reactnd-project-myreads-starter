import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import List from './list';


class Display extends Component{
 
  
   render(){
     
       return( <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         <div>
           <div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
                 {
                   this.props.books.map((book)=>{
                     if(book.shelf==="currentlyReading")return(
                   <List book={book} changeState={this.props.changeState} />
                  )})
                 }
               </ol>
             </div>
           </div>
           <div className="bookshelf">
             <h2 className="bookshelf-title">Want to Read</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
               {
                   this.props.books.map((book)=>{
                     if(book.shelf==="wantToRead")return(
                      <List book={book} changeState={this.props.changeState} />
                  )})
                 } 
               </ol>
             </div>
           </div>
           <div className="bookshelf">
             <h2 className="bookshelf-title">Read</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
               {
                   this.props.books.map((book)=>{
                     if(book.shelf==="read")return(
                      <List book={book} changeState={this.props.changeState}/>
                  )})
                 }
               </ol>
             </div>
           </div>
         </div>
       </div>
       <div className="open-search">
         <Link to="/search" >Add a book</Link>
       </div>
     </div>);
   }
}
export default Display;