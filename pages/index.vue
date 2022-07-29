<template class="background">
  <div class="background">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-8">
          <b-form @submit="onSubmit" @reset="onReset">
            <div class="text-subheading">Personal Information</div>
            <div class="text-note">This information will be displayed publicly so be careful what you share.</div>

            <div class="form-group mt-3">
              <label class="form-check-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Your Name"
                v-model="name"
              >
            </div>
            <div class="form-group mt-3">
              <label class="form-check-label">Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="yourmail@gmail.com"
                v-model="mail"
              >
            </div>
            <div class="form-group mt-3">
              <label class="form-check-label">Date of Birth</label>
              <input
                type="date"
                class="form-control"
                placeholder="dd/mm/yy"
                v-model="date"
              >
            </div>
            <div class="form-group mt-3">
              <label class="form-check-label">Address</label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Street Address"
                v-model="address"
              >
              </textarea>
            </div>
            <div class="form-group mt-3">
              <label class="form-check-label">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="e.g 823 4567 8901"
                v-model="phone"
              >
            </div>
            <div class="form-group mt-3">
              <label class="form-check-label">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Your Password"
                v-model="password"
              >
              <div class="text-note">Minimum of 6 characters, with upper & lower case, a number and a symbol.</div>
            </div>
            <br>
            <hr>
            <button
              type="reset"
              class="btn btn-cancel">
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-submit">
              Submit
            </button>
            <div class="d-flex justify-content-end">
              <b-button
              class="btn btn-auto-generate">
              Auto Generate
              </b-button>
            </div>
          </b-form>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-3">
          <div class="card py-3" v-for="person in list" :key="person.id">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body text-center">
              <div class="text-note">Hi, My name is</div>
              <div class="text-heading">
                {{ person.name.first }} {{ person.name.last }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      list:[],
      name:'',
      mail:'',
      date:'',
      address:'',
      phone:'',
      password:''
    }
  },
  async asyncData( {$apiController}) {
    var response = await $apiController.getData('').catch(err => console.log(err))
    console.log('res', response)
    return {
      list:response !== undefined ? response.results : []
    }
  },
  method: {
    onSubmit(event) {
      event.preventDefault()
      let formData = {
        name: {
          first:this.name,
          last:this.name,
        }
      }

      this.list.push(formData)
      // console.log('form', formData)
    },
    onReset(event) {
      event.preventDefault()
    }
  }
}
</script>
