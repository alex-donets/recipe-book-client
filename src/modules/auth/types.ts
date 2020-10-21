export interface Action {
    payload: string;
}

export interface HandleLogin extends Action {
    ( action: Action ): void;
}

