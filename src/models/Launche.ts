import Ship from './Ship';

export interface LauncheProps {
    id: number;
    launch_date_local: Date;
    mission_name: string;
    rocket: {
        rocket: {
            description: string;
        }
    };
    ships: Ship;
}

class Launche {
    readonly id: number;
    readonly launch_date_local: Date;
    readonly mission_name: string;
    readonly rocket: any;
    readonly ships: Ship[];

    constructor(props: LauncheProps) {
        this.id = props.id;
        this.launch_date_local = props.launch_date_local;
        this.mission_name = props.mission_name;
        this.rocket = props.rocket.rocket.description;
        this.ships = [props.ships];
    }
}

export default Launche;