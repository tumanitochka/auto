let Car = class {

    constructor(mark, model, year) {
        this.mark = mark
        this.model = model
        this.year = year
        this.speed = 0
        this.engine = false
    }

    start(){
        if(this.engine == true) return true
        else {
            this.engine = false
            return this.engine
        }
    }
    
    stop(){
        if(this.engine == false) return false
        else {
            this.engine = true
            return this.engine
        }
    }

    speedUp()
    speedDown()
    printInfo()

}


const Car1 = new Car('Жигули', 'ВАЗ-2105', 1980, 240, true)

function changeColor() { 
    var go = document.getElementsByClassName(".go"); 
    go.style.background = "#000";
}
