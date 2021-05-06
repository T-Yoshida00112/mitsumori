Vue.component('start-component', {
    template: `
    <div v-if="this.isStartScreen" class="start-component__bg">
        <div class="start-component__inner">
            <h1>
                簡単見積もり<br>
                <span>美容室編</span>
            </h1>
            <button v-on:click="startButton" class="button">見積もりスタート！</button>
        </div>
    </div>
    `,
    data: function () {
        return {
            isStartScreen: true
        }
    },
    methods: {
        startButton: function () {
            this.isStartScreen = false;
        }
    }
})

//質問を答えてもらうページです。
Vue.component('main-component', {
    template: `
    <div class="main-component">
        <div class="main-component__inner">
            <p id="js-question" class="alert quiz-txt">
                {{ questionText }}
            </p>
            <div class="fl-wrap">
                <button v-for="choice in choices" type="button" class="btn">{{ choiceText }}</button>
            </div>
        </div>
    </div>
    `,



    data: function(){
        
        return{
            
            questions: [
                {
                    question: "Q.1つ目の質問",
                    answers: [
                        {answer: "1", score: "1"},
                        {answer: "2", score: "2"},
                        {answer: "3", score: "3"},
                        {answer: "4", score: "4"}
                    ]
                },
                {
                    question: "Q.2つ目の質問",
                    answers: [
                        {answer: "1", score: "1"},
                        {answer: "2", score: "2"}
                    ]
                },
                {
                    question: "Q.3つ目の質問",
                    answers: [
                        {answer: "1", score: "1"},
                        {answer: "2", score: "2"},
                        {answer: "3", score: "3"}
                    ]
                }
            ],
            questionText: "quiz",
            choices: "5",
            choiceText: "qqq"
        }
    },
    methods: {
        
        // startButton:function(){
        //     this.isStartScreen = false;
        // }
    }
})

Vue.component('final-component', {
    template: `
    <div v-if="this.isFinalScreen" class="final-component">
        <div class="final-component__inner">
            <p>結果発表</p>
        </div>
    </div>
    `,
    data: function () {

        return {
            isFinalScreen: true
        }
    },
    methods: {
        startButton: function () {
            this.isFinalScreen = false;
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
    }
})