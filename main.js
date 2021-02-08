new Vue({
  el: '#app',
  data: {
    listaDischi: [],
    selected: ''
  },
  methods: {
    select: function () {
      this.listaDischi.filter((item, i) => {
        return this.selected == item.genre;
      });

    }
  },
  mounted() {
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp) {
      self.listaDischi = resp.data.response;
    });

  }

});
Vue.config.devtools = true;
