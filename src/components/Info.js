import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

//styles
import '../styles/Info.css';

const Info = () => {
    return (
        <div className="info">
            <span>Latest news</span>
            <section className="latest">
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
