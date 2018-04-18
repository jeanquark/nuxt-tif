import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import Noty from 'noty'// https://github.com/needim/noty
import 'noty/lib/noty.css'
import 'noty/lib/themes/metroui.css'

function toast ({title, message, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return new Noty({text: message, timeout: 5000, type, theme: 'metroui', maxVisible: 10}).show()
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
