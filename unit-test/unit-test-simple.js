/*
const orderTotal = (order) => {
	const totalNormalItems =
		order.items
			.filter(x => !x.shipping)
			.reduce((prev, cur) => prev + cur.quantity * cur.price, 0)
	const shippingItem = order.items.find( x => !!x.shipping )
	const shipping = totalNormalItems > 1000 ? 0 : shippingItem.price
	return totalNormalItems + shipping
}
*/

function orderTotal(order) {
	return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

if(orderTotal({
	items: [
		{name: 'Dragon candy', price: 2, quantity: 3}
	]
}) !== 6) {
	throw new Error('Check fail: Quantity')
}

if(orderTotal({
	items: [
		{name: 'Dragon candy', price: 3}
	]
}) !== 3) {
	throw new Error('Check fail: no quantity specified')
}


if(orderTotal({
	items: [
		{ name: 'Dragon food', price: 8, quantity: 1},
		{ name: 'Dragon cage(small)', price: 800, quantity: 1}
	]
}) !== 808){
	throw new Error('Check fail: Happy path (Example 1)')
}

if(orderTotal({
	items: [
		{ name: 'Dragon collar', price: 20, quantity: 1},
		{ name: 'Dragon chew toy', price: 40, quantity: 1}
	]
}) !== 60){
	throw new Error('Check fail: Happy path (Example 2)')
}
