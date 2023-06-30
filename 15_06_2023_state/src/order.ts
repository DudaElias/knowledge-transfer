import { OrderCanceled } from "./order-canceled";
import { OrderCheckout } from "./order-checkout";
import { OrderCompleted } from "./order-completed";
import { OrderShipped } from "./order-shipped";
import { OrderState } from "./order-state.interface";

export class Order {
  state!: OrderState
  clientEmail: string
  product: string

  constructor(clientEmail: string, product: string) {
    this.clientEmail = clientEmail
    this.product = product

  }

  process() {
    this.state.process()
  }

  setState(state: OrderState) {
    this.state = state
    this.state.context = this
  }
}
