<i18n>
{
  "en": {
    "title": "Complete Registration",
    "telegramMsg":"Please proceed by registering yourself with our Telegram bot.",
    "step-2":"Step 2",
    "note":"Note: Once you innitiate the chat, do come back here to begin your barter!"
  }
}
</i18n>

<template>
  <main>
    <div>
      <div class="heading">
        <h2 class="title" v-text="$t('title')"/>
      </div>
      <div class="body-section">
        <h3 v-text="$t('step-2')"></h3>
        <div class="container">
          <section class="section-1">
            <p v-text="$t('telegramMsg')"/>
            <md-button
              href="http://t.me/varun90bot"
              class="md-raised md-primary"
              target="_blank"
            >Click Here To Continue</md-button>
          </section>

          <md-divider></md-divider>
          <section class="section-2">
            <p v-text="$t('note')"/>
            <p class="text">
              Registration Status:
              <span class="green" v-if="complete">Completed</span>
              <span class="red" v-if="!complete">Pending</span>
            </p>
            <md-button class="md-raised md-secondary">Proceed to App</md-button>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "VerifyRegistration",
  data: function() {
    return {
      complete: false
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  margin-bottom: 20px;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 15px;
}
.title {
  font-size: 24px;
}
.heading {
  display: flex;
  border-bottom: 0.5px solid gray;
  justify-content: center;
}
.field {
  margin: 0 auto;
  display: flex;
}
.body-section {
  padding-top: 10%;
  padding-bottom: 8%;
  width: 75%;
  margin: 0 auto;
}
.section-1 {
  margin: 1rem;
}

.section-2 {
  margin: 2rem 1rem;
}

.text {
  font-size: 16px;
}

.green {
  color: #32cd32;
  font-weight: 600;
}
.red {
  color: #dc143c;
  font-weight: 600;
}
</style>
