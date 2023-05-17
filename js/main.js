const { createApp } = Vue

createApp({
  data() {
    return {
      requestPath: "https://flynn.boolean.careers/exercises/api/random/mail",
      emailArray: [],
      answer: null,
    }
  },
  methods: {

  },
  mounted() {

    for (let i = 1; i < 11; i++) {
      axios.get(this.requestPath).then((risposta) => {
        this.answer = risposta.data.response;
        this.emailArray.push(this.answer);
      })
    }
    console.log(this.emailArray);
  }

}).mount('#app')