class Game {

    constructor() {
        this.dom = null
        this.init()
    }

    init() {
        this.dom = document.createElement('table')
        this.dom.style.className = 'table'
        let container = document.createDocumentFragment()
        for (let row = 0; row < 20; row++) {
            let tr = document.createElement('tr')
            for (let col = 0; col < 15; col++) {
                let td = document.createElement('td')

            }
        }
    }
}