<template>
    <div class="rounded-xl border border-gray-200 p-4">
        <h2 class="text-xl font-semibold mb-3">Bestelldetails</h2>
        <div class="grid grid-cols-2 gap-2">
            <span class="text-gray-600">Produkt:</span>
            <span class="text-gray-800 font-medium">{{ productName }}</span>
            <span class="text-gray-600">Beschreibung:</span>
            <span class="text-gray-800 font-medium text-sm">{{ productDescription }}</span>

            <span class="text-gray-600">Anzahl:</span>
            <span class="text-gray-800 font-medium">{{ units }}</span>

            <span class="text-gray-600">Preis:</span>
            <span class="text-gray-800 font-medium">{{ amount }} {{ currency ==
                "eur" ? "€" : currency.toUpperCase() }}</span>
            <div class="grid grid-cols-2 gap-2">
            </div>
        </div>
        <div class="mt-6 pt-6 border-gray-200">
            <h3 class="text-lg font-semibold mb-4">Rechnungsadresse</h3>
            <div class="grid grid-cols-1 gap-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name oder Firma</label>
                    <input type="text" id="name" v-model="receiverAddress.name"
                        :class="['w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                            v$.name.$error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required />
                    <div v-if="v$.name.$error" class="mt-1 text-sm text-red-600">
                        <span v-if="v$.name.required.$invalid">Name ist erforderlich</span>
                        <span v-else-if="v$.name.minLength.$invalid">Name muss mindestens 2 Zeichen haben</span>
                    </div>
                </div>

                <div>
                    <label for="vatId" class="block text-sm font-medium text-gray-700 mb-1">USt-IdNr.
                        (optional)</label>
                    <input type="text" id="vatId" v-model="receiverAddress.vatId"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label for="line1" class="block text-sm font-medium text-gray-700 mb-1">Adresse Zeile 1</label>
                    <input type="text" id="line1" v-model="receiverAddress.line1"
                        :class="['w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                            v$.line1.$error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required />
                    <div v-if="v$.line1.$error" class="mt-1 text-sm text-red-600">
                        <span v-if="v$.line1.required.$invalid">Adresse ist erforderlich</span>
                        <span v-else-if="v$.line1.minLength.$invalid">Adresse muss mindestens 5 Zeichen haben</span>
                    </div>
                </div>
                <div>
                    <label for="line2" class="block text-sm font-medium text-gray-700 mb-1">Adresse Zeile 2</label>
                    <input type="text" id="line2" v-model="receiverAddress.line2"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label for="city" class="block text-sm font-medium text-gray-700 mb-1">Stadt</label>
                        <input type="text" id="city" v-model="receiverAddress.city"
                            :class="['w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                                v$.city.$error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required />
                        <div v-if="v$.city.$error" class="mt-1 text-sm text-red-600">
                            <span v-if="v$.city.required.$invalid">Stadt ist erforderlich</span>
                            <span v-else-if="v$.city.minLength.$invalid">Stadt muss mindestens 2 Zeichen haben</span>
                        </div>
                    </div>
                    <div>
                        <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1">PLZ</label>
                        <input type="text" id="postalCode" v-model="receiverAddress.postalCode"
                            :class="['w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                                v$.postalCode.$error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required />
                        <div v-if="v$.postalCode.$error" class="mt-1 text-sm text-red-600">
                            <span v-if="v$.postalCode.required.$invalid">PLZ ist erforderlich</span>
                            <span v-else-if="v$.postalCode.minLength.$invalid">PLZ muss mindestens 4 Zeichen
                                haben</span>
                        </div>
                    </div>
                    <div>
                        <label for="country" class="block text-sm font-medium text-gray-700 mb-1">Land</label>
                        <select id="country" v-model="receiverAddress.country"
                            :class="['w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2',
                                v$.country.$error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500']" required>
                            <option value="">Bitte wählen</option>
                            <option value="Deutschland">Deutschland</option>
                            <option value="Österreich">Österreich</option>
                            <option value="Schweiz">Schweiz</option>
                            <option value="Frankreich">Frankreich</option>
                            <option value="Italien">Italien</option>
                            <option value="Spanien">Spanien</option>
                            <option value="Niederlande">Niederlande</option>
                            <option value="Belgien">Belgien</option>
                        </select>
                        <div v-if="v$.country.$error" class="mt-1 text-sm text-red-600">
                            <span v-if="v$.country.required.$invalid">Land ist erforderlich</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button @click="handle" :disabled="v$.$invalid"
            class="w-full mt-6 text-white bg-red-600 disabled:bg-red-400 hover:bg-red-700 focus:bg-red-700 font-semibold py-3 rounded-md shadow-none transition-colors duration-150">
            {{ buttonLabel }}
        </button>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import axios from 'axios';

const VALID_INVOICE_DATA = 'validInvoiceData';

const emits = defineEmits([VALID_INVOICE_DATA]);

const props = defineProps({
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
    senderName: {
        type: String,
        required: true
    },
    senderLine1: {
        type: String,
        required: true
    },
    senderLine2: {
        type: String,
        required: false
    },
    senderPostalCode: {
        type: String,
        required: true
    },
    senderCity: {
        type: String,
        required: true
    },
    senderState: {
        type: String,
        required: false
    },
    senderCountry: {
        type: String,
        required: false
    },
    senderVatId: {
        type: String,
        required: false
    },
    buttonLabel: {
        type: String,
        required: true,
        default: 'Next >>'
    }
});

const receiverAddress = ref({
    name: '',
    line1: '',
    line2: '',
    city: '',
    postalCode: '',
    country: '',
    state: '',
    vatId: '',
});

const rules = {
    name: { required, minLength: minLength(2) },
    line1: { required, minLength: minLength(5) },
    line2: {},
    city: { required, minLength: minLength(2) },
    postalCode: { required, minLength: minLength(4) },
    country: { required },
    vatId: {},
}

const v$ = useVuelidate(rules, receiverAddress)

onMounted(() => {
    v$.value.$touch();
});

const handle = async () => {
    await v$.value.$validate();
    if (!v$.value.$error) {
        try {
            const invoiceData = {
                sender: {
                    name: props.senderName,
                    line1: props.senderLine1,
                    line2: props.senderLine2 || "",
                    postalCode: props.senderPostalCode,
                    city: props.senderCity,
                    state: props.senderState || "",
                    vatId: props.senderVatId || ""
                },
                receiver: receiverAddress.value,
                invoice_items: [
                    {
                        units: props.units,
                        unit_price: props.amount,
                        description: props.productDescription,
                        currency: props.currency,
                        tax_rate: 19.0
                    }
                ]
            };

            const response = await axios.post(`${import.meta.env.VITE_API_BASE}/invoice`, invoiceData);

            console.log('Invoice created successfully:', response.data);
            emits(VALID_INVOICE_DATA, response.data);
        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    }
}
</script>