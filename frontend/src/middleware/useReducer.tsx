import actions from './actionConsts';

type State = {
    selectedMotherboardId: string
    selectedCpuId: string
    selectedCaseId: string
    selectedRamId: string
    selectedGraphicId: string,
    selectedPowerSupplierId: string,
    selectedStorageId: string,
}

export type Action = | {
    type: typeof actions.SELECT_MOTHERBOARD
    payload: string,
} | {
    type: typeof actions.SELECT_CPU
    payload: string
} | {
    type: typeof actions.SELECT_GRAPHIC
    payload: string
} | {
    type: typeof actions.SELECT_RAM
    payload: string
} | {
    type: typeof actions.SELECT_CASE
    payload: string
} | {
    type: typeof actions.SELECT_POWER_SUPPLIER
    payload: string
} | {
    type: typeof actions.SELECT_STORAGE,
    payload: string
}

export const initialState: State = {
    selectedMotherboardId: '',
    selectedCpuId: '',
    selectedCaseId: '',
    selectedRamId: '',
    selectedGraphicId: '',
    selectedPowerSupplierId: '',
    selectedStorageId: '',
};


export function reducer(state: State, action: Action):State {
    switch (action.type) {
        case actions.SELECT_MOTHERBOARD: {
            return {
                ...state,
                selectedMotherboardId: action.payload,
                selectedCpuId: '',
                selectedCaseId: '',
                selectedRamId: '',
                selectedGraphicId: '',
                selectedPowerSupplierId: '',
                selectedStorageId: '',
            }
        }
        case actions.SELECT_CPU: {
            return {
                ...state,
                selectedCpuId: action.payload,
            }
        }
        case actions.SELECT_CASE: {
            return {
                ...state,
                selectedCaseId: action.payload,
            }
        }

        case actions.SELECT_RAM: {
            return {
                ...state,
                selectedRamId: action.payload,
            }
        }

        case actions.SELECT_GRAPHIC: {
            return {
                ...state,
                selectedGraphicId: action.payload,
            }
        }

        case actions.SELECT_POWER_SUPPLIER: {
            return {
                ...state,
                selectedPowerSupplierId: action.payload,
            }
        }

        case actions.SELECT_STORAGE: {
            return {
                ...state,
                selectedStorageId: action.payload,
            }
        }

        default:
            return state;
    }
  
}


