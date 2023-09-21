interface DataItem {
    id: number;
    name: string;

}

interface SearchDataState {
    data: DataItem[] | null;
    loading: boolean;
    error: null | string;
}

interface FetchDataSuccessAction {
    type: 'FETCH_DATA_SUCCESS';
    payload: DataItem[];
}

interface FetchDataFailAction {
    type: 'FETCH_DATA_FAIL';
    payload: string;
}

type SearchActionTypes = FetchDataSuccessAction | FetchDataFailAction;

const initialState: SearchDataState = {
    data: null,
    loading: false,
    error: null,
};

export const searchDataReducer = (state: SearchDataState = initialState, action: SearchActionTypes): SearchDataState => {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_DATA_FAIL":
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default searchDataReducer;
export { SearchDataState };
