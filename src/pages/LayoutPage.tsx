import {Desk} from "../models/Desk";
import {DeskComponent} from "../components/DeskComponent";
import React, {useEffect, useState} from "react";

export const LayoutPage = () => {
    let [desks, setDesks] = useState<Desk[]>([]);
    useEffect(() => {
        async function getDesks() {
            const response = await fetch(
                "http://localhost:8765/desks"
            );
            const json = await response.json();
            setDesks(json);
            console.log(json);
        }
    getDesks()
    }, [])
    return (
        <div >
            {desks.map((d, index) => <DeskComponent id={index+1} x={d.x} y={d.y} chairs={d.chairs}/>)}
        </div>
    );
}