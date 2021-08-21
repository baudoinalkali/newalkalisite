import React, { Component } from "react";

class Calendly extends React.Component {
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js');
        head.appendChild(script);
    }

    componentWillUnmount() {
        // whatever you need to cleanup the widgets code
    }

    render() {
        return (
            <div>
                <div id="schedule_form">
                    <div
                        className="calendly-inline-widget"
                        data-url="https://meetings.hubspot.com/baudoin"
                        style={{ minWidth: '320px', height: '580px' }} />
                </div>
            </div>
        );
    }
};

export default Calendly;
