<template>
  <div class="container">
    <button @click="$vm2.open('modal-1')">Open normal modal</button>
    <modal-vue
      @on-close="$vm2.close('modal-1')"
      name="modal-1"
      :headerOptions="{
        title: 'Want to delete this item?',
      }"
      :footerOptions="{
        btn1: 'Cancel',
        btn2: 'Delete',
        btn2Style: {
          backgroundColor: 'red',
        },
        btn2OnClick: () => {
          doDelete();
        },
        btn1OnClick: () => {
          $vm2.close('modal-1');
        },
      }"
    >
      This process cannot be undone
    </modal-vue>
  </div>
</template>