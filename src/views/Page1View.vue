<script setup>
  import { ref, watch } from 'vue'

  //reactivity fundamentals
  const noteId = ref(0)
  const noteItem = ref('')
  const noteList = ref([])
  const selected = ref(false)
  const count = ref(0)

  // creating data for v-html
  let htmlContent = "<p>Hello, im from v-html</p>"


  //methods
  function addNote() {
      noteList.value.push({
          id: noteId.value++,
          note: noteItem.value,
          status: selected.value
      })

      noteItem.value = ""
  }

  function removeNote(i) {
      noteList.value = noteList.value.filter((t) => t !== i)
  }

  //watcher
  watch(noteItem, (newNote, oldNote) =>{
    console.log("New note: " + newNote)
    console.log("Old note: " + oldNote)
  });

</script>

<template>
  <h1>This is page one!</h1>
  <br>
  
  <div>
    <h2>Write a note!</h2>
    <!-- v-model with <input type="text"> -->
    <input type="text" v-model="noteItem">
    <!-- method handler -->
    <button @click="addNote">Add Note</button>

    <ol>
      <li v-for="i in noteList">
        <!-- text interpolation / js expressions inside syntax -->
        <span :class="{done: i.selected}">{{ i.note }}</span>
        <!-- v-model with <input type="checkbox"> -->
        <input type="checkbox" v-model="i.selected">
        <button @click="removeNote(i)" v-show="i.selected">X</button>
        <!-- v-for with v-if -->
        <p v-if="i.note.length < 1">This note is empty!</p>
      </li>
    </ol>
    <p v-if="noteList.length < 1">No notes</p>
  </div>

  <!-- using v-html -->
  <div v-html="htmlContent"></div>

  <div>
    <br>
    <!-- using v-bind -->
    <img v-bind:src='"https://cdn.icon-icons.com/icons2/2451/PNG/512/apple_fruit_food_icon_148896.png"'> 
  </div>

  <div>
    <!-- inline handler -->
    <button @click="count++">Watch me count!</button>
    <!-- v-for with a range -->
    <p v-for="i in count">{{ i }}</p>
  </div>

</template>
