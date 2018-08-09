import React, {Component} from 'react';
import DogDetail from '../components/dogdetail';
import Search from '../components/search';
import DogList from '../components/doglist';

class DogContainer extends Component {
  render() {
    return (
      <div>
        <DogDetail />
        <Search />
        <DogList />
      </div>
    )
  }
}
export default DogContainer;
