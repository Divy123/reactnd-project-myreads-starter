import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import List from './list';


class Display extends Component{
 
  
   render(){
     
       return( <div className="list-books" key={Math.random().toString(36).substr(-8)}> 
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
                   <List  key={book.id}  book={book} books={this.props.books} changeState={this.props.changeState} />
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
                      <List  key={book.id}  book={book} books={this.props.books} changeState={this.props.changeState} />
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
                      <List key={book.id} book={book} books={this.props.books} changeState={this.props.changeState}/>
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