import React, { Component } from "react";
import { Greeting } from './functional'

export default class PeekaBooGreet extends Component {
    constructor (props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "PeekaBoo",
            isOpen: true
        }
    }
    
    toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false })
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true })
        }
    };
    
    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry title={journalEntry.title}
                    content={journalEntry.content}
                    />
                </div>
            )
        })

        return (
            <div>
                <h2>{this.props.heading}</h2>
                {journalEntries}

                <button onClick={this.toggleStatus}> Toggle On/Off
                </button>
            </div>
        );
    }
}