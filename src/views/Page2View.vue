<script setup>

  import { ref } from 'vue';
  import Page2Component from '../components/Page2Component.vue';

  const toggleClass = false

  const posts = [{
    name: "blah",
    id: 12345,
    message: "qwertyuiopasdfghjkllxcvbnm"
    },
    {
    name: "blah",
    id: 12345,
    message: "qwertyuiopasdfghjkllxcvbnm"
    }
  ]
  
  const postFontSize = ref(3)
  function increaseSize() {
      postFontSize.value += 2
  }
</script>

<template>
  <h1>This is page two!</h1>
  <br>

  <h2>Look at these messages!!</h2>
  <br>
  <p>Awwww, they're so small and cute</p>
  <br>
  <p>Maybe you can increase the font size to make it more readable?</p>

  <br>

  <!-- v-model.lazy  -->
  <p>Try checking before increasing the font size because im lazy <input type="checkbox" v-model.lazy="toggleClass"></p>

  <!-- style & class binding -->
  <div :style="{fontSize: postFontSize + 'px'}" :class="{messageBackground: toggleClass}">

        <!-- using component -->
        <!-- list rendering + with object, on <template>, with component-->
        <Page2Component v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :name="post.name"
          :message="post.message"
          @increase-size="increaseSize"
          >
          
          Button with SLOT:
          {{ post.id }}

          <!-- Named SLOT example -->
          <template #footer>
              This footer is a named SLOT example
          </template>
        </Page2Component>
    </div>

</template>

<style>
  .messageBackground {
    background-color: rgba(255, 140, 0, 0.227);
  }
</style>
