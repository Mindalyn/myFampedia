import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

const myFamily = [
  {name: "Dorothy Ng", generation: "Grandparent", family: "Ng's of Burrows", image: require('./photos/Dorothy1.png')},
  {name: "Harry Ng", generation: "Grandparent", family: "Ng's of Burrows", image: require('./photos/Harry.png')},
  {name: "Henry Ng", generation: "Parent", family: "Ng's of San Diego", image: require('./photos/Henry.png')},
  {name: "Mari Ng", generation: "Parent", family: "Ng's of San Diego", image: require('./photos/Mari.png')},
  {name: "Victor Ng", generation: "Parent", family: "Ng's of Berkeley", image: require('./photos/Victor.png')},
  {name: "Katherine Lee", generation: "Parent", family: "Ng's of Berkeley", image: require('./photos/Katherine.png')},
  {name: "Bonnie Lee", generation: "Parent", family: "Lee's of Malaysia", image: require('./photos/Bonnie.png')},
  {name: "James Lee", generation: "Parent", family: "Lee's of Malaysia", image: require('./photos/James.png')},
  {name: "Tim Ng", generation: "Parent", family: "Ng's of Concord", image: require('./photos/Timmy.png')},
  {name: "Mary Lee", generation: "Parent", family: "Ng's of Concord", image: require('./photos/Mary.png')},
  {name: "Ronald Ng", generation: "Parent", family: "Ng's of Cambridge", image: require('./photos/Ron.png')},
  {name: "Fanny Wong", generation: "Parent", family: "Ng's of Cambridge", image: require('./photos/Fanny.png')},
  {name: "Christina Ng", generation: "Parent", family: "Pao's of Palo Alto", image: require('./photos/Christina.png')},
  {name: "Frank Pao", generation: "Parent", family: "Pao's of Palo Alto", image: require('./photos/Frank.png')},
  {name: "Michelle Lee", generation: "Child", family: "Lee's of Malaysia", image: require('./photos/Michelle.png')},
  {name: "Kelley Ng", generation: "Child", family: "Ng's of Concord", image: require('./photos/Kelley.png')},
  {name: "Michael Lee", generation: "Child", family: "Lee's of Malaysia", image: require('./photos/Mike.png')},
  {name: "Alan Ng", generation: "Child", family: "Ng's of San Diego", image: require('./photos/Alan.png')},
  {name: "Veronica Ng", generation: "Child", family: "Ng's of Berkeley", image: require('./photos/Veronica.png')},
  {name: "Kara Ng", generation: "Child", family: "Ng's of San Diego", image: require('./photos/Kara.png')},
  {name: "Matt Lee", generation: "Child", family: "Lee's of Malaysia", image: require('./photos/Matt.png')},
  {name: "Chris Ng", generation: "Child", family: "Ng's of Concord", image: require('./photos/Chris.png')},
  {name: "Keenan Ng", generation: "Child", family: "Ng's of Berkeley", image: require('./photos/Keenan.png')},
  {name: "Mindy Ng", generation: "Child", family: "Ng's of Berkeley", image: require('./photos/Mindy.png')},
  {name: "Nicolas Ng", generation: "Child", family: "Ng's of Cambridge", image: require('./photos/Nick.png')},
  {name: "Tami Ng", generation: "Child", family: "Ng's of San Diego", image: require('./photos/Tami.png')},
  {name: "Jasmine Pao", generation: "Child", family: "Pao's of Palo Alto", image: require('./photos/Jasmine.png')},
  {name: "Grace Ng", generation: "Child", family: "Ng's of Cambridge", image: require('./photos/Grace.png')},
  {name: "Justin Ng", generation: "Child", family: "Ng's of San Diego", image: require('./photos/Justin.png')},
];



class App extends Component {
    render() {
      return (
        <div className="App">
            <FilteredList items={myFamily} />
        </div>
      );
    }
}

export default App;
