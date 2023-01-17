import React from "react";
import "./Body.css";

export default class Body extends React.Component {
    render() {
        return(
            <div className="Body">
                <div className="Body-row">
                    <button>AC</button>
                    <button>AC</button>
                    <button>%</button>
                    <button>AC</button>
                </div>
                <div className="Body-row">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>x</button>
                </div>
                <div className="Body-row">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                </div>
                <div className="Body-row">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                </div>
                <div className="Body-row">
                    <button>R</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
        );
    }
}