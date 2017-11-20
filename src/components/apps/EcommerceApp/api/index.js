import phones from './mockPhones'

export const fetchPhonesApi = async () => {
  return new Promise(resolve => {
    resolve(phones)
  })
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