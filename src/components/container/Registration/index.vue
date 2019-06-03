

<template>
  <main>
    <section class="registration">
      <div v-if="!isUserExists">
        <GetStarted/>
      </div>
      <div v-if="isUserExists">
        <VerifyRegistration/>
      </div>

      <div class="footer">
        <p v-text="$t('footer')"/>
        <a href>Terms and Conditions</a>
        <a href>Privacy Policy</a>
      </div>
    </section>
  </main>
</template>

<script>
import messages from "./messages";
const GetStarted = () =>
  import("@/components/container/Registration/getStarted");
const VerifyRegistration = () =>
  import("@/components/container/Registration/verifyRegistration");

export default {
  name: "Registration",
  i18n: { messages },
  data: function() {
    return{
      isUserExists: false
    }
  },
  components: {
    GetStarted,
    VerifyRegistration
  }
};
</script>

<style lang="scss" scoped>
.registration {
  margin-bottom: 20px;
  margin: 0 auto;
}

.footer {
  display: grid;
  width: 75%;
  margin: 0 auto;
}
</style>
