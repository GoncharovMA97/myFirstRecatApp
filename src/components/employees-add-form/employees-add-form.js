import './employees-add-form.css';
import { Component  } from 'react';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onFormChange = (e) => {
        this.setState(state => ({
            [e.target.name]: e.target.value
        }));
    }

    onAddForm = (e) => {
        e.preventDefault();
        if (String(this.state.salary).length > 1 && this.state.name.length > 1) {
            this.props.addOn(this.state);
            this.setState({
            name: '',
            salary: ''
        });
        }
    }

    render () {
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onAddForm}>
                    <input type="text"
                        className="form-control new-post-label"
                        name='name'
                        value={name}
                        onInput={this.onFormChange}
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        name='salary'
                        value={salary}
                        onInput={this.onFormChange}
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;