import { Order } from "./order";
import { OrderState } from "./order-state.interface";

export class OrderCompleted implements OrderState {
  context!: Order;

  process() {
    this.sendEmail();
  }

  sendEmail(): void {
    console.log('Sending email to ' + this.context.clientEmail + '\n');
    const body = 'Your order has been completed, please rate our service below\n-------------------------------------------------------'
    console.log(body)
  }
}
