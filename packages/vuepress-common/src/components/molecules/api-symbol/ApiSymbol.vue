<template>
  <a :href="link"
     :class="`reset-link symbol-container -${theme} ${deprecated ? 'opacity-50' : ''}`"
     :title="name">
    <span><span :class="`symbol ${type}`"/></span>
    <span :class="`overflow-hidden truncate ${deprecated ? 'line-through' : ''}`">
      {{ name }}
    </span>
  </a>
</template>

<script>
export default {
  name: 'ApiSymbol',
  props: {
    item: {
      type: Object,
      default: () => ({
        status: []
      })
    },
    theme: {
      type: String,
      default: 'bubble'
    }
  },

  computed: {
    name () {
      return this.item.symbolName
    },
    type () {
      return this.item.symbolType
    },
    link () {
      return `${this.item.path.replace(/\/\//gi, '/')}.html`
    },
    deprecated () {
      return this.item.status.find(status => status.key === 'deprecated' || status === 'deprecated')
    }
  }
}
</script>
<style lang="css" src="./ApiSymbol.css"></style>
