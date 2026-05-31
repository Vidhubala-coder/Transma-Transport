import React, { createContext, useReducer } from 'react';

export const LoadContext = createContext();

const initialState = {
  loads: [],
  selectedLoad: null,
  filters: {
    location: '',
    destination: '',
    minPayment: 0,
    maxPayment: 10000,
  },
  loading: false,
  error: null,
};

const loadReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADS':
      return {
        ...state,
        loads: action.payload,
        loading: false,
      };
    case 'SET_SELECTED_LOAD':
      return {
        ...state,
        selectedLoad: action.payload,
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'ADD_LOAD':
      return {
        ...state,
        loads: [action.payload, ...state.loads],
      };
    default:
      return state;
  }
};

export const LoadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loadReducer, initialState);

  const setLoads = (loads) => {
    dispatch({ type: 'SET_LOADS', payload: loads });
  };

  const setSelectedLoad = (load) => {
    dispatch({ type: 'SET_SELECTED_LOAD', payload: load });
  };

  const setFilters = (filters) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  return (
    <LoadContext.Provider
      value={{
        ...state,
        setLoads,
        setSelectedLoad,
        setFilters,
        setLoading,
        setError,
      }}
    >
      {children}
    </LoadContext.Provider>
  );
};