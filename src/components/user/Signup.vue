<template>
  <div class="signup">
    <div class="header">
      <h1 class="signup__header">Skapa konto</h1>
    </div>
    <div class="signup-form">
      <form @submit.prevent="onSubmit" autocomplete="off">
        <div class="inputbox" :class="{ invalid: $v.forminput.firstname.$error }">
          <input
            class="inputbox__textinput"
            type="text"
            id="firstname"
            placeholder=" "
            @blur="$v.forminput.firstname.$touch()"
            v-model="forminput.firstname"
          />
          <label class="inputbox__label" for="firstname">Förnamn</label>
        </div>
        <div class="inputbox" :class="{ invalid: $v.forminput.lastname.$error }">
          <input
            class="inputbox__textinput"
            type="text"
            id="lastname"
            placeholder=" "
            @blur="$v.forminput.lastname.$touch()"
            v-model="forminput.lastname"
          />
          <label class="inputbox__label" for="lastname">Efternamn</label>
        </div>
        <div class="inputbox" :class="{ invalid: $v.forminput.email.$error }">
          <input
            class="inputbox__textinput"
            type="email"
            id="email"
            placeholder=" "
            @blur="$v.forminput.email.$touch()"
            v-model="forminput.email"
          />
          <label class="inputbox__label" for="email">Epost</label>
        </div>
        <div class="inputbox" :class="{ invalid: $v.forminput.username.$error }">
          <input
            class="inputbox__textinput"
            type="text"
            id="username"
            placeholder=" "
            @blur="$v.forminput.username.$touch()"
            v-model="forminput.username"
          />
          <label class="inputbox__label" for="username">Användarnamn</label>
        </div>
        <div class="inputbox" :class="{ invalid: $v.forminput.password.$error }">
          <input
            class="inputbox__textinput"
            type="password"
            id="password"
            placeholder=" "
            @blur="$v.forminput.password.$touch()"
            v-model="forminput.password"
            @focus="log"
          />
          <label class="inputbox__label" for="password">Lösenord</label>
        </div>
        <div class="inputbox" :class="{ invalid: $v.forminput.confirmPassword.$error }">
          <input
            class="inputbox__textinput"
            type="password"
            id="confirm-password"
            placeholder=" "
            @blur="$v.forminput.confirmPassword.$touch()"
            v-model="forminput.confirmPassword"
          />
          <label class="inputbox__label" for="confirm-password">Bekräfta lösenord</label>
        </div>
        <div class="submitbox">
          <div class="submitbox__alertcontainer" v-if="$v.forminput.$anyError">
            <alert-box alertType="warning">
              <ul class="alertlist">
                <transition-group name="fade" mode="out-in" tag="div">
                  <li
                    class="alertmessage"
                    key="firstname-required"
                    v-if="$v.forminput.firstname.$error && !$v.forminput.firstname.required"
                  >Du måste fylla i ett förnamn.</li>
                  <li
                    class="alertmessage"
                    key="firstname-valid"
                    v-if="$v.forminput.firstname.$error && !$v.forminput.firstname.validName"
                  >Du har använt tecken som inte är tillåtna i förnamn.</li>
                  <li
                    class="alertmessage"
                    key="lastname-required"
                    v-if="$v.forminput.lastname.$error && !$v.forminput.lastname.required"
                  >Du måste fylla i ett efternamn.</li>
                  <li
                    class="alertmessage"
                    key="lastname-valid"
                    v-if="$v.forminput.lastname.$error && !$v.forminput.lastname.validName"
                  >Du har använt tecken som inte är tillåtna i efternamn.</li>
                  <li
                    class="alertmessage"
                    key="email-required"
                    v-if="$v.forminput.email.$error && !$v.forminput.email.required"
                  >Du måste fylla i epost.</li>
                  <li
                    class="alertmessage"
                    key="email-valid"
                    v-if="$v.forminput.email.$error && !$v.forminput.email.email"
                  >Du måste ange en gilltig epostadress.</li>
                  <li
                    class="alertmessage"
                    key="email-unique"
                    v-if="$v.forminput.email.$error && !$v.forminput.email.unique"
                  >Det finns redan ett konto med denna epostadress.</li>
                </transition-group>
              </ul>
            </alert-box>
          </div>
          <transition name="fade">
            <button
              class="submitbox__button"
              type="submit"
              v-if="!$v.forminput.$invalid"
            >Skapa konto</button>
          </transition>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minValue,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
import axios from "axios";
import alertBox from "../ui/AlertBox";

export default {
  data() {
    return {
      forminput: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        firstname: "",
        lastname: ""
      }
    };
  },
  components: {
    alertBox
  },
  validations: {
    forminput: {
      email: {
        required,
        email,
        unique: val => {
          if (val === "") return true;
          return axios
            .get('/users.json?orderBy="email"&equalTo="' + val + '"')
            .then(res => {
              return Object.keys(res.data).length === 0;
            });
        }
      },
      username: {
        required,
        minLength: minLength(4),
        validChars: val => {
          if (/\W|_/.test(val)) {
            return false;
          }
          return true;
        },
        unique: val => {
          if (val === "") return true;
          return axios
            .get('/users.json?orderBy="username"&equalTo="' + val + '"')
            .then(res => {
              return Object.keys(res.data).length === 0;
            });
        }
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs("password")
      },
      firstname: {
        required,
        validName: val => {
          if (val === "") return true;
          if (/^[-\sa-zA-Z]+$/.test(val)) {
            return true;
          }
          return false;
        }
      },
      lastname: {
        required,
        validName: val => {
          if (val === "") return true;
          if (/^[-\sa-zA-Z]+$/.test(val)) {
            return true;
          }
          return false;
        }
      }
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.forminput.email,
        username: this.forminput.username,
        password: this.forminput.password,
        firstname: this.forminput.firstname,
        lastname: this.forminput.lastname
      };
      //this.$store.dispatch("signup", formData);
    },
    log(){
      console.log(this.$v.forminput); //check wich input has error and if it also is NOT empty.
    }
  }
};
</script>

<style lang="scss">
$color-primary: rgb(60, 107, 236);

.signup {
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
}

.header {
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.signup-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.inputbox {
  margin-bottom: 1rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  &__label {
    font-size: 1.4rem;
    color: #4e4e4e;
    margin: 0 0.3rem;
    transform: translateY(-5.4rem);
    transition: all 0.2s;
    z-index: 1;
  }

  &__textinput {
    z-index: 2;
    flex: 1;
    font-size: 1.6rem;
    font: inherit;
    padding: 0.7rem 1.3rem 0.6rem;
    box-sizing: border-box;
    border: none;
    border-bottom: 0.1rem solid $color-primary;
    border-radius: 2px;
    background-color: transparent;
    display: block;

    &:focus {
      outline: none;
      padding: 0.7rem 1.3rem 0.4rem;
      border-bottom: 0.3rem solid $color-primary;
    }
  }

  &__textinput:placeholder-shown + &__label {
    transform: translate(0.9rem, -2.8rem);
  }
}

.submitbox {
  &__alertcontainer {
    margin-bottom: 1rem;
  }

  &__button {
    margin-top: 1rem;
    border: 1px solid $color-primary;
    border-radius: 3px;
    color: $color-primary;
    padding: 1rem 2rem;
    font: inherit;
    font-size: 1.6rem;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: $color-primary;
      color: white;
    }
  }
}

.alertmessage {
  margin-left: 2rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}

.invalid input {
  background-color: rgba(255, 0, 0, 0.2);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-active {
  opacity: 0;
}

.fade-move {
  transition: transform 0.3s;
}
</style>