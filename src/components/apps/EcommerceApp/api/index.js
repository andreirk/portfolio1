import phones from './mockPhones'
import categories from './mockCategories'


export const fetchPhonesApi = async () => {
  const response = await fetch('https://www.mocky.io/v2/5a16458a31000056008d31b6')
  const data = await response.json()

  return data.phones

  // return new Promise(resolve => {
  //   resolve(phones)
  // })
}

export const loadMorePhonesApi = async ({offset}) => {
  return new Promise(resolve => {
    resolve(phones)
  })
}

export const fetchPhoneByIdApi = async (phoneId) => {
  return new Promise((resolve, reject) => {
    const phone =  phones.find(el => el.id === phoneId)
    resolve(phone)
  })
}


export const fetchCategoriesApi = async () => {
  return new Promise(resolve => {
    resolve(categories)
  })
}
