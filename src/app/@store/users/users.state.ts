import { UserDetails } from "../../@api/user/user.model"

export interface UsersState {
    users: UserDetails[],
    loading: boolean,
    loaded: boolean,
    error: any
}

export const initUsersState: UsersState = {
    users: [],
    loading: false,
    loaded: false,
    error: null
}
