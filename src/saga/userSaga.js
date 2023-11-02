import { put, takeEvery, call } from "redux-saga/effects"
import { addManyCustomersAction, ASYNC_ADD_MANY_CUSTOMERS } from "../store/customerReducer"

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')


function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(addManyCustomersAction(json))
}

export function* userWatcher() {
  yield takeEvery(ASYNC_ADD_MANY_CUSTOMERS, fetchUserWorker)
}