import { Order } from "./order";
import { OrderCheckout } from "./order-checkout";
import { OrderCompleted } from "./order-completed";
import { OrderShipped } from "./order-shipped";


const order = new Order('client1@gmail.com', 'cool product 01')

order.setState(new OrderCheckout())
order.process()

order.setState(new OrderShipped())
order.process()

order.setState(new OrderCompleted())
order.process()
