export interface ShipProps {
    image: string;
    name: string;
}

class Ship {
    readonly image: string;
    readonly name: string;

    constructor(props: ShipProps) {
        this.image = props.image;
        this.name = props.name;
    }
}

export default Ship;