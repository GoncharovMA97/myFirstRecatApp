import "./app-info.css";

const AppInfo = ({data}) => {
    const sum = data.length;
    const inc = data.filter(item => item.increase === true).length;
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {sum}</h2>
            <h2>Премию получат: {inc}</h2>
        </div>
    );
}

export default AppInfo;