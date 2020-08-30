import React, { Component } from "react";
import http from "./services/httpService";
import Card from "./components/common/Card";

const apiEndpoint = "https://restcountries.eu/rest/v2/all";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { countries: []}
    }

    async componentDidMount() {
        const countries = await http.get(apiEndpoint);
        console.log(countries);
        this.setState({ countries });
    }

    render() {
        return (
            <div>
                {this.state.countries.map((country) => (
                    <Card key={country.name} country={country} />
                ))}
            </div>
        );
    }
}

export default App;
