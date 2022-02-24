<script setup>
import { ref } from 'vue'

const newItem = ref("")
let todoList = ref(["item one", "item two"])
let doneList = ref(["item one"])

const addItem = () => {
  todoList.value.unshift(newItem.value);
  newItem.value = "";
}

const toggleItemDone = (item) => {
  if (doneList.value && doneList.value.includes(item)) {
    const doneIndex = doneList.value.indexOf(item);
    doneList.value.splice(doneIndex, 1);
  } else {
    doneList.value.push(item);
  }
}

const removeItem = (index) => {
  todoList.value.splice(index, 1);
}

const setAllDone = () => {
  doneList.value = JSON.parse(JSON.stringify(todoList.value));
}

const deleteAll = () => {
  todoList.value = [];
  doneList.value = [];
}
</script>

<template>
  <div id="app">
    <span>Authors:</span>
    <ul>
      <li>Me</li>
      <li>Myself</li>
      <li>I</li>
    </ul>
    <input type="text" v-model="newItem" @keyup.enter="addItem" />
    <button @click="addItem" v-text="'add new item'" />

    <ul data-test-id="to-do-list">
      <li v-for="(item, index) of todoList" :key="index">
        <button
          @click="toggleItemDone(item)"
          class="emoji"
          data-testid="toggle-button"
        >
          {{ doneList.includes(item) ? "🔙" : "🍻" }}
        </button>
        <span :class="[doneList.includes(item) ? 'done' : '']">{{ item }}</span>
        <button @click="removeItem(index)" class="emoji bg-delete">🚮</button>
      </li>
    </ul>

    <section v-if="todoList.length">
      <button
        @click="setAllDone"
        v-text="'all done'"
        data-testid="all-done-button"
      />
      <button class="bg-delete" @click="deleteAll" v-text="'delete all'" />
    </section>
    <section>
      version: 0.0.13
    </section>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap");

body {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2730;
  font-size: 20px;
  margin-top: 60px;
  background: #f7fbff;
}

input,
select,
textarea,
button {
  font-family: inherit;
  font-size: inherit;
}

$base-color: #34eb9e;

input {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  margin: 12px;
  border: 1px solid black;
  box-shadow: 7px 7px $base-color;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s;

  &:focus {
    border-radius: 0;
    box-shadow: none;
    background: $base-color;
    outline: 0;
  }
}

button {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  margin: 8px;
  outline: 0;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.bg-delete {
  color: white;
  &:after {
    background-color: #da4f2c;
  }
}

button:hover {
  border-radius: 0;
}

button::after {
  content: "";
  background-color: $base-color;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  border-radius: 4px;
  transition: 0.2s;
}

button:hover::after {
  top: 0px;
  left: 0px;
  border-radius: 0;
}

.emoji {
  font-size: 32px;
  padding: 4px 6px;
}

ul {
  width: 60%;
  margin: 24px auto;
}

li {
  $border-line: #e6e6e6;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: solid 1px $border-line;

  &:first-child {
    border-top: solid 1px $border-line;
  }
}

.done {
  text-decoration: line-through;
}
</style>
