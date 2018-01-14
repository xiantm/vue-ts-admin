export interface UserState {
    token: string | undefined
}

export interface State {
    user: UserState
    windowInnerHeight: string
}
