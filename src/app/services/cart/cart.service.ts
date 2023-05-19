import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)

    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(food));
    console.log("Agregado al carrito: ", this.cart.items)
  }

  removeItem(foodId: number) {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changeQuantity(foodId: number, newQuantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)

    if (!cartItem) return;

    cartItem.quantity = newQuantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}