'use strict';

export default class MainCtrl {

  constructor($cookies) {

    this.$cookies = $cookies;

    this.$cookies.goods = [];
    this.countGoods = 0;

    this.goods = [
      {
        id: '123123d1dd',
        name: 'test1',
        dscr: 'test good',
        count: 23,
        price: 540
      },
      {
        id: '123123d1df',
        name: 'test2',
        dscr: 'test good0',
        count: 2,
        price: 214
      },
      {
        id: '123123d1dj',
        name: 'test3',
        dscr: 'test good2',
        count: 12,
        price: 642
      },
      {
        id: '123123d1dh',
        name: 'test4',
        dscr: 'test good3',
        count: 5,
        price: 150
      },
    ]
  }

  /**
   *
   * @param id
   */
  inCart(id) {
    this.$cookies.goods.push(id);
    this.countGoods = this.$cookies.goods.length;
  }

}
