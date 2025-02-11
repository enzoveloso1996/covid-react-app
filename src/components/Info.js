import React, { useEffect } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Badge } from 'react-bootstrap';
import Aos from 'aos';


//styles
import '../styles/Info.css';
import "aos/dist/aos.css";

//components
import Myths from './Myths';

const Info = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="info">

            <span className="header">Coronavirus disease <br /> (COVID-19)</span>
            <Badge pill variant="info">Source: World Health Organization</Badge>
            <section className="covid-info">
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.<br /><br />
                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness <br />
                and recover without requiring special treatment.  Older people, and those with underlying medical<br />
                problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely<br />
                to develop serious illness.<br /><br />
                The best way to prevent and slow down transmission is be well informed about the COVID-19 virus,<br />
                the disease it causes and how it spreads. Protect yourself and others from infection by washing your<br />
                hands or using an alcohol based rub frequently and not touching your face.<br /><br /> 
                The COVID-19 virus spreads primarily through droplets of saliva or discharge from the<br /> 
                nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory<br />
                etiquette (for example, by coughing into a flexed elbow).<br /><br />
                At this time, there are no specific vaccines or treatments for COVID-19. However, there are<br />
                many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated<br />
                information as soon as clinical findings become available.
                </p>
            </section>

            <span className="header">Myth busters</span>
            <Badge pill variant="info">Source: World Health Organization</Badge>
            <Myths data-aos="fade-right" data-aos-duration="4000"/>

            <span className="header">Latest news</span>
            <section className="latest" data-aos="fade-right" data-aos-duration="4000" data-aos-offset="200">
                <div classNam="t-1">
                    <TwitterTimelineEmbed 
                        sourceType="profile"
                        screenName="DOHgovph"
                        options={{height: 500, width: 300}}
                    />
                </div>
                <div classNam="t-2">
                    <TwitterTimelineEmbed 
                        sourceType="profile"
                        screenName="WHOPhilippines"
                        options={{height: 500, width: 300}}
                    />
                </div>
                <div classNam="t-3">
                    <TwitterTimelineEmbed 
                        sourceType="profile"
                        screenName="covid19_ph"
                        options={{height: 500, width: 300}}
                    />
                </div>
            </section>
        </div>
        
    )
}

export default Info
