import {appName} from '../config'
import {OrderedMap, OrderedSet, Record, List} from 'immutable'
import {createSelector} from 'reselect'
import {fetchPhoneByIdApi, fetchPhonesApi, loadMorePhonesApi} from "../components/apps/EcommerceApp/api/index";
import * as R from "ramda";

/**
 * Constants
 * */


export const moduleName = 'phones'

const prefix = `${appName}/${moduleName}`

export const FETCH_PHONES_START = `${prefix}/FETCH_PHONES_START`
export const FETCH_PHONES_SUCCESS = `${prefix}/FETCH_PHONES_SUCCESS`
export const FETCH_PHONES_FAILD = `${prefix}/FETCH_PHONES_FAILD`


export const LOAD_MORE_PHONES_START = `${prefix}/LOAD_MORE_PHONES_START`
export const LOAD_MORE_PHONES_SUCCESS = `${prefix}/LOAD_MORE_PHONES_SUCCESS`
export const LOAD_MORE_PHONES_FAILD = `${prefix}/LOAD_MORE_PHONES_FAILD`


export const FETCH_PHONE_BY_ID_START = `${prefix}/FETCH_PHONE_BY_ID_START`
export const FETCH_PHONE_BY_ID_SUCCESS = `${prefix}/FETCH_PHONE_BY_ID_SUCCESS`
export const FETCH_PHONE_BY_ID_FAILD = `${prefix}/FETCH_PHONE_BY_ID_FAILD`

export const ADD_PHONE_TO_BASKET = `${prefix}/ADD_PHONE_TO_BASKET`

export const SEARCH_PHONE = `${prefix}/SEARCH_PHONE`



/**
 * Reducer
 * */
export const ReducerRecord = Record({
  loading: false,
  loaded: false,
  entities: [], // new OrderedMap({}),
  selected: new OrderedSet([]),
  phone: {},
  basket: [],
  search: ''
})

export const PhoneRecord = Record({
  id: null,
  categoryId: null,
  name: null,
  description: null,
  price: null,
  image: null,
  cpu: null,
  camera: null,
  size: null,
  weight: null,
  display: null,
  battery: null,
  memory: null,
})


// export function toImmutableEntities(values, DataRecord) {
//   return values
//       .reduce(
//           (acc, value) => {
//             const {id} = value;
//            return  acc.set(id, new DataRecord({ id, ...value }))},
//           new OrderedMap({})
//       )
// }


