let Car = class {

    constructor(mark, model, year) {
        this.mark = mark
        this.model = model
        this.year = year
    }

    go() {
        console.log(`${this.model} Врум-врум!`)
    }

    printInfo() {
        console.log(`Марка: ${this.mark}, модель: ${this.model}, ${this.year} года`)
    }

}


const Car1 = new Car('Жигули', 'ВАЗ-2105', 1980)

Car1.go()
Car1.printInfo()

class People {

    constructor(name, age) {
        this.name = name
        this.suname = ''
        this.age
    }

    get suname(){
        return this._suname
    }

    set suname(suname){
        if(suname.lenght < 5) console.log('Короткое имя')
        else this._suname = suname
    }

    speak(){
        console.log(`Меня зовут ${this.name}`)
    }

}

class Driver extends People {
    constructor(name, suname, age, car){
        super(name, suname, age)
        this.car = car
    }

    speak(){
        super.speak()
        console.log()
    }

    drive(){
        console.log('Врум-врум!')
    }
}


let drive1 = new Driver('Oleg', 28, 'Porshe 911')

drive1.speak()
drive1.drive()
