import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * get element attributes
 * @param {Element} element click dom
 * @returns 
 */
function getFileInfo(element, options = {}) {
  const row = clickDom.getAttribute('_vc-row')
  const col = clickDom.getAttribute('_vc-col')
  const filePath = clickDom.getAttribute('_vc-path')
  return {
    row,
    col,
    filePath
  }
}

function initInspector(options = {}) {
  const taregtKey = options.key || 'MetaLeft'
  let key = ""
  document.addEventListener('keydown', (e) => {
    key = e.code
  })
  document.addEventListener('click', (e) => {
    if (key === taregtKey) {
      e.preventDefault()
      e.stopImmediatePropagation()
      e.stopPropagation()
      alert('实现了点击事件')
      const clickDom = e.target
      console.log(clickDom)
      const row = clickDom.getAttribute('_vc-row')
      const col = clickDom.getAttribute('_vc-col')
      const filePath = clickDom.getAttribute('_vc-path')
      // console.log(clickDom.getAttributes())
      console.log(
        'row', row,
        'col', col,
        'path', filePath
      )
    }
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')

initInspector()
