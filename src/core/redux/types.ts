import { CategoryState } from "../../modules/categories/types";
import { AppState } from "../../modules/app/types";
import { AuthState } from "../../modules/auth/types";
import { History } from 'history';
import { RecipeState } from "../../modules/recipes/types";

export interface RootReducerTypes {
    app: AppState,
    auth: AuthState,
    categories: CategoryState,
    recipes: RecipeState,
    router: (history: History) => void;
}
