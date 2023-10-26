let Dog = class { // создали калсс Dog

    constructor(nickname, age){
        this.nickname = nickname // кличка
        this.age = age // возраст
    }

    info(){
        console.log('Тяф-Тяф') // голос
    }

}


const dog1 = new Dog('Чао-чао', 3, true) // Собака "Чао-чао"

dog1.info()
console.log(dog1)

class Doberman extends Dog { // класс Doberman унаследовали класс Dog

    constructor(nickname, age, training){
        super(nickname, age) // кличка и возраст
        this.training = training // дресованый да / нет
    }

    info(){
        console.log('Гав-Гав')  // голос
    }

}


const dog2 = new Doberman('Доберман', 8, true)  // Собака "Доберман"

dog2.info()
console.log(dog2)
