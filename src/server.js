import { createServer, Model } from 'miragejs';

createServer({
  models: {
    pens: Model,
  },

  seeds(server) {
    server.create('pen', {
      id: '1',
      name: 'Modest Explorer',
      price: 60,
      description:
        'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
      imageUrl:
        'https://www.pserhome.com/wp-content/uploads/2021/11/2021110713180898.jpg',
      type: 'simple',
    });
    server.create('pen', {
      id: '2',
      name: 'Beach Bum',
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: 'https://www.pserhome.com/wp-content/uploads/2017/06/ivan.jpg',
      type: 'rugged',
    });
    server.create('pen', {
      id: '3',
      name: 'Reliable Red',
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        'https://p9-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/1ee71641953145e8a59db8ddf0baf796~tplv-mlhdmxsy5m-q75:0:0.image',
      type: 'luxury',
    });
    server.create('pen', {
      id: '4',
      name: 'Dreamfinder',
      price: 65,
      description:
        'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
      imageUrl:
        'https://img.alicdn.com/bao/uploaded/O1CN01mHOhYY209enyvAd8S_!!6000000006807-0-yinhe.jpg',
      type: 'simple',
    });
    server.create('pen', {
      id: '5',
      name: 'The Cruiser',
      price: 120,
      description:
        'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
      imageUrl:
        'https://img.alicdn.com/bao/uploaded/O1CN01mHOhYY209enyvAd8S_!!6000000006807-0-yinhe.jpg',
      type: 'luxury',
    });
    server.create('pen', {
      id: '6',
      name: 'Green Wonder',
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        'https://img.alicdn.com/bao/uploaded/O1CN01mHOhYY209enyvAd8S_!!6000000006807-0-yinhe.jpg',
      type: 'rugged',
    });
  },

  routes() {
    this.namespace = 'api';
    this.logging = false;

    this.get('/pens', (schema, request) => {
      return schema.pens.all();
    });

    this.get('/pens/:id', (schema, request) => {
      const id = request.params.id;
      return schema.pens.find(id);
    });
  },
});
