import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor(){
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)// mobx будет следить за изменением этих переменных
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedType = brand
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brand){
        this._brands = brand
    }

    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}