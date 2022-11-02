import './app-filter.css';

const AppFilter = (props) => {
    const buttonsAtribbute = [
        {name: 'all', label:'Все сотрудники'},
        {name: 'incEmp', label:'На повышение'},
        {name: 'highSalary', label:'З/П больше 1000'}
    ];
    const buttons = buttonsAtribbute.map( element => {
        const active = props.filter === element.name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light"
        return (
            <button
                className={clazz}
                type="button"
                key={element.name}
                onClick={() => props.onSetFilter(element.name)}
            >
                {element.label}
            </button>
        )
    })
    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
    };

export default AppFilter;