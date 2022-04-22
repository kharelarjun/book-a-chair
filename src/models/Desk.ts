import {Chair} from "./Chair";

export interface Desk {
    id: string | number,
    x: number,
    y: number,
    chairs: Chair[]


}