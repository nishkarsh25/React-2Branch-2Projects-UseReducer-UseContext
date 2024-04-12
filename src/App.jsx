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

