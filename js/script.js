/**
 * Triggers the WhatsApp order redirect with pre-filled product details.
 * Configured with VP Herbal's WhatsApp number: +91 9960799652
 */
function orderOnWhatsApp(productName, price) {
    const phoneNumber = "919960799652"; 
    const message = `Hello VP Herbal! I would like to order:\n\n*Product:* ${productName}\n*Price:* ${price}\n\nPlease share payment and shipping details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}