import { Order } from "./order";
import { OrderState } from "./order-state.interface";

export class OrderShipped implements OrderState {
  context!: Order;

  process() {
    //get shipping info
    this.sendEmail();
  }

  sendEmail(): void {
    console.log('Sending email to ' + this.context.clientEmail + '\n');
    const body = 'Great news! Your Order has been shipped!\n-------------------------------------------------------'
    console.log(body)
  }
}
