<template>
  <playground-form :schema="schema" :panels="['editor', 'form', 'state', 'events']" />
</template>

<script>
import schema from '@/schema'

export default {
  data() {
    return { schema: schema.basics }
  },
}
</script>
