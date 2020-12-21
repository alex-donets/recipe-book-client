import { all } from 'redux-saga/effects';
import { authSaga } from '../../modules/auth/saga';
import { categoriesSaga } from '../../modules/categories/saga';
import { recipesSaga } from '../../modules/recipes/saga';

export default function* rootSaga() {
    yield all([authSaga(), categoriesSaga(), recipesSaga()]);
}
