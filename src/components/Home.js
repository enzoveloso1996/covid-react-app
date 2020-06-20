import React from 'react'




//styles
import local from '../assets/ph.png'


//components

export default class Home extends React.Component {
    render () {

        const toGlobal = (event) => {
            this.props.history.push('/global');
        };
        
        return (
            <div className="home">
                <section className="top-container">
                    <img className="category-image" src={local} alt="globe" height={35} width={54} />
                    <span className="category-text">PHILIPPINES</span>
                    <div className="switch-toggle">
                        <input type="radio" name="switch-toggle"  id="local" checked />
                        <label htmlFor="local">Local</label>
                        <input type="radio" name="switch-toggle" onChange={toGlobal} id="global" />
                        <label htmlFor="global">Global</label>
                    </div>
                </section>
            </div>
        )
    }
}
