import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  categories= [
    {
      id: 1, name: 'Electronics',img_url:'assets/images/products/image_sm1.png', sub_cat: 'TV, Fridge, Iron, Phone', date_created: Date.now()
    },
    {
      id: 2, name: 'Home accessories',img_url:'assets/images/products/image_sm2.png', sub_cat: '-', date_created: Date.now()  
    },
    {
      id: 3, name: 'Gadgets',img_url:'assets/images/products/image_sm1.png', sub_cat: 'Bag, Keys, Glass', date_created: Date.now()  
    },
    {
      id: 4, name: 'Rado Watch',img_url:'assets/images/products/image_sm2.png', sub_cat: '', date_created: Date.now()  
    },
  ];
  customerData = [
    {
      id: '1',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      email: 'ishaqhawawu66@gmail.com',
      created_at: Date.now(),
      phone: '07066091112',
      rank: 'Loyalty',
      order_count: 523,
      status: 'Active',
    },
    {
      id: '2',
      firstname: '-',
      lastname: '',
      email: 'tijanialiy@gmail.com',
      created_at: Date.now(),
      phone: '-',
      rank: '-',
      order_count: '-',
      status: 'Inactive',
    },
    {
      id: '3',
      firstname: 'Aliu',
      lastname: 'Tijani',
      email: 'rasmusjoeelm@gmail.com',
      created_at: Date.now(),
      phone: '08095577527',
      rank: 'Loyalty',
      order_count: 205,
      status: 'Active',
    },
    {
      id: '4',
      firstname: 'Henry',
      lastname: 'Essien',
      email: 'henryvictor161@gmail.com',
      created_at: Date.now(),
      phone: '+2348060240322',
      rank: 'Loyalty',
      order_count: 112,
      status: 'Active',
    },
    {
      id: '5',
      firstname: 'Benneth',
      lastname: 'Akintolure',
      email: 'bennettanderson8@gmail.com',
      created_at: Date.now(),
      phone: '07063012438',
      rank: 'Loyalty',
      order_count: '-',
      status: 'Inactive',
    },
  ];
  product = [
    {
      id: 1,
      sku: 'SHI-65483',
      product_name: 'Oculus VR',
      price: 999.29,
      qty: 1,
      disc: 5,
    },
    {
      id: 2,
      sku: 'SHI-65483',
      product_name: 'Note Diaries',
      price: 999.29,
      qty: 2,
      disc: 5,
    },
    {
      id: 3,
      sku: 'SHI-65483',
      product_name: 'Apple iPhone 13',
      price: 999.29,
      qty: 3,
      disc: 5,
    },
  ];

  orderData = [
    
    {
      id: '1',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Zcross - Lekki',
      order_type: 'Mathew',
      status: 'Complete',
      products: [
        {
          id: 1, sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
        },
        {
          id: 2, sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
        },
        {
          id: 3, sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
        },
      ],
    },
    {
      id: '2',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'DJI MAcvic Quadcopter, Premier',
      amount: 503.7,
      str_name: 'Shopperz-Festac',
      order_type: 'In Store',
      status: 'Pending',
      products: [
        {
          id: 1, sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
        },
        {
          id: 2, sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
        },
        {
          id: 3, sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
        },
      ],
    },
    {
      id: '3',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Shopperz-Badagry',
      order_type: 'Home Delivery',
      status: 'Complete',
      products: [
        {
          id: 1, sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
        },
        {
          id: 2, sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
        },
        {
          id: 3, sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
        },
      ],
    },
    {
      id: '4',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'DJI MAcvic Quadcopter, Premier',
      amount: 503.7,
      str_name: 'Shopperz-Sango',
      order_type: 'Scanning',
      status: 'Pending',
      products: [
        {
          id: 1, sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
        },
        {
          id: 2, sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
        },
        {
          id: 3, sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
        },
      ],
    },
    {
      id: '5',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Shopperz-Ojo',
      order_type: 'Booking',
      status: 'Shipped',
      products: [
        {
          id: 1, sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
        },
        {
          id: 2, sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
        },
        {
          id: 3, sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
        },
      ],
    },
    {
      id: '6',
      date_created: Date.now(),
      order_id: 'SHI-23571',
      item: 'Oculus VR, Soap, Speaker, T-shirt',
      amount: 503.7,
      str_name: 'Shopperz-Lekki',
      order_type: 'Booking',
      status: 'Canceled',
      products: [
        {
          id: 1, sku: 'SHI-65483', product_name: 'Oculus VR', price: 999.29, qty: 1, disc: 5
        },
        {
          id: 2, sku: 'SHI-65483', product_name: 'Note Diaries', price: 999.29, qty: 2, disc: 5
        },
        {
          id: 3, sku: 'SHI-65483', product_name: 'Apple iPhone 13', price: 999.29, qty: 3, disc: 5
        },
      ],
    },
  ];
  products = [
    {
      id: 1,
      name: 'Oculus VR',
      image: 'assets/images/products/image_sm1.png',
      stores: ['Shopperz-Ikeja', 'Ojota-branch'],
      category: 'Electronics',
      qty: 376,
      available_qty: 50,
      selling_price: 503.67,
      discount_price: 500,
      average_rating: 4,
      flash_price: 100,
    },
    {
      id: 2,
      name: 'Wall Modern Clock',
      image: 'assets/images/products/image_sm2.png',
      stores: ['Shopperz-Ikeja', 'Ojota-branch'],
      category: 'Home accessories',
      qty: 291,
      available_qty: 32,
      selling_price: 157.62,
      discount_price: 199,
      average_rating: 0,
      flash_price: 0,
    },
  ];
  storesData = [
    {
      id: '1',
      name: 'Shopperz - Ikeja',
      address: '89 shitta street, dopemu round',
      state: 'Lagos',
      manager_name: 'Micheal',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '2',
      name: 'Bitstore - Surulere',
      address: '12 Janyy street, downing road',
      state: 'Ogun',
      manager_name: 'Jude',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Inactive',
    },
    {
      id: '3',
      name: 'Generanshop - Festac',
      address: '70 Bowman St. South Windsor',
      state: 'Rivers',
      manager_name: 'Stephen',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '4',
      name: 'Viaanmarket -  Sango',
      address: '4 Shirley Ave. West Chicago',
      state: 'Abia',
      manager_name: 'Dayo S',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '5',
      name: 'ZBuy - Alimosho',
      address: '123 6th St. Melbourne, FL 3',
      state: 'Kano',
      manager_name: 'Adeleke',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Active',
    },
    {
      id: '6',
      name: 'Zcross - Lekki',
      address: '170 Wowman St. South Win',
      state: 'Abuja',
      manager_name: 'Mathew',
      phone: '07066091112',
      date_created: Date.now(),
      status: 'Inactive',
    },
  ];
  managerData = [
    {
      id: '1',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Online',
    },
    {
      id: '2',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Offline',
    },
    {
      id: '3',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Online',
    },
    {
      id: '4',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Offline',
    },
    {
      id: '5',
      firstname: 'Hawawu',
      lastname: 'Shittu',
      role: 'Manager',
      store: 'Shopperz-Ikeja,Festac',
      email: 'ishaqhawawu66@gmail.com',
      phone: '07066091112',
      status: 'Online',
    },
  ];
}