export default function reducer(state = new ReducerRecord({}), action) {
  const {type, payload} = action;

  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return state.set('entities', payload)

    case LOAD_MORE_PHONES_SUCCESS:
      return state.set('entities', payload)

    case FETCH_PHONE_BY_ID_SUCCESS:
      return state.set('phone', payload)

    case ADD_PHONE_TO_BASKET:

      return state.update('basket', basket => { return [...basket, payload]})

    case SEARCH_PHONE:
      return  state.set('search', payload)
      // return R.assoc(payload.id, payload, state)
    // case FETCH_LAZY_START:
    //   return state.set('loading', true)
    //
    // case FETCH_ALL_SUCCESS:
    //   return state
    //       .set('loading', false)
    //       .set('loaded', true)
    //       .set('entities', fbToEntities(payload, PhoneRecord))
    //
    // case FETCH_LAZY_SUCCESS:
    //   return state
    //       .set('loading', false)
    //       .mergeIn(['entities'], fbToEntities(payload, PhoneRecord))
    //       .set('loaded', Object.keys(payload).length < 10)
    //
    // case SELECT_EVENT:
    //   return state.update('selected', selected => selected.add(payload.uid))

    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const entitiesSelector = createSelector(stateSelector, state => state.entities)
// export const itemSelector = createSelector(stateSelector, state => state.entities)
export const basketSelector = createSelector(stateSelector, state => state.basket)
export const searchSelector = createSelector(stateSelector, state => state.search)

// export const loadingSelector = createSelector(stateSelector, state => state.loading)
// export const loadedSelector = createSelector(stateSelector, state => state.loaded)
// export const selectionSelector = createSelector(stateSelector, state => state.selected.toArray())
// export const getPhonesSelector = createSelector(entitiesSelector, entities => { return entities.valueSeq().toArray()})
export const getPhonesSelector = createSelector(entitiesSelector, searchSelector, (entities, search) => {
  if(!search) return entities
  else {
    return entities.filter((phone) => {
      return phone['name'].toLowerCase().includes(search.toLowerCase())
  })}

})

export const getRenderedPhonesListLength = createSelector(entitiesSelector, entities => entities.length)

export const getPhoneByIdSelector = (state, id) => {
  if(!id) return {}
  else {
    console.log('----BY ID--', {id, state})
    return R.prop(id, state.phones.entities)
  }
}

export const getTotalBasketCountSelector = createSelector(basketSelector, basket => basket.length)


export const totalBasketPriceSelector = state => {
  // const totalPrice = R.compose(
  //     R.sum,
  //     R.pluck('price'),
  //     R.map(id => getPhoneByIdSelector(state, id))
  // )(state.basket)
  //
  // return totalPrice
  return state.phones.basket.reduce((acc, phoneId) => {
    console.log('---ACC', {state, acc})
    return acc + parseInt(getPhoneByIdSelector(state, phoneId).price || 0)
  }, 0)

}



// export const selectedEventsSelector = createSelector(entitiesSelector, selectionSelector, (entities, selection) =>
//     selection.map(uid => entities.get(uid))
// )

/**
 * Action Creators
 * */

export function fetchPhones( ) {
  return async  dispatch => {

    try {
      dispatch({type: FETCH_PHONES_START})

      const phones = await fetchPhonesApi()

      dispatch({
        type: FETCH_PHONES_SUCCESS,
        payload: phones,
      })
    }
    catch (err){
      dispatch({
        type: FETCH_PHONES_FAILD,
        payload: err,
        error: true
    })
    }
  }
}



export function loadMorePhones( ) {
  return async  (dispatch, getState) => {
    const offset = getRenderedPhonesListLength(getState())
    try {
      dispatch({type: LOAD_MORE_PHONES_START})

      const phones = await loadMorePhonesApi({offset})

      dispatch({
        type: LOAD_MORE_PHONES_SUCCESS,
        payload: phones,
      })
    }
    catch (err){
      dispatch({
        type: LOAD_MORE_PHONES_FAILD,
        payload: err,
        error: true
    })
    }
  }
}

export const fetchPhoneById = (phoneId) => async dispatch => {
  dispatch({
    type: FETCH_PHONE_BY_ID_START
  })

  try {
    const phone = await fetchPhoneByIdApi(phoneId)

    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILD,
      payload: err,
      error: true
    })
  }

}

export const addPhoneToBasket = id => dispatch => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}

export const searchPhone = text =>  dispatch => {
  dispatch({
    type: SEARCH_PHONE,
    payload: text,
  })
}

// export function fetchAllEvents() {
//   return {
//     type: FETCH_ALL_REQUEST
//   }
// }
//
// export function selectEvent(uid) {
//   return {
//     type: SELECT_EVENT,
//     payload: { uid }
//   }
// }
//
// export function fetchLazy() {
//   return {
//     type: FETCH_LAZY_REQUEST
//   }
// }

// /**
//  * Sagas
//  * */
//
// export function* fetchAllSaga() {
//   const ref = firebase.database().ref('events')
//
//   yield put({
//     type: FETCH_ALL_START
//   })
//
//   const snapshot = yield call([ref, ref.once], 'value')
//
//   yield put({
//     type: FETCH_ALL_SUCCESS,
//     payload: snapshot.val()
//   })
// }
//
// export const fetchLazySaga = function * () {
//   while (true) {
//     yield take(FETCH_LAZY_REQUEST)
//
//     const state = yield select(stateSelector)
//
//     if (state.loading || state.loaded) continue
// //        if (state.loaded) return
//
//     yield put({
//       type: FETCH_LAZY_START
//     })
//
//     const lastEvent = state.entities.last()
//
//     const ref = firebase.database().ref('events')
//         .orderByKey()
//         .limitToFirst(10)
//         .startAt(lastEvent ? lastEvent.uid : '')
//
//     const data = yield call([ref, ref.once], 'value')
//
//     yield put({
//       type: FETCH_LAZY_SUCCESS,
//       payload: data.val()
//     })
//   }
// }
//
// //lazy fetch FB
// /*
// firebase.database().ref('events')
//     .orderByKey()
//     .limitToFirst(10)
//     .startAt(lastUid)
//
// */
// export function* saga() {
//   yield all([
//     takeEvery(FETCH_ALL_REQUEST, fetchAllSaga),
//     fetchLazySaga()
//   ])
// }
//
