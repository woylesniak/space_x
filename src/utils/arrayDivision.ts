import {CARDS_PER_PAGE} from './constants';

export const arrayDivision = (elements: any[], activePage: number) => {
    const INDEX = (activePage - 1) * CARDS_PER_PAGE;
    return elements.slice(INDEX, INDEX + CARDS_PER_PAGE);
}