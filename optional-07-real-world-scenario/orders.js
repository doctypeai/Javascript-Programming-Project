function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

let orders = [];

function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu' //sebagai status awal
  };
  orders.push(newOrder);
}

function updateOrderStatus(orderId, statusBaru) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = statusBaru;
  }
}

function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
