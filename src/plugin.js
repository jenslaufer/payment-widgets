// src/plugin.js

import { createPaymentService } from "./service"

const SERVICE_KEY = Symbol("payment-service")

const PaymentWidgetsPlugin = {
    install: (app, options = {}) => {
        const service = createPaymentService(options)

        app.provide(SERVICE_KEY, service)
        app.config.globalProperties.$paymentService = service

        if (options.autoStart !== false) {
            service.start()
        }
    }
}

export default PaymentWidgetsPlugin
export { SERVICE_KEY }