<template>
  <div class="main">
    <n-grid x-gap="12" :cols="1" style="padding-top: calc(14vh)">
      <n-gi>
        <div id="logo" style="text-align: center">
          <img
            style="width: calc(34vh)"
            src="/logo.png"
          />
        </div>
      </n-gi>
      <n-gi>
        <div style="text-align: center; padding-top: calc(4vh)">
          <span
            style="font-size: 2.2em"
            >CoCrypto Lab @ SUSTech</span
          >
        </div>
        <div style="text-align: center; padding-top: 8px">
          <span></span><span id="info"></span>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from "vue";
import { init } from "ityped";
import { useMessage } from "naive-ui";

export default defineComponent({
  data: function () {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
  setup() {
    const o = getCurrentInstance();
    const email = ref("mail@imliuyi.com");
    const message = useMessage();
    return {
      
    };
  },
  mounted() {
    const oneElement = document.querySelector("#info");
    init(oneElement, {
      typeSpeed: 100,
      backDelay: 1500,
      showCursor: true,
      strings: [
        "CoCrypto Lab is at SUSTech. ",
        "The PI of CoCrypto Lab is Qi Wang. ",
        "We do research on Coding Theory and Cryptography. ",
        "I am interested in cryptographic protocols. ",
        "Welcome to join us. ",
      ],
    });
  },
  components: {

  },
});
</script>

<style>
html,
body,
.main {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>