<template>
    <div class="calculator">
        <div class="calculatorMode">
            <p class="calculatorMode-title">Operation mode:</p>
            <div class="mode">
                <a class="modeBtn modeClassic" @click="showClassic">Classic</a>
                <a class="modeBtn modeBonus" @click="showTrigonometry">Trigonometry</a>
                <a class="modeBtn modeBonus" @click="showBonus">Bonus</a>
            </div>
        </div>
        <input v-model="result" class="calculatorInput" type="text">  
        <div class="wrapper">
            <div class="calculatorBtns numbersItems">
                <a
                @click="addNumbers(number)"
                class="calculatorBtn-item" v-for="number in numbers" href="#">{{ number }}</a>
            </div>
            <div class="calculatorBtns operationsItems">
                <a 
                    v-if="oper == 'classic'"
                    @click="addNumbers(operation)"
                    class="calculatorBtn-item operationItem" v-for="operation in operations" href="#">{{ operation }}
                </a>
                <a 
                    v-else-if="oper == 'bonus'"
                    @click="addNumbers(operation)"
                    class="calculatorBtn-item operationItem" v-for="operation in operations2" href="#">{{ operation }}
                </a>
                <a 
                    v-else-if="oper == 'trigonometry'"
                    @click="addNumbers(operation)"
                    class="calculatorBtn-item operationItem" v-for="operation in operations3" href="#">{{ operation }}
                </a>
            </div>     
        </div>
        <div class="calculatorBtns">
            <a 
            @click="addNumbers(update)"
            class="calculatorBtn-item" v-for="update in updates" href="#">{{ update  }}</a>
        </div>
    </div>
</template>

<script>
    import { evaluate } from 'mathjs';
    
    export default {
        data() {
            return {
                result: '',
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '00'],
                operations: ['+', '-', '*', '/'],
                operations2: ['%', '^', 'sqrt'],
                operations3: ['sin', 'cos', 'tan', 'cot'],
                updates: ['=', '<=', 'clear', '(', ')', 'deg'],
                oper: 'classic',
            }
        },
        methods: {
            addNumbers(number) {
                if (number == '=') {
                    this.getResult()
                } else if (number == '<=') {
                    this.result = this.result.slice(0, -1)
                } else if (number == 'clear') {
                    this.result = ''
                }
                else {
                    this.result += number
                }
            },
            getResult() {
                this.result = evaluate(this.result).toString()
            },
            showClassic() {
                this.oper = 'classic'
            },
            showBonus() {
                this.oper = 'bonus'
            },
            showTrigonometry() {
                this.oper = 'trigonometry'
            }

        }
    }
</script>

<style>
    .calculatorInput {
        border: 1px solid #aaa;
        background-color: transparent;
        padding: 12px;
        outline: none;
        font-size: 32px;
    }

    .calculatorBtns {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .wrapper {
        display: flex;
    }

    .numbersItems {
        width: 75%;
    }

    .operationsItems {
        flex-direction: column;
        width: 25.5%;
    }

    .calculatorBtn-item {
        width: 33.3%;
        border: 1px solid #aaa;
        padding: 10px;
        text-align: center;
        transition: all .3s;
    }

    .operationItem {
        width: 100%;
        background-color: #A65800;
    }

    .calculatorBtn-item:hover {
        background-color: #aaa;
        color: #222;
    }

    .operationItem:hover {
        background-color: #c67314;
        color: #aaa;
    }

    .calculatorMode {
        margin-bottom: 20px;
        text-align: center;
    }
    
    .calculatorMode-title {
        color:#A65800;
        margin-bottom: 5px;
    }

    .mode {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .modeBtn {
        cursor: pointer;
        padding: 1px 10px;
        border: 1px solid #aaa;
    }
</style>