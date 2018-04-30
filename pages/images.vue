<template>
    <div class="" style="background-color: #fff;">
      <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
          <h1 class="title">merge-images</h1>
          <br /><br />
          <img src="/images/body.png" width="100px" style="border: 2px solid #ccc; margin: 10px; cursor: pointer;" @click="addToMerge" />
          <img src="/images/eyes.png" width="100px" style="border: 2px solid #ccc; margin: 10px; cursor: pointer;" @click="addToMerge" />
          <img src="/images/mouth.png" width="100px" style="border: 2px solid #ccc; margin: 10px; cursor: pointer;" @click="addToMerge" />
          <img src="/images/eyebrows.png" width="100px" style="border: 2px solid #ccc; margin: 10px; cursor: pointer;" @click="addToMerge" />
          <br /><br />
          <img src="" style="border: 2px solid #ccc;" ref="mergedImage" v-if="arr.length > 0" />
          <br /><br />
          <!-- var arr: {{ arr }}<br /> -->
          <button class="btn btn-success" :disabled="loading" :loading="loading" v-if="arr.length > 0" @click="saveImage">Save Image <i v-bind:class="{'fa fa-spinner fa-spin' : loading}"></i></button>
          <br /><br />
          <div class="progress" style="width: 50%; margin: 0 auto;" v-if="arr.length > 0">
            <div class="progress-bar bg-success" role="progressbar" :style="{width: progress + '%'}" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <br />
          <hr>
          <br />
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center">
          <h3 class="">All current images in storage:</h3><br />
        </div>
      </div>
      <div class="row col-md-8 offset-md-2">
        <!-- <transition-group name="fade" mode="out-in" :duration="2500" tag="div"> -->

          <div v-for="image in loadedAvatarImages" :key="image.name" class="col-md-3 text-center">
            
              <img :src="image.url" alt="avatar image" /><br />
              <small>{{ image.created_at | moment('dddd MMMM Do, h:mm a') }}</small>

          </div>
        <!-- </transition-group> -->

        <!-- {{ loadedAvatarImages }} -->
        </div><!-- /.col-md-8 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
</template>

<script>
if (process.browser) {
  // require('external_library')
  console.log('Browser load')

}
import mergeImages from 'merge-images'
// import mergeImages from '~/plugins/merge-images'
import firebase from 'firebase'
import moment from 'moment'
import Noty from 'noty'
export default {
  layout: 'layoutFront',
  created () {
    if (process.browser) {
      // console.log('The window object:', window)
      return this.$store.dispatch('users/loadedAvatarImages')
    }
  },
  data () {
    return {
      loading: false,
      arr: [],
      progress: 0,
    }
  },
  computed: {
    // loading () {
    //   // return this.$store.getters['loading']
    //   return false
    // },
    loadedAvatarImages() {
      return this.$store.getters['users/loadedAvatarImages']
    }
  },
  methods: {
    mergeImages(arr) {
      // console.log(this.arr)
      // let arr = ['/images/body.png', '/images/eyes.png', '/images/mouth.png', '/images/eyebrows.png']
      if (process.browser) {
        mergeImages(this.arr)
          .then(
            // console.log('done')
            // b64 => console.log(b64)
            // b64 => document.querySelector('img').src = b64
            b64 => this.$refs.mergedImage.src = b64
          )
      }
    },
    addToMerge(event) {
      // console.log('addToMerge')
      // console.log(event.target.src)
      const path = event.target.getAttribute('src')
      // console.log(path)

      // Remove image if present
      if (this.arr.includes(path)) {
        const index = this.arr.indexOf(path)
        this.arr.splice(index, 1)
      } else { // Add image if not present
          // this.arr.push(path)
          if (path == '/images/body.png') {
            this.arr.unshift(path)
          } else {
            this.arr.push(path)
          }
      }
      this.mergeImages()
    },
    saveImage() {
      console.log('saveImage')
      // this.$store.dispatch('setLoading', true, { root: true })
      this.loading = true

      // Save image in Firebase Cloud Storage
      const now = moment().unix()
      let storageRef = firebase.storage().ref('/images/avatars/' + now)
      console.log(storageRef)
      let image = this.$refs.mergedImage.src

      // storageRef.putString(image, 'data_url').then(function(snapshot) {
      //   // Store reference in firebase
      //   console.log(snapshot)
      //   const newImageKey = firebase.database().ref().child('/avatar_images/').push().key
      //   firebase.database().ref('/avatar_images/' + newImageKey).set({
      //     name: snapshot.metadata.name,
      //     url: snapshot.downloadURL,
      //     created_at: now,
      //   })
      //   console.log('Uploaded a data_url string!')
      //   commit('setLoading', false, { root: true })
      //   new Noty({type: 'success', text: 'Successfully uploaded image!', timeout: 5000, theme: 'metroui'}).show()
      // })

      var uploadTask = storageRef.putString(image, 'data_url')
      // uploadTask.on('state_changed', function(snapshot){
      uploadTask.on('state_changed', (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + this.progress + '% done')
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused')
            break
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running')
            break
        }
      // }, function(error) {
      }, (error) => {
          // Handle unsuccessful uploads
          // this.$store.dispatch('setLoading', false, {root: true})
          this.loading = false
      // }, function() {
      }, () => {
          // Handle successful uploads on complete
          console.log(uploadTask.snapshot)
          const newImageKey = firebase.database().ref().child('/avatar_images/').push().key
          firebase.database().ref('/avatar_images/' + newImageKey).set({
            name: uploadTask.snapshot.metadata.name,
            url: uploadTask.snapshot.downloadURL,
            created_at: now,
          })
          console.log('Uploaded a data_url string!')
          // this.$store.dispatch('setLoading', false, { root: true })
          this.loading = false
          new Noty({type: 'success', text: 'Successfully uploaded image!', timeout: 5000, theme: 'metroui'}).show()
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
  background-color: orange;
}
.fade-enter, .fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
