class Calculator{
    constructor(currentOperandTextElement, previousOperandTextElement, currentOperand, previousOperand, prev){
        this.currentOperandTextElement = currentOperandTextElement
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperand = currentOperand
        this.previousOperand = previousOperand
        this.operation = ""
        this.prev = prev
        this.current = currentOperand
        this.updateDisplayEqual=0
    }
    clear(){
        this.currentOperandTextElement.innerText=""
        this.previousOperandTextElement.innerText=""
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation=undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if (number==="." && this.currentOperand.includes('.')) {
            return
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    operationButtons(operation){
        if (operation==="") {
            return
        }
        if (operation!=="") {
            if (currentOperandTextElement.innerText!=="") {
                this.previousOperand = this.currentOperand + " " + operation.toString()
                this.operation = operation
                this.prev= parseFloat(this.currentOperand)
                this.currentOperand = ""
            }
        }
    }
    equal(){
        if (this.updateDisplayEqual===0) {
            if (this.operation==="+") {
                this.result = this.prev + this.current
            }
            else if (this.operation==="-"){
                this.result = this.prev - this.current
            }
            else if (this.operation==="*"){
                this.result = this.prev*this.current
            }
            else if (this.operation==="÷"){
                this.result = this.prev / this.current
            }else{}
            console.log(this.result)
            currentOperandTextElement.innerText = this.result
    
            if (isNaN(this.result)) {
                currentOperandTextElement.innerText = "{Syntax Error}"
            }
            var isNumber = isFinite(this.result)
            if (isNumber===false){
                currentOperandTextElement.innerText = "{Syntax Error}"
            }
    
            previousOperandTextElement.innerText = ""
            this.currentOperand=""
            this.previousOperand=""
            this.operation=undefined
            this.updateDisplayEqual=1
            return
        }
        else{
            this.updateDisplay()
        }
    }
    AddOperationToEqualsNumber(){
        if (this.updateDisplayEqual===1) {
            this.currentOperand = this.result
        }
    }
    updateDisplay(){
        if (this.updateDisplayEqual===0){
            this.currentOperandTextElement.innerText = this.currentOperand
            this.current = parseFloat(this.currentOperand)
            if (this.operation !== "") {
                this.previousOperandTextElement.innerText = this.previousOperand
            }else{
                this.previousOperandTextElement.innerText = ""
            }}
            else{
                this.updateDisplayEqual=0
                this.result=undefined
                this.updateDisplay()
            }
    }
}

const numberButtons = document.querySelectorAll("[data-number-button]");
const operationButtons = document.querySelectorAll("[data-operation-button]");
const ac = document.querySelector("[data-clear-all]");
const del = document.querySelector("[data-del]");
const equalsButton = document.querySelector("[data-equals-button]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");


const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement, "")

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.AddOperationToEqualsNumber();
        calculator.operationButtons(button.innerText)
        calculator.updateDisplay()
    })
})
ac.addEventListener('click', () => {
    calculator.clear()
})
del.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})
equalsButton.addEventListener("click", () => {
calculator.equal()
})