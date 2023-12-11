import { Component } from "react";
import SearchBar from "./Searchbar";
import ImageGallery from "./ImageGallery";

class App extends Component {
  constructor(props) {
    super (props);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleSearch(query) {
    
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        <ImageGallery/>
     </div>
    )
  }
}


export default App;