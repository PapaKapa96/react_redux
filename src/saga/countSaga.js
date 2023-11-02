import { put, takeEvery } from "redux-saga/effects"
import { ACYNC_GET_CASH, addCashAction, ASYNC_ADD_CASH,  getCashAction } from "../store/cashReducer"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(addCashAction())
}

function* decrementWorker() {
  yield delay(1000)
  yield put(getCashAction())
}


export function* countWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
  yield takeEvery(ACYNC_GET_CASH, decrementWorker)

}