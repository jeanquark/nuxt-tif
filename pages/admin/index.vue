<template>
  <v-layout>
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="mt-4">
        <v-card-title primary-title class="text-md-center">
          <div class="text-xs-center">
            <v-card-text class="text-md-center">
              <h3 class="headline mb-0">Administration TIF</h3>
            </v-card-text>
          </div>
        </v-card-title>
        <v-card-text>
          <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsa rerum sed repellendus commodi laborum debitis impedit cupiditate, eaque earum sequi unde perferendis dolore ullam iste omnis accusantium in hic.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>

      <v-card class="mt-4">
        <v-card-title primary-title class="text-md-center">
          <!-- <div class=""> -->
            <h3 class="headline mb-0">Toutes les tâches</h3>
          <!-- </div> -->
        </v-card-title>
        <v-card-text>
          <v-data-table
          :headers="headers"
          :items="loadedTasks"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.index + 1 }}</td>
          <td>{{ props.item.title }}</td>
          <td>{{ props.item.description }}</td>
          <!-- <td>{{ props.item.users }}</td> -->
          <td>
            <span v-for="(user, index) in props.item.users">{{user}}<span v-if="index < props.item.users.length - 1">,&nbsp;</span></span>
          </td>
          <!-- <td>{{ props.item.status }}</td> -->
          <td><v-chip :color="props.item.status.class" text-color="white" style="height: 26px;">{{ props.item.status.name }}</v-chip></td>
          <!-- <td>{{ props.item.progress }}</td> -->
          <td><v-progress-linear :value="props.item.progress" height="15" :color="props.item.status.class"></v-progress-linear></td>
          <td>{{ props.item._created_at | moment("DD MMMM YYYY") }}</td>
          <td>{{ props.item._updated_at }}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
              </td>
          </template>
        </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  // import moment from 'vue-moment'
  import moment from '~/plugins/vue-moment'
  import 'moment/locale/fr'
  export default {
    layout: 'layoutBack',
    created () {
        this.$store.dispatch('tasks/loadedTasks')
    },
    data () {
      return {
        headers: [
            { text: 'N°', align: 'left', sortable: false, value: 'id' },
            { text: 'Titre', value: 'title' },
            { text: 'Description', value: 'description' },
            { text: 'Responsable', value: 'user' },
            { text: 'Statut', value: 'status' },
            { text: 'Progression', value: 'progress' },
            { text: 'Créé le', value: '_created_at'},
            { text: 'Dernière modification', value: '_updated_at' },
            { text: 'Actions', sortable: false }
          ]
      }
    },
    computed: {
      loadedTasks () {
        return this.$store.getters['tasks/loadedTasks']
      }
    }
  }
</script>