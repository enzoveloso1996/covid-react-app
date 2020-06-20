import React from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

//styles
import '../styles/Countries.css'

export default class Countries extends React.Component {
    state = {
        loading: true,
        countries: [],
        search: ''
    };

    componentDidMount() {

        axios.get('https://disease.sh/v2/countries/')
            .then(res => {
                this.setState({ countries: res.data, loading: false });
            })
            .catch(err => {
                console.log(err);
            });

    }
    
    render() {
        let searchCountry = this.state.countries.filter(
            (country) => {
                return country.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        
        if (this.state.loading) {
            return <div class="loader"></div>;
        }

        return (
            <div className="countries">
                <div className="search-bar">
                    <input type="text" placeholder="Search" value={this.state.search} onChange={event => this.setState({ search: event.target.value })}/>
                </div>
                <div className="list">
                    {searchCountry.map(country => (
                        <Card key={country}>
                            <div className="country">
                                <span>{country.country}</span>
                                <img src={`https://www.countryflags.io/${country.countryInfo.iso2}/flat/48.png`} />
                            </div>
                            <div className="column-1">
                                <div className="cases">
                                    <span>Total cases:</span>
                                    <span>{country.cases.toLocaleString()}</span>
                                </div>
                                <div className="deaths">
                                    <span>Total deaths:</span>
                                    <span>{country.deaths.toLocaleString()}</span>
                                </div>
                                <div className="recoveries">
                                    <span>Total recoveries:</span>
                                    <span>{country.recovered.toLocaleString()}</span>
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="cperM">
                                    <span>Cases per million:</span>
                                    <span>{country.casesPerOneMillion.toLocaleString()}</span>
                                </div>
                                <div className="cperM">
                                    <span>Deaths per million:</span>
                                    <span>{country.deathsPerOneMillion.toLocaleString()}</span>
                                </div>
                                <div className="tests">
                                    <span>Recovered per million:</span>
                                    <span>{country.recoveredPerOneMillion.toLocaleString()}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

}