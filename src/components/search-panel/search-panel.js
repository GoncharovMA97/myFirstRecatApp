import { Component } from "react";

import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onSearch = (e) => {
        this.setState({term: e.target.value});
        this.props.onUpdateSearch(e.target.value);
    }

    render() {
        return(
            <input
                type="text"
                className="form-control"
                placeholder="Найти сотрудника"
                onChange={this.onSearch}
                value={this.state.term}
            />
        );
    }
}

export default SearchPanel;