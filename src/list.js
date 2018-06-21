import React,{Component} from 'react';
import './App.css';
 const opts=[{"''":"Please Select"},{"currentlyReading":"Currently Reading"},{"wantToRead":"Want To Read"},{"read":"Read"},{"none":"None"}];
 class List extends Component{
     state={shelf:"none"}
     componentWillMount(){
       this.assignshelf()
    }
      assignshelf(){
        let book=this.props.book;
        this.props.books.map(item=>{
          if(book.id===item.id)
          { console.log(item.shelf)
            this.setState({shelf:item.shelf})
          }
        })
        
      }
      changeShelf=(event)=>{this.props.changeState(this.props.book,event.target.value)
      }
     
        
render(){
    return(<li key={this.props.book.title}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select className='browser-default' 
                onChange={(event)=>{this.changeShelf(event)
                }}>
                  {
                   opts.map(opt=>{if(Object.keys(opt)[0]===this.state.shelf)
                  return <option  value={Object.keys(opt)[0]} >&#10004;{Object.values(opt)[0]}</option>
                else { return <option key={this.props.book.subtitle} value={Object.keys(opt)[0]} >{Object.values(opt)[0]}</option> }}
                     )}
              </select>
            </div>
          </div>
          <div key={this.props.book.title} className="book-title">{this.props.book.title}</div>
          <div key={this.props.book.author} className="book-authors">{this.props.book.author}</div>
        </div>
      </li>);
        }}
export default List;