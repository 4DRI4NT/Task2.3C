<script setup>
    import { computed, ref } from 'vue'

    const picked = ref('One')
    let total = ref(0)
    const totalList = ref([])
    const select = ref()
    const trimmed = ref()
    const onlyNum = ref()

    //computed property
    const totalMessage = computed(() => {
        return 'The sum of array: [' + totalList.value + "] is " + total.value
    })

    function getTotal() {
        this.total = 0
        this.totalList.forEach(num => {
            this.total += Number(num)
        });
        return total
    }

</script>

<template>
    <h1>This is page three!</h1>
    <br>

    <div>
    <h2>Radio</h2>
    <!-- v-model with <input type="radio"> -->
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <input type="radio" id="three" value="Three" v-model="picked">
    <label for="three">Three</label>
    <br>
    <input type="radio" id="four" value="Four" v-model="picked">
    <label for="four">Four</label>
    <br>
    <input type="radio" id="five" value="Five" v-model="picked">
    <label for="five">Five</label>
    <br>
    <span>Picked: {{ picked }}</span>
  </div>
    
  <div>
    <h2>Standard</h2>
    <!-- v-model with <input type="checkbox"> -->
    <input type="checkbox" id="1" value=1 v-model="totalList">
    <label for="1">1</label>
    <br>
    <input type="checkbox" id="2" value=2 v-model="totalList">
    <label for="2">2</label>
    <br>
    <input type="checkbox" id="3" value=3 v-model="totalList">
    <label for="3">3</label>
    <br>
    <input type="checkbox" id="4" value=4 v-model="totalList">
    <label for="4">4</label>
    <br>
    <input type="checkbox" id="5" value=5 v-model="totalList">
    <label for="5">5</label>
    <br>

    <span>{{ totalMessage }}</span>
    <br>
    <span>Total: {{ getTotal() }}</span>
    <br>
    <span>TotalList: {{ totalList }}</span>
  </div>
 
  <div>
    <!-- v-model with select -->
    <select v-model="select">
        <option>ONE</option>
        <option>TWO</option>
        <option>THREE</option>
        <option>FOUR</option>
        <option>FIVE</option>
    </select>
    <br>
    <p>You selected the option: {{ select }}</p>
  </div>

  <div>
    <br>
    <!-- <input type="textarea"> + v-model.trim -->
    <input type="textarea" v-model.trim="trimmed">
    <label>Add white space and ill trim it!</label>
    <p>{{ trimmed }}</p>
  </div>

  <div>
    <br>
    <!-- v-model.number -->
    <input type="text" v-model.number="onlyNum">
    <label>I'll typecast to a number!</label>
    <p>{{ onlyNum }}</p>
  </div>
  </template>
  
  <style>
  
  </style>
  