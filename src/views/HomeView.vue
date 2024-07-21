<template>
  <main @click="goNext" v-wave="{
    color: 'black',
    initialOpacity: 0.5,
    easing: 'ease-in',
}">
    <div ref="typewriter" class="text"></div>
  </main>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: 'TypewriterComponent',
  mounted() {
    const typewriter = new Typewriter(this.$refs.typewriter, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString('مرحبا انا محمد وليد')
      .pauseFor(1000)
      .deleteAll()
      .typeString('انا مطور مواقع')
      .pauseFor(1000)
      .deleteAll()
      .typeString('وهذه رحلتي في مبادرة اشبال مصر الرقمية')
      .pauseFor(1000)
      .deleteAll()
      .typeString('اضغط في اي مكان للتنقل')
      .pauseFor(1000)
      .start();
  },
  methods:{
    goNext(){
      setTimeout(() => {
        this.$router.push('/about')
      }, 500);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@258&family=Fira+Code:wght@300&family=Inter:wght@600&family=Lateef:wght@300&family=Marhey:wght@300..700&family=Outfit:wght@900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&family=Rubik:wght@300&family=Vazirmatn:wght@500&display=swap');

main{
  width:100%;
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}

.text{
  color:black;
  font-size:60px;
  font-family: "Cairo", sans-serif;
  font-optical-sizing: auto;
  font-weight: 258;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
}
</style>