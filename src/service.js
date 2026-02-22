// src/service.js

export const createPaymentService = (options = {}) => {
    let started = false

    const start = () => {
        if (started) return
        started = true
        console.log("Payment service started")
        // z.B. Stripe init, polling, telemetry etc.
    }

    const stop = () => {
        started = false
        console.log("Payment service stopped")
    }

    return {
        start,
        stop,
        get started() {
            return started
        }
    }
}