<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="d-flex justify-content-center">
      <h1 class="bd-title" id="content">Create Accordion For FAQ</h1>
    </div>

  <div class="container">
    <div class="accordion" id="accordionExample">
    <div class="card" v-for="(question, index) in questions" :key="index">
      <div class="card-header p-0" :id="'heading'+index" @click="question.open = !question.open">
        <h2 class="mb-0">
          <button class="btn btn-light btn-block text-left p-3 rounded-0" type="button" data-toggle="collapse" :data-target="'#'+question.order">
            {{ question.title }}
          </button>
        </h2>
      </div>
        <div :id="question.order" v-show="question.open" class="collapse">
          <div class="card-body text-left">
            {{ question.reply }}
          </div>
        </div>
    </div>
  </div>
  </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      questions: {
        "Question1": {
          "open": false,
          "title": "One: What Happen When Bla Bla Bla ?",
          "reply": "You can Do What You Want",
          "order": "first"
        },
        "Question2": {
          "open": false,
          "title": "Two: What Happen When Bla Bla Bla ?",
          "reply": "You can Do What You Want",
          "order": "second"
        },
        "Question3": {
          "open": false,
          "title": "Three: What Happen When Bla Bla Bla ?",
          "reply": "You can Do What You Want",
          "order": "third"
        },
        "Question4": {
          "open": false,
          "title": "Four: What Happen When Bla Bla Bla ?",
          "reply": "You can Do What You Want",
          "order": "fourth"
        },
        "Question5": {
          "open": false,
          "title": "Five: What Happen When Bla Bla Bla ?",
          "reply": "You can Do What You Want",
          "order": "fifth"
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
