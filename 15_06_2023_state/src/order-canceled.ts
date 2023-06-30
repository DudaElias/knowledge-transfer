import { Order } from "./order";
import { OrderState } from "./order-state.interface";

export class OrderCanceled implements OrderState {
  context!: Order;

  process() {
    //if canceled before shipping -> money back guaranty
    //call payment system
    //if canceled after shipping -> generate shipping label
    this.sendEmail();
  }

  sendEmail(): void {
    console.log('Sending email to ' + this.context.clientEmail + '\n');
    const body = 'Your order ### has been canceled!\n-------------------------------------------------------'
    console.log(body)
  }
}
