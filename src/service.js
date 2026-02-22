// src/service.js
import ExtPay from 'extpay';

export const createPaymentService = ({ extensionId } = {}) => {
    let started = false
    const extpay = ExtPay(extensionId)

    const start = () => {
        if (started) return

        extpay.startBackground();
    }

    const stop = () => {
        started = false
        console.log("Payment service stopped")

        extpay.stopBackground();
    }

    return {
        start,
        stop,
        get started() {
            return started
        }
    }
}