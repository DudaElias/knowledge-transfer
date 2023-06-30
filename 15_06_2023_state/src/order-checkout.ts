import { Order } from "./order";
import { OrderState } from "./order-state.interface";

export class OrderCheckout implements OrderState {
  context!: Order;

  process() {
    //notify system x
    //notify system y
    //send notification to logistic company
    this.sendEmail();
  }

  sendEmail(): void {
    console.log('Sending email to ' + this.context.clientEmail + '\n');
    const body = `Your Order was placed successfully! Product: ${ this.context.product }\n-------------------------------------------------------` 
    console.log(body)
  }
}