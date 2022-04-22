import {FC} from "react";
import {Desk} from "../models/Desk";


export const DeskComponent: FC<Desk> = (desk: Desk) => {

    let chairsOnEachSide = Math.round(desk.chairs.length / 2);
    const tableWidth = 50 * chairsOnEachSide;

    const styles = {
        desk: {
            width: tableWidth,
            height: 50,
            borderRadius: 5,
            backgroundColor: "red",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        chairsContainer: {
            display: "flex",
            flex: 1,
            justifyContent: "space-evenly",
            height: 44,
            width: tableWidth
        },
        chair: {
            width: 40,
            height: 40,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            margin: 2,
            backgroundColor: 'green'
        },
        mainContainer: {
            margin: 10,
            backgroundColor: 'whitesmoke'
        }

    }
   //TODO map/filter/reduce instead of slice
    return (
        <div style={styles.mainContainer}>
            <div style={styles.chairsContainer}>
                {desk.chairs.slice(0,chairsOnEachSide).map((chair, index) => <div style={styles.chair}><span>{index+1}</span></div>)}
            </div>
            <div style={styles.desk}>
                <span>Desk {desk.id}</span>
            </div>
            <div style={styles.chairsContainer}>
                {desk.chairs.slice(chairsOnEachSide).map((chair, index) => <div style={styles.chair}><span>{index+1}</span></div>)}
            </div>

        </div>
    )
}