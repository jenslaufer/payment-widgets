<template>
    <div v-if="stripeLoaded">
        <StripeElements :stripe-key="stripeKey" :instance-options="stripeOptions" :elements-options="elementsOptions"
            ref="elementsComponent">
            <StripeElement type="payment" :options="paymentElementOptions" ref="paymentComponent" />
        </StripeElements>
        <button @click="handleSubmit" :disabled="buttonDisabled" :class="buttonClass">
            Jetzt bezahlen
        </button>
    </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue"
import { loadStripe } from "@stripe/stripe-js"
import { StripeElements, StripeElement } from "vue-stripe-js"
import axios from "axios"

const PAYMENT_PERFORMED_EVENT = "paymentPerformed"

const emit = defineEmits([PAYMENT_PERFORMED_EVENT])

const props = defineProps({
    apiUrl: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    units: {
        type: Number,
        required: true,
    },
    returnUrl: {
        type: String,
        required: true,
    },
    metadata: {
        type: Object,
        default: () => ({}),
    },
    buttonDisabled: {
        type: Boolean,
        default: true,
    },
    stripeKey: {
        type: String,
        required: true,
    },
    buttonClass: {
        type: String,
        required: false,
        default: 'w-full mt-6 text-white bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150'
    },
})

const stripeOptions = ref({
})
const elementsOptions = ref({
    mode: "payment",
    amount: props.amount,
    currency: props.currency,
    appearance: {
        theme: "flat",
    },
})
const paymentElementOptions = ref({
})
const stripeLoaded = ref(false)
const clientSecret = ref("")

// Define component refs
const elementsComponent = ref()
const paymentComponent = ref()

onBeforeMount(async () => {
    await loadStripe(props.stripeKey || "")
    stripeLoaded.value = true

    try {
        const response = await axios.post(props.apiUrl, {
            amount: props.amount * 100,
            currency: props.currency,
            metadata: props.metadata,
            productName: props.productName,
            productDescription: props.productDescription,
            units: props.units,
            email: props.email,
        })
        clientSecret.value = response.data.clientSecret
    } catch (error) {
        console.error("Failed to create payment intent:", error)
    }
})

async function handleSubmit() {
    const stripeInstance = elementsComponent.value?.instance
    const elements = elementsComponent.value?.elements

    if (stripeInstance && elements) {
        await elements.submit();

        const { error } = await stripeInstance.confirmPayment({
            elements,
            clientSecret: clientSecret.value,
            confirmParams: {
                return_url: props.returnUrl,
            },
        });

        if (error) {
            console.log(error)
        } else {
            emit(PAYMENT_PERFORMED_EVENT);
        }
    }
}
</script>
