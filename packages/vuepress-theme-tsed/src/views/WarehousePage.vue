<template>
  <Warehouse :url="this.$site.themeConfig.warehouseUrl || 'https://api.tsed.io/rest/warehouse'"
             :initial-plugins="this.$site.themeConfig.warehouseItems">
    <Content slot-key="warehouse-header"/>
  </Warehouse>
</template>
<script>

import { Warehouse } from '@tsed/vuepress-common'

export default {
  name: 'WarehousePage',
  components: {
    Warehouse
  }
}
</script>