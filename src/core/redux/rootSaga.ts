import { all } from "redux-saga/effects";
import { authSaga } from "../../modules/auth/saga";
import { categoriesSaga } from "../../modules/categories/saga";

export default function* rootSaga() {
    yield all([
        authSaga(),
        categoriesSaga(),
    ]);
}
