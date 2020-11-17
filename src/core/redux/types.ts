import { CategoryState } from "../../modules/categories/types";
import { AppState } from "../../modules/app/types";
import { AuthState } from "../../modules/auth/types";
import { History } from 'history';

export interface RootReducerTypes {
    app: AppState,
    auth: AuthState,
    categories: CategoryState,
    router: (history: History) => void;
}
