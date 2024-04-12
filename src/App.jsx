import React, { useEffect, useReducer } from 'react';

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_TOTAL_ITEMS':
      return { ...state, totalItems: action.payload };
    default:
      return state;
  }
};

export default function TwentyThree() {
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: 0,
  });

  const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

  
}
