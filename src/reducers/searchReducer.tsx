interface DataItem {
    id: number;
    name: string;

}
type DocumentItem = {
    id: string;
}

interface SearchDataState {
    data: DataItem[] | null;
    documentData: DocumentItem[] | null;
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
interface FetchDocumentsSuccessAction {
    type: 'FETCH_DOCUMENTS_SUCCESS';
    payload: DocumentItem[];
}

interface FetchDocumentsFailAction {
    type: 'FETCH_DOCUMENTS_FAIL';
    payload: string;
}


export type SearchActionTypes = FetchDataSuccessAction | FetchDataFailAction | FetchDocumentsSuccessAction | FetchDocumentsFailAction;

const initialState: SearchDataState = {
    data: null,
    documentData: null,
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
            };
        case "FETCH_DOCUMENTS_SUCCESS":
            return {
                ...state,
                documentData: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_DOCUMENTS_FAIL":
            return {
                ...state,
                documentData: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default searchDataReducer;
export { SearchDataState };
