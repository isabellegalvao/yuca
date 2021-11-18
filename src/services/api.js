import axios from 'axios';

export default class API {
  constructor() {
    this.instance = axios.create({
        baseURL: 'https://private-42e99d-yuca1.apiary-mock.com/',
        headers: {
            'Content-Type': 'application/json',
        },
    });
  }

  getUserData() {
    return new Promise((resolve, reject) => {
        this.instance({
            'url': '/me',
            'method': 'GET',
        }).then(result => {
            return resolve(result.data)
        }).catch(err => {
            return reject(err.response)
        })
    })
  }

  getServices() {
    return new Promise((resolve, reject) => {
        this.instance({
            'url': '/services',
            'method': 'GET',
        }).then(result => {
            return resolve(result.data)
        }).catch(err => {
            return reject(err.response)
        })
    })
  }

  setServices(userId, services) {
    return new Promise((resolve, reject) => {
        this.instance({
            'url': '/services',
            'method': 'PUT',
            'data': {
                "userId": Number(userId),
                "services": services,
            }
        }).then(result => {
            return resolve(result.data)
        }).catch(err => {
            return reject(err.response)
        })
    })
  }

}