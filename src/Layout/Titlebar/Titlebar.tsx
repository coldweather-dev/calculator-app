import React from "react";
import "./Titlebar.css";

export default class Titlebar extends React.Component {
    render() {
        return(
            <div className="Titlebar">

                {/* App Title */}
                <div className="App-title">
                    Calculator
                </div>

                {/* Window Controls */}
                <div className="Window-controls">
                    <button className="Minimize"></button>
                    <button className="Close"></button>
                </div>
            </div>
        );
    }
}