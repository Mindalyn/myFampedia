import React, { Component } from 'react';
import Sort from './Sort';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the
  filtered produce list, but this component can be used for other types of items
  as long as it has a name.
*/
class List extends Component {

    renderList() {
        /*
           Javascript map will let you iterate and modify each item in a list.
           In this example, we are changing each item
           (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
        */
        if (this.props.sort === "sorted") {
          return <Sort items={this.props.items} />
            }

            else if (this.props.sort === "unsorted") {
              const items = this.props.items.map(item => {

                return <div className="item" key={item.name}>
                  <img src={item.image} style={{paddingTop: 30, paddingBottom: 10}}></img>
                  <li key={item.name} style={{paddingBottom: 5, listStyle: 'none', fontWeight: 'bold'}}>{item.name}</li>
                  <li key={item.generation} style={{paddingBottom: 5, listStyle: 'none', fontSize: 12}}>{item.generation}</li>
                  <li key={item.family} style={{listStyle: 'none', fontSize: 12}}>{item.family}</li>
                </div>
              });

              return items;
            }
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;