<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="person"
                name="username"
                label="Username"
                v-model="username"
                :rules="usernameRules"
                :counter="10"
                required
                autofocus
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="passwordRules"
                :counter="10"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              flat
              :disabled="!valid"
              @click.native="login()"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import store from '@/store'
  export default {
    data: () => ({
      username: '',
      password: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v.length >= 4) || 'Username must have at least 4 letters.'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      valid: false
    }),
    methods: {
      goTo (path) {
        this.$router.push({ name: path })
      },
      login () {
        if (this.$refs.form.validate()) {
          /* this.$http.post('http://somehost/user/login', {
            username: this.username,
            password: this.password
          }).then(function (response) {
            if (response.status === 200 && 'token' in response.body) {
              this.$session.start()
              this.$session.set('jwt', response.body.token)
              Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
              this.goTo('home')
            }
          }, function (err) {
            console.log('err', err)
          }) */
          this.$session.start()
          this.$session.set('jwt', 'kjhis76si8juyukser87g9ihksif7u87')
          store.dispatch('setAuth', true)
          store.dispatch('setToken', 'kjhis76si8juyukser87g9ihksif7u87')
          var profile = {
            name: 'Aga Atmaja',
            photo: 'https://hrmlabsv2.s3.ap-southeast-1.amazonaws.com/internal/images/employees/5ae289d216472f28851b6eb2.png?8905',
            phone: '081213551169',
            email: 'aga@gmail.com',
            company: 'agacat',
            position: 'Developer'
          }
          store.dispatch('setProfile', profile)
          this.goTo('home')
        }
      }
    }
  }
</script>