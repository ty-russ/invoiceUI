<template>
  <div class="dialogue flex">
    <div class="dialogue-contents">
      <p>Are you sure you want Exit?...Progress will not be saved!</p>
      <div class="actions flex">
        <button @click="closeDialogue" class="red">NO</button>
        <button @click="exitInvoice" class="green">YES</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "dialog",
  methods: {
    ...mapMutations(["TOGGLE_DIALOG", "TOGGLE_INVOICE", "TOGGLE_EDIT_INVOICE"]),
    closeDialogue() {
      this.TOGGLE_DIALOG();
    },
    exitInvoice() {
      this.TOGGLE_INVOICE();
      this.TOGGLE_DIALOG();
      if (this.editInvoice) {
        this.TOGGLE_EDIT_INVOICE();
      }
    },
  },
  computed: {
    ...mapState(["editInvoice"]),
  },
};
</script>

<style lang="scss" scoped>
.dialogue {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .dialogue-contents {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;
    p {
      text-align: center;
    }
    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
