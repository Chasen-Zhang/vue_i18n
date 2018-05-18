<template src="./partA.component.html"></template>
<script>
	export default {
	  name: 'partA',
	  data () {
	    return {
        lang: 'cn'
	    }
	  },
    methods:{
      switchLang(){
        if(this.lang =='en'){
          this.$i18n.locale = 'cn';
          this.lang = 'cn';
        }else{
          this.$i18n.locale = 'en';
          this.lang = 'en';
        }

      }
    }

	}

</script>
<style src="./partA.component.css" scoped=""></style>
