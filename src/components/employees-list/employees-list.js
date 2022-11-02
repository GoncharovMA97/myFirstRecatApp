import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onDelete, onChangeToggle}) => {
    const elements = data.map( item => {
        const {id, ...otherItems} = item;
        return(
            <EmployeesListItem 
                key={id} 
                {...otherItems}
                onDelete={() => onDelete(id)}
                onChangeToggle={(e) => onChangeToggle(id, e.currentTarget.getAttribute("data-toggle"))}/>
        );
    });
    return(
        <ul className="app-list list group">
            {elements}
        </ul>
    );
}

export default EmployeesList;

