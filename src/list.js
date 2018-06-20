import React,{Component} from 'react';
import './App.css';
import {get} from './BooksAPI';
 const opts=[{"''":"Please Select"},{"currentlyReading":"Currently Reading"},{"wantToRead":"Want To Read"},{"read":"Read"},{"none":"None"}];
 class List extends Component{
     state={shelf:''}
     componentWillMount(){
        get(this.props.book.id).then((res)=>this.setState({shelf:res.shelf}));
     }
render(){
    return(<li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select className='browser-default'
                onChange={(event)=>{this.props.changeState(this.props.book,event.target.value)
                
                }}>
                  {
                   opts.map(opt=>{if(Object.keys(opt)[0]===this.state.shelf)
                  return <option value={Object.keys(opt)[0]} >&#10004;{Object.values(opt)[0]}</option>
                else { return <option value={Object.keys(opt)[0]} >{Object.values(opt)[0]}</option> }}
                     )}
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>);
        }}
export default List;