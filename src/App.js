import "./styles.css"
import { Component } from "react";

import DisplayName from "./components/DisplayName/DisplayName.jsx"
// import AlertUser from "./components/AlertUser/AlertUser.jsx"
// import NamesList from "./components/NamesList/NamesList.jsx"
// import SuperHeroTable from "./components/SuperHeroTable/SuperHeroTable.jsx"

// 

class App extends Component {

    state = {
        firstName: prompt("Whats your first name ??"),
        lastName: prompt("Whats your Last name ??")
    }

    render(){
        return (
            <div className="App">
                <h1>React Components Worksheet</h1>
                <h2>Import relevant component and add seed data if needed</h2>
                <DisplayName
                firstName={this.state.firstName}
                lastName={this.state.lastName} />
            </div>
        );
    }
}

export default App;