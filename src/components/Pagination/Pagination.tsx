import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Button } from '../Button/Button';
import { BUTTON } from '../../types/button';

interface IPagination {
  total: number;
  itemsPerPage: number;
  currentPage?: number;
  customStyle?: Object;
  customClass?: String;
  handleClick: (number: number) => void;
}

export const Pagination: FunctionComponent<IPagination> = ({
  currentPage,
  itemsPerPage,
  total,
  customStyle = {},
  customClass = '',
  handleClick,
}) => {
  const [activePage, setActivePage] = useState(currentPage || 1);
  const pageCount = useMemo(() => {
    return Math.ceil(total / itemsPerPage);
  }, [total, itemsPerPage]);

  useEffect(() => {
    currentPage && setActivePage(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pages = useMemo(() => {
    const paginationNumbers = Array.from(
      new Array(pageCount | 0),
      (_, k) => k + 1
    );
    const lastPage: number = paginationNumbers.length;
    const firstPage: number = 1;

    if (pageCount < 7) {
      return [...paginationNumbers.slice(0, 6)];
    }
    if (activePage < 4) {
      return [...paginationNumbers.slice(0, 5), lastPage];
    }
    if (pageCount - activePage < 3) {
      return [firstPage, ...paginationNumbers.slice(-5)];
    }
    if (activePage >= 4) {
      return [
        firstPage,
        ...paginationNumbers.slice(activePage - 2, activePage + 1),
        lastPage,
      ];
    }
    if (activePage === pageCount) {
      return [firstPage, ...paginationNumbers.slice(-5)];
    }

    return paginationNumbers.slice(activePage - 3, activePage + 2);
  }, [activePage, pageCount]);

  const handlePaginationClick = (number: number) => {
    handleClick(number);
    setActivePage(number);
  };

  const paginationClass = clsx(['pagination', customClass]);

  const paginationButtonClass = (number: Number) =>
    clsx([activePage === number && 'pagination__active']);

  const paginationButtons = pages.map((number, index) => {
    return (
      <div className='pagination__item' key={index}>
        <Button
          circle
          variant={BUTTON.VARIANT.OUTLINE}
          color={BUTTON.COLOR.PRIMARY}
          customClass={`pagination__number ${paginationButtonClass(number)}`}
          onClick={() => handlePaginationClick(number)}
        >
          {number}
        </Button>
      </div>
    );
  });

  const showPagination = pageCount > 1 && (
    <ul className={paginationClass} style={customStyle}>
      {paginationButtons}
    </ul>
  );

  return <>{showPagination}</>;
};
