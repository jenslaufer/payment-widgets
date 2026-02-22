import './style.css'
import PaymentWidgetsPlugin from "./plugin"

export default PaymentWidgetsPlugin

export { default as PaymentDetails } from './widgets/PaymentDetails.vue'
export { default as ExtPay } from './widgets/ExtPay.vue'
export { default as Stripe } from './widgets/Stripe.vue'