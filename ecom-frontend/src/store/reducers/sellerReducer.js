const initialState = {
  sellers: null,
  pagination: {},
};

export const sellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SELLERS":
      return {
        ...state,
        sellers: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action.totalElements,
          totalPages: action.totalPages,
          lastPage: action.lastPage,
        },
      };
    default:
      return state;
  }
};