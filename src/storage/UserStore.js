import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor(){
        this._isAuth = true// переменая изменятся не может
        this._user = {}
        makeAutoObservable(this)// mobx будет следить за изменением этих переменных
    }

    setAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}