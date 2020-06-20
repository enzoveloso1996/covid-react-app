import React from 'react'
import axios from 'axios'
import { Doughnut } from 'react-chartjs-2';
import  CountUp  from 'react-countup';

//styles
import '../styles/Cards.css';
import '../styles/Charts.css';
import '../styles/Home.css'
import '../styles/Toggle.css'
import global from '../assets/global.png'

export default class Global extends React.Component {
    state = {
        loading: true,
        global: null,
        count: 0,
        labels: ['Deaths','Recoveries','Active Cases','Confirmed Cases'],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };

    async componentDidMount () {

        axios.get('https://disease.sh/v2/all')
            .then(res => {
                this.setState({ 
                    global: res.data,
                    loading: false,
                    datasets: [{ 
                        data: [ res.data.deaths, res.data.recovered, res.data.active, res.data.cases ], 
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
        
        const toLocal = (event) => {
            this.props.history.push('/');
        };

        return (
            <div className="home">
                <section className="top-container">
                    <img className="category-image" src={global} alt="globe" height={54} width={54} />
                    <span className="category-text">GLOBAL</span>
                    <div className="switch-toggle">
                        <input type="radio" name="switch-toggle" onChange={toLocal} id="local" />
                        <label htmlFor="local">Local</label>
                        <input type="radio" name="switch-toggle" id="global" checked/>
                        <label htmlFor="global">Global</label>
                    </div>
                </section>
                <section className="cards">
                    <div className="wrapper">
                        <span>TOTAL CONFIRMED CASES</span>
                        <span>
                            <CountUp
                                start={this.state.count} 
                                end={this.state.global.cases} 
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
                                end={this.state.global.active} 
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
                                end={this.state.global.deaths} 
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
                                end={this.state.global.recovered} 
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
                                        end={this.state.global.casesPerOneMillion} 
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
                                        end={this.state.global.deathsPerOneMillion} 
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
                                        end={this.state.global.recoveredPerOneMillion} 
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
                                        end={this.state.global.activePerOneMillion} 
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
                                        end={this.state.global.population} 
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
                                        end={this.state.global.tests} 
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
                                        end={this.state.global.testsPerOneMillion} 
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

