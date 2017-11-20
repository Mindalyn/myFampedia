import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Sort extends Component {
    sortList() {
        var sorted = this.props.items;
        sorted.sort( (a, b) => {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
              return -1;
          }
          if (nameA > nameB) {
              return 1;
          }
          return 0;
        });

        sorted = sorted.map(item =>{
          return <div className="item" key={item.name}>
              <img src={item.image} style={{paddingTop: 30, paddingBottom: 10}}></img>
              <li key={item.name} style={{paddingBottom: 5, listStyle: 'none', fontWeight: 'bold'}}>{item.name}</li>
              <li key={item.generation} style={{paddingBottom: 5, listStyle: 'none', fontSize: 12}}>{item.generation}</li>
              <li key={item.family} style={{listStyle: 'none', fontSize: 12}}>{item.family}</li>
            </div>
        });

        return sorted;

        }


    render() {
        return (
            <ul>
                {this.sortList()}
            </ul>
        );
    }
}
export default Sort;