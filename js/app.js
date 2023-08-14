const app = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [],
      error: "",
      showError: false,
      looser:'',
      idx:''
    };
  },
  computed: {
    isReady() {
      return this.names.length > 1;
    },
  },
  methods: {
    addNameToList() {
      const userName = this.inputName;
      if (this.validate(userName)) {
        this.names.push(userName);
        this.inputName = "";
        console.log(this.names);
        this.showError = false;
      } else {
        this.inputName = "";
        this.showError = true;
      }
    },
    validate(value) {
      this.error = "";
      if (!value) {
        this.error = "Name cannot be empty";
        return 0;
      } else if (this.names.includes(value)) {
        this.error = "Name already exists in the database";
        return 0;
      } else {
        return 1;
      }
    },
    removeName(value) {
      this.names.splice(value, 1);
    },
    showResults(){
      this.state = false;
      const index = Math.floor(Math.random() * this.names.length);
      this.looser = this.names[index];
      this.idx = index;
    },
    getNewResult(){
      let index = Math.floor(Math.random() * this.names.length);
      while(this.idx === index){
        index = Math.floor(Math.random() * this.names.length);
      }
      this.looser = this.names[index];
      this.idx = index;
    },
    resetApps(){
      this.state= true;
      this.inputName= "";
      this.names= [],
      this.error= "",
      this.showError= false,
      this.looser='',
      this.idx=''
    }
  },
}).mount("#app");
