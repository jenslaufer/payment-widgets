<template>
    <slot name="paid" v-if="hasPaid" />
    <slot name="unpaid" v-else />
</template>
<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    extensionId: {
        type: Number,
        required: true
    }
})

import ExtPay from 'extpay'

const extpay = ExtPay(props.extensionId)
const hasPaid = ref(false)

const openPaymentPage = () => extpay.openPaymentPage()

onMounted(async () => {
    const user = await extpay.getUser().catch(() => null)
    if (user && user.paidAt) {
        hasPaid.value = true
    }
})
</script>