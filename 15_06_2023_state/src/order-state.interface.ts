import { Order } from "./order"

export interface OrderState {
  context: Order
  process(): void
}
