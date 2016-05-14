<template>
  <div id="contact" class="page">
    <basepage>
      <img
        class="img-background img-responsive"
        src="../../assets/images/contact/astro.png"
        alt="" />
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <h1>Contact Us</h1>
            <p>
              If you are still confused or curious about the beauty and mystery of the stars in the universe, send us a question or feedback now!
            </p>
            <form id="form-contact">
              <div class="form-group">
                <label class="control-label" for="#input-name">
                  Name
                </label>
                <input name="name" required class="form-control" id="input-name"/>
              </div>
              <div class="form-group">
                <label class="control-label" for="#input-subject">
                  Subject
                </label>
                <input name="subject" required class="form-control" id="input-subject" />
              </div>
              <div class="form-group">
                <label class="control-label" for="#input-email">
                  Email
                </label>
                <input name="email" required class="form-control" id="input-email" type="email" />
              </div>
              <div class="form-group">
                <label class="control-label" for="#input-message">
                  Message
                </label>
                <textarea name="message" required class="form-control" id="input-message" cols="50" rows="4"></textarea>
              </div>
              <div class="submit">
                <input class="btn" id="btn-submit" type="submit" v-on:click="send" value={{sendText}} v-bind:class="submitClass"/>
              </div>
            </form>
            <div class="margin"></div>
            <div>
              <div>
                <label>Find Us</label>
              </div>
              <div class="hashtag">
                #SkyroomIndonesia
              </div>
            </div>
          </div>
        </div>
      </div>
    </basepage>
  </div>
</template>

<script>
import basepage from '../basepage.vue';

const accessToken = 'c0migbsugnmsn5ms9dci151a';
const sendText = 'Send';
const submitClass = '';

export default {
  components: {
    basepage,
  },

  methods: {
    submit(form) {
      console.log(form);
    },
    send_onSuccess() {
      this.sendText = 'Success!';
      this.submitClass = 'success';
      this.startTimeout();
    },
    send_onError(error) {
      console.log(error);
      this.sendText = 'Send failed!';
      this.submitClass = 'failure';
      this.startTimeout();
    },
    startTimeout() {
      window.setTimeout(() => {
        this.submitClass = '';
        this.sendText = 'Send';
        document.getElementById('btn-submit').disabled = false;
      }, 2000);
    },
    send() {
      this.sendText = 'Sending...';
      document.getElementById('btn-submit').disabled = true;

      const request = new XMLHttpRequest();

      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          this.send_onSuccess();
        } else if (request.readyState === 4) {
          this.send_onError(request.response);
        }
      };

      const name = document.getElementById('input-name').value;
      const subject = document.getElementById('input-subject').value;
      const email = document.getElementById('input-email').value;
      const message = document.getElementById('input-message').value;
      const object = {
        subject,
        text: `[Message from ${name} (${email})]\n\n${message}`,
        access_token: accessToken,
      };

      const params = this.toParams(object);
      request.open('Post', 'https://postmail.invotes.com/send', true);
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      request.send(params);

      return false;
    },

    toParams(object) {
      const formData = Object.keys(object).map(key => {
        const preText = encodeURIComponent(key);
        const postText = encodeURIComponent(object[key]);
        return `${preText}=${postText}`;
      });

      return formData.join('&');
    },
  },

  data() {
    return {
      sendText,
      submitClass,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

#contact {
  background-image: url('../../assets/images/home/home_bg.png');
  position: relative;
}

.img-background {
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 234px;
  }
}

h1 {
  color: $purple-color;
}

.form-control {
  border: none;
  border-radius: 3px;
  box-shadow: none;

  &[type="textarea"] {
    height: auto;
  }
}

label {
  font-weight: 400;
  margin-bottom: 7px;
}

textarea {
  max-width: 768px - 30px;
  min-width: 100%;
  resize: vertical;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
}

.submit {
  position: relative;
  min-height: 40px;
  margin-top: 20px;

  input[type=submit] {
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    background-color: transparent;
    color: $purple-color;
    border: 2px solid $purple-color;
    border-radius: 15px;
    font-family: $moon-font;
    font-size: 18px;
    text-indent: 3px;
    letter-spacing: 3px;
    height: 40px;
    padding: 0 12px;
    line-height: 40px;

    &.success {
      color: $green-color;
      border-color: $green-color;

      &.btn[disabled] {
        opacity: 1;
      }
    }

    &.failure {
      color: $red-color;
      border-color: $red-color;

      &.btn[disabled] {
        opacity: 1;
      }
    }
  }
}

.margin {
  height: 70px;
}

.hashtag {
  display: inline-block;
  border: 1px solid white;
  color: white;
  font-size: 24px;
  padding: 5px 10px;
}

</style>
