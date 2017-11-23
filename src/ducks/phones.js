import {appName} from '../config'
import {OrderedSet, Record} from 'immutable'
import {createSelector} from 'reselect'
import {
  fetchCategoriesApi,
  fetchPhoneByIdApi,
  fetchPhonesApi,
  loadMorePhonesApi
} from "../components/apps/EcommerceApp/api/index";
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

export const FETCH_CATEGORIES_START = `${prefix}/FETCH_CATEGORIES_START`
export const FETCH_CATEGORIES_SUCCESS = `${prefix}/FETCH_CATEGORIES_SUCCESS`
export const FETCH_CATEGORIES_FAILD = `${prefix}/FETCH_CATEGORIES_FAILD`

export const CHOOSE_CATEGORY = `${prefix}/CHOOSE_CATEGORY`

export const REMOVE_ITEM_FROM_BASKET = `${prefix}/REMOVE_ITEM_FROM_BASKET`

export const BASKET_CHECKOUT = `${prefix}/BASKET_CHECKOUT`

export const CLEAN_BASKET = `${prefix}/CLEAN_BASKET`





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
  search: '',
  categories: [],
  categoryId: null
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

    case FETCH_CATEGORIES_SUCCESS:
      return state.set('categories', payload)

    case CHOOSE_CATEGORY:
      return state.set('categoryId', payload)

    case REMOVE_ITEM_FROM_BASKET:
      const basket = state.get('basket')
      const newBasketState = R.without(R.of(payload), basket)
      return state.set('basket', newBasketState)

    case CLEAN_BASKET:
      return state.set('basket', [])


    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = state => state[moduleName]
export const entitiesSelector = createSelector(stateSelector, state => state.entities)
export const categoriesSelector = createSelector(stateSelector, state => state.categories)
export const categoryIdSelector = createSelector(stateSelector, state => state.categoryId)


export const basketSelector = createSelector(stateSelector, state => state.basket)
export const searchSelector = createSelector(stateSelector, state => state.search)

export const getPhonesSelector = createSelector(
    entitiesSelector,
    searchSelector,
    categoryIdSelector,
    (entities, search, categoryId) => {

  let result = entities;
  if(search ) {
    result = result.filter((phone) => {
      return phone['name'].toLowerCase().includes(search.toLowerCase())
  })}

  if(categoryId ){
    result = result.filter((phone) => {
      return  categoryId === phone['categoryId']
    })
  }

  if(categoryId === 0){
    result = result;
  }

  return result

})


export const getRenderedPhonesListLength = createSelector(entitiesSelector, entities => entities.length)

export const getActiveCategoryId = (state, ownProps) => {
  const matchArr = state.router.location.pathname.match(/(categories\/)(\d{1,2})/)
  let id
  if(matchArr){
    id = matchArr[matchArr.length-1];
  }

  return id
}



export const getPhoneByIdSelector = (state, id) => {
  let result
  if(!id) result = {}
  else {
    result = state.phones.entities.find(phone => phone.id === id)
  }
  return result
}

export const getTotalBasketCountSelector = createSelector(basketSelector, basket => basket.length)


export const totalBasketPriceSelector = state => {
  return state.phones.basket.reduce((acc, phoneId) => {
    return acc + parseInt(getPhoneByIdSelector(state, phoneId).price || 0)
  }, 0)

}
export const getBasketPhonesWithCount = state => {

  const basket = basketSelector(state)

  const uniqueIds = R.uniq(basket)

  const phoneCount = id => R.compose(
      R.length,
      R.filter(basketId => R.equals(id, basketId))
  )(basket)

  const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)

  const phones = R.compose(
      R.map(phoneWithCount),
      R.map(id =>{
       return getPhoneByIdSelector(state, id)
      })
  )(uniqueIds)
  return phones
}


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


export const chooseCategory  = id => dispatch =>  {
  dispatch({
    type: CHOOSE_CATEGORY,
    payload: id
  })
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

export const removeItemFromBasket = id => dispatch => {
  dispatch({
    type: REMOVE_ITEM_FROM_BASKET,
    payload: id
  })
}

export function fetchCategories( ) {
  return async  dispatch => {

    try {
      dispatch({type: FETCH_CATEGORIES_START})

      const categories = await fetchCategoriesApi()

      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories,
      })
    }
    catch (err){
      dispatch({
        type: FETCH_CATEGORIES_FAILD,
        payload: err,
        error: true
      })
    }
  }
}

export const basketCheckout = phones => dispatch => {
  dispatch({
    type: BASKET_CHECKOUT,
    payload: phones
  })
  alert('FAKE CHECKOUT SUCCESS!\n' + JSON.stringify(phones, null, 3))
}

export const  cleanBasket = () => dispatch => {
  dispatch({
    type: CLEAN_BASKET
  })
}



/**
 * Sagas
 * */

