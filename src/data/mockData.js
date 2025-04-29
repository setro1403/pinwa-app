export const trips = [
  { 
    id: 1, 
    user: { 
      name: '小雯', 
      avatar: 'https://i.pravatar.cc/150?img=49', 
      rating: 4.8, 
      trips: 12 
    },
    from: '上海', 
    to: '东京',
    tripTheme: '赏樱休闲之旅', 
    date: '2025-05-15', 
    returnDate: '2025-05-20',
    availableSpace: '5kg',
    fee: '5%',
    verified: true,
    photos: [
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
  },
  { 
    id: 2, 
    user: { 
      name: '婷婷', 
      avatar: 'https://i.pravatar.cc/150?img=44', 
      rating: 4.9, 
      trips: 8 
    },
    from: '北京', 
    to: '大阪',
    tripTheme: '美食探索之旅', 
    date: '2025-05-17', 
    returnDate: '2025-05-25',
    availableSpace: '3kg',
    fee: '8%',
    verified: true,
    photos: [
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
  },
  { 
    id: 3, 
    user: { 
      name: '小王', 
      avatar: 'https://i.pravatar.cc/150?img=69', 
      rating: 4.7, 
      trips: 5 
    },
    from: '广州', 
    to: '京都',
    tripTheme: '古寺历史之旅', 
    date: '2025-05-20', 
    returnDate: '2025-05-30',
    availableSpace: '7kg',
    fee: '6%',
    verified: false,
    photos: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    ],
  }
];

export const products = [
  {
    id: 1,
    name: '资生堂红腰子精华',
    price: '约¥680',
    weight: '75ml/约150g',
    store: '日本药妆店',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requestCount: 5,
    reason: '日本直购比国内专柜便宜近30%，而且是最新批次'
  },
  {
    id: 2,
    name: 'DHC橄榄卸妆油',
    price: '约¥180',
    weight: '200ml/约250g',
    store: '日本药妆店',
    image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requestCount: 8,
    reason: '朋友推荐的好物，温和不刺激，日本版本添加了更多植物精华'
  },
  {
    id: 3,
    name: '手工樱花和风小发夹',
    price: '约¥120',
    weight: '约50g',
    store: '京都手工艺店',
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requestCount: 3,
    reason: '日本小众手工店的限定款，春季特别版'
  },
  {
    id: 4,
    name: 'Royce生巧克力',
    price: '约¥220',
    weight: '约200g',
    store: '日本超市/机场',
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    requestCount: 12,
    reason: '朋友过生日，想送这款抹茶口味的限定款'
  }
];