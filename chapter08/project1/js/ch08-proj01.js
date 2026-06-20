let tax_rate = 0.10;
let shipping_threshold = 1000;

try {
   const tax_rate_input = prompt('Enter tax rate (0.10)');
   if (tax_rate_input !== null && tax_rate_input !== '') {
      tax_rate = Number(tax_rate_input);
   }
} catch (error) {
}

try {
   const shipping_threshold_input = prompt('Enter shipping threshold (1000)');
   if (shipping_threshold_input !== null && shipping_threshold_input !== '') {
      shipping_threshold = Number(shipping_threshold_input);
   }
} catch (error) {
}

let subtotal = 0;

for (let i = 0; i < cart.length; i++) {
   const item = cart[i];
   const total = calculateTotal(item.quantity, item.product.price);
   subtotal += total;
   outputCartRow(item, total);
}

const tax = subtotal * tax_rate;
const shipping = subtotal > shipping_threshold ? 0 : 40;
const grandTotal = subtotal + tax + shipping;

document.write('<tr class="totals">');
document.write('<td colspan="4">Subtotal</td>');
document.write('<td>$' + subtotal.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class="totals">');
document.write('<td colspan="4">Tax</td>');
document.write('<td>$' + tax.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class="totals">');
document.write('<td colspan="4">Shipping</td>');
document.write('<td>$' + shipping.toFixed(2) + '</td>');
document.write('</tr>');

document.write('<tr class="totals">');
document.write('<td colspan="4" class="focus">Grand Total</td>');
document.write('<td class="focus">$' + grandTotal.toFixed(2) + '</td>');
document.write('</tr>');