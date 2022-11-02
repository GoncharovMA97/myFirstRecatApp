

import "./employees-list-item.css";


const EmployeesListItem = (props) => {
    const {name, salary, increase, like, onDelete, onChangeToggle} = props;

    let addToLi = 'list-group-item d-flex justify-content-between';

    if (increase) {
        addToLi += ' increase';
    };

    if (like) {
        addToLi += ' like';
    };

    return(
        <li className={addToLi}>
            <span className="list-group-item-label"
                onClick={onChangeToggle}
                data-toggle='like'>
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className="d-flex justify-content-center align-item-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onChangeToggle}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"/>
                </button>
                <i className="fas fa-star"/>
            </div>
        </li>
    );
}

export default EmployeesListItem;