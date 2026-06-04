use('ecommerce');

// db.products.deleteOne({ name: 'Wireless Mouse' });

db.orders.deleteMany({ status: "Delivered" })

db.orders.find()