import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John D.', salary: 900, increase: false, like: false, id: 0},
                {name: 'Boris M.', salary: 1200, increase: false, like: false, id: 1},
                {name: 'Bob G.', salary: 2500, increase: false, like: false, id: 2}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteitem = (id) => {
        this.setState(({data}) => ({data: data.filter(item => item.id !== id)}))
    }

    addItem = (obj) => {
        this.setState(({data}) => {
            obj.id = this.state.data.length;
            return {data: data.concat(obj)}
        });
    }

    onChangeToggle = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return({...item, [prop]: !item[prop]})
                }
                return item;
            })
        }))
    }

    searchFilter = (item, term) => {
        if (term.length === 0) {
            return item
        }

        return item.filter( element => {
            return element.name.indexOf(term) > -1
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
    
    dataFilter = (item, filter) => {
        switch(filter) {
            case 'incEmp':
                return item.filter( element => element.like);
            case 'highSalary':
                return item.filter( element => element.salary >= 1000);
            default:
                return item;
        };
    }

    onSetFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const filtered = this.dataFilter(this.searchFilter(data, term), filter);
        return(
            <div className="app">
                <AppInfo
                    data={this.state.data}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter= {filter} onSetFilter={this.onSetFilter}/>
                </div>
                <EmployeesList 
                    data={filtered}
                    onDelete={this.deleteitem}
                    onChangeToggle={this.onChangeToggle}/>
                <EmployeesAddForm
                    addOn={this.addItem}/>
            </div>
    )}
}

export default App;