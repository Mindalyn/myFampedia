import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {


    constructor(props) {
        super(props);

        // The state is just a list of key/value pair (like a hashmap)
        this.state = {
            search: "",
            generation: "All",
            family: "All",
            button1: "All",
            button2: "All",
            sort: "unsorted",
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
          this.setState({search: event.target.value.toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item

        var search = item.name.toLowerCase().search(this.state.search) !== -1;
        var familyState = this.state.family;
        var generationState = this.state.generation;
        var itemGeneration = item.generation
        var itemFamily = item.family;

        var family = false;
        var generation = false;

        //handles if either or both of filters are set to "all"
        if (generationState === "All") {
            if (familyState === "All") {
                return search;
            } else {
                generation = true;
                family = false;
            }
        } else if (familyState === "All") {
            family = true;
            generation = false;
        }

        // if satisfies generation and search, set generation boolean to true
        if ((itemGeneration.toLowerCase() === generationState.toLowerCase()) && search) {
            generation = true;
        }
        // if satisfies family and search, set family boolean to true
        if ((itemFamily.toLowerCase() === familyState.toLowerCase()) && search) {
            family = true;
        }
        // if satisfies both filters, include it
        if (family && generation) {
            return true;
        } else {
            return false;
        }

    }


    selectGeneration = (eventKey, event) => {
        this.setState({generation: eventKey})
        this.setState({button1: eventKey})
    }

    selectFamily = (eventKey, event) => {
        this.setState({family: eventKey})
        this.setState({button2: eventKey})
    }

    sortMembers = (eventKey, event) => {
        this.setState({sort: "sorted"})
    }

    restore = (eventKey, event) => {
        this.setState({sort: "unsorted"})
        this.setState({'family': "All"})
        this.setState({'generation': "All"})
        this.setState({'button1': "All"})
        this.setState({'button2': "All"})
    }


    render() {
        return (
            <div>
                <div className="top-bar">
                    <h1 style={{margin: 0, padding: 15, letterSpacing: 1}}>Fampedia</h1>
                    <div style={{padding: 7}}>

                        <input type="text" placeholder="Search" style={{margin: 10, fontFamily: 'Hiragino Sans GB',
                        letterSpacing: 1, textAlign: 'center', float: 'right'}} onChange={this.onSearch} />

                        <button id="restore" style={{margin: 6, padding: 6, borderRadius: 4,
                            backgroundColor: '#ededed', borderWidth: 1, borderStyle: 'solid',
                            fontFamily: 'Hiragino Sans GB', letterSpacing: 1, float:'right'}}
                            onClick={this.restore}>Restore All</button>

                        <button id="sortButton" style={{margin: 6, padding: 6, borderRadius: 4,
                          backgroundColor: '#ededed', borderWidth: 1, borderStyle: 'solid',
                          fontFamily: 'Hiragino Sans GB', letterSpacing: 1, float:'right'}}
                          onClick={this.sortMembers}>Sort Alphabetically</button>

                        <div style={{float:'right'}}> Select Generation:
                            <DropdownButton id="genDropdown" title={this.state.button1} onSelect={this.selectGeneration}
                                style={{margin: 6, fontFamily: 'Hiragino Sans GB'}}>
                              <MenuItem eventKey="All">All</MenuItem>
                              <MenuItem eventKey="Grandparent">Grandparent</MenuItem>
                              <MenuItem eventKey="Parent">Parent</MenuItem>
                              <MenuItem eventKey="Child">Child</MenuItem>
                            </DropdownButton>
                        </div>

                        <div style={{float:'right'}}> Select Family:
                            <DropdownButton id="familyDropdown" title={this.state.button2} onSelect={this.selectFamily}
                                style={{margin: 6, fontFamily: 'Hiragino Sans GB'}}>
                              <MenuItem eventKey="All">All</MenuItem>
                              <MenuItem eventKey="Ng's of Burrows">Ng's of Burrows</MenuItem>
                              <MenuItem eventKey="Ng's of San Diego">Ng's of San Diego</MenuItem>
                              <MenuItem eventKey="Ng's of Berkeley">Ng's of Berkeley</MenuItem>
                              <MenuItem eventKey="Lee's of Malaysia">Lee's of Malaysia</MenuItem>
                              <MenuItem eventKey="Ng's of Concord">Ng's of Concord</MenuItem>
                              <MenuItem eventKey="Ng's of Cambridge">Ng's of Cambridge</MenuItem>
                              <MenuItem eventKey="Pao's of Palo Alto">Pao's of Palo Alto</MenuItem>
                              <MenuItem eventKey="The Hall Family">The Hall Family</MenuItem>
                            </DropdownButton>
                        </div>

                    </div>
                </div>

                <div className="list-elements">
                    <List id="list" sort={this.state.sort} items={this.props.items.filter(this.filterItem)} />
                </div>
            </div>

        );
    }
}

export default FilteredList;