import React from 'react'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2';
import  CountUp  from 'react-countup';

//styles
import '../styles/Cards.css';
import '../styles/Charts.css';
import '../styles/Home.css'
import '../styles/Toggle.css'
import local from '../assets/ph.png'

export default class Global extends React.Component {
    state = {
        loading: true,
        local: null,
        count: 0,
        labels: ['Deaths','Recoveries','Active Cases','Confirmed Cases'],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };

    async componentDidMount () {

        axios.get('https://disease.sh/v2/countries/')
            .then(res => {
                const ph = res.data.filter(function (data) {
                    return data.country === 'Philippines';
                });

                this.setState({ 
                        local: ph[0],
                        loading: false,
                        datasets: [{ 
                            data: [ ph[0].deaths, ph[0].recovered, ph[0].active, ph[0].cases ], 
                            backgroundColor: ['#74F6FC','#64D3D9','#50A9AD','#459296']
                        }]
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {

        if (this.state.loading) {
            return <div class="loader"></div>;
        }

        const toGlobal = (event) => {
            this.props.history.push('/global');
        };

        return (
            <div className="home">
                <section className="top-container">
                    <img className="category-image" src={local} alt="globe" height={35} width={54} />
                    <span className="category-text">PHILIPPINES</span>
                    <div className="switch-toggle">
                        <input type="radio" name="switch-toggle"  id="local" checked/>
                        <label htmlFor="local">Local</label>
                        <input type="radio" name="switch-toggle" onChange={toGlobal} id="global" />
                        <label htmlFor="global">Global</label>
                    </div>
                </section>
                <section className="cards">
                    <div className="wrapper">
                        <span>TOTAL CONFIRMED CASES</span>
                        <span>
                            <CountUp
                                start={this.state.count} 
                                end={this.state.local.cases} 
                                duration={.6}
                                separator=","
                                decimal=","
                            />
                        </span>
                    </div>
                    <div className="wrapper">
                        <span>TOTAL ACTIVE CASES</span>
                        <span>
                            <CountUp
                                start={this.state.count} 
                                end={this.state.local.active} 
                                duration={1}
                                separator=","
                                decimal=","
                            />    
                        </span>
                    </div>
                    <div className="wrapper">
                        <span>TOTAL DEATHS</span>
                        <span>
                            <CountUp
                                start={this.state.count} 
                                end={this.state.local.deaths} 
                                duration={.6}
                                separator=","
                                decimal=","
                            />
                        </span>
                    </div>
                    <div className="wrapper">
                        <span>TOTAL RECOVERIES</span>
                        <span>
                            <CountUp
                                start={this.state.count} 
                                end={this.state.local.recovered} 
                                duration={.6}
                                separator=","
                                decimal=","
                            />
                        </span>
                    </div>
                </section>
                <section className="charts">
                    <div className="wrapper-chart">
                        <Doughnut 
                            data={{
                                labels: this.state.labels,
                                datasets: this.state.datasets,
                            }}
                            height={130}
                            options={{ borderWidth: 0 }}
                        />
                    </div>
                    <div className="wrapper-info">
                        <h4>OTHER INFORMATION</h4>
                        <div className="row-1">
                            <div>
                                <span>Cases per one million:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.casesPerOneMillion} 
                                        duration={.6}
                                        separator="."
                                        decimal="."
                                    />
                                </span>
                            </div>
                            <div>
                                <span>Deaths per one million:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.deathsPerOneMillion} 
                                        duration={.6}
                                        separator="."
                                        decimal="."
                                    />
                                </span>
                            </div>
                            <div>
                                <span>Recovered per one million:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.recoveredPerOneMillion} 
                                        duration={.6}
                                        separator="."
                                        decimal="."
                                    />
                                </span>
                            </div>
                            <div>
                                <span>Active cases per one million:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.activePerOneMillion} 
                                        duration={.6}
                                        separator="."
                                        decimal="."
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="row-2">
                            <div>
                                <span>Population:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.population} 
                                        duration={.6}
                                        separator=","
                                        decimal="."
                                    />
                                </span>
                            </div>
                            <div>
                                <span>Total tests:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.tests} 
                                        duration={.6}
                                        separator=","
                                        decimal=","
                                    />
                                </span>
                            </div>
                            <div>
                                <span>Tests per one million:</span>
                                <span>
                                    <CountUp
                                        start={this.state.count} 
                                        end={this.state.local.testsPerOneMillion} 
                                        duration={.6}
                                        separator=","
                                        decimal=","
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

