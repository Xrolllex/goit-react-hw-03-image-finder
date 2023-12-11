import { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp (e) {
        if (e.code === "Enter") {
            this.props.handleSearch(e.target.value)
        }
    }

    render() {
        return <div>
            <input className={CSS.query} placeholder="Search images and photos" onKeyUp={this.handleKeyUp} />
        </div>
        
    }
}


SearchBar.propTypes ={
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar