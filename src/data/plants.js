// Image URLs use Unsplash's image CDN; replace with your own licensed images if preferred.
const photos = {
  monstera: 'photo-1501004318641-b39e6451bec6', pothos: 'photo-1485955900006-10f4d324d411',
  philodendron: 'photo-1545241047-6083a3684587', ivy: 'photo-1416879595882-3373a0480b5b',
  fern: 'photo-1525498128493-380d1990a112', spider: 'photo-1459156212016-c812468e2115',
  snake: 'photo-1593482892290-f54927ae2b7d', aloe: 'photo-1509423350716-97f9360b4e09',
  zz: 'photo-1463320726281-696a485928c7', jade: 'photo-1441974231531-c6227db76b6e',
  cactus: 'photo-1509223197845-458d87318791', rubber: 'photo-1497250681960-ef046c08a56e',
  peace: 'photo-1521334884684-d80222895322', orchid: 'photo-1561181286-d3fee7d55364',
  anthurium: 'photo-1490750967868-88aa4486c946', lily: 'photo-1525310072745-f49212b5ac6d',
  begonia: 'photo-1519378058457-4c29a0a2efac', lavender: 'photo-1499002238440-d264edd596ec'
};
const make = (id, name, price, category) => ({ id, name, price, category, image: `https://images.unsplash.com/${photos[id]}?w=480&q=80&fit=crop` });
export const plants = [
  make('monstera','Monstera Deliciosa',28,'Leafy Favorites'),make('pothos','Golden Pothos',18,'Leafy Favorites'),
  make('philodendron','Heartleaf Philodendron',22,'Leafy Favorites'),make('ivy','English Ivy',16,'Leafy Favorites'),
  make('fern','Boston Fern',24,'Leafy Favorites'),make('spider','Spider Plant',17,'Leafy Favorites'),
  make('snake','Snake Plant',26,'Easy Care'),make('aloe','Aloe Vera',19,'Easy Care'),
  make('zz','ZZ Plant',30,'Easy Care'),make('jade','Jade Plant',21,'Easy Care'),
  make('cactus','Mini Cactus',14,'Easy Care'),make('rubber','Rubber Plant',29,'Easy Care'),
  make('peace','Peace Lily',27,'Blooming Beauties'),make('orchid','Phalaenopsis Orchid',35,'Blooming Beauties'),
  make('anthurium','Anthurium',32,'Blooming Beauties'),make('lily','Calla Lily',31,'Blooming Beauties'),
  make('begonia','Begonia',20,'Blooming Beauties'),make('lavender','Lavender',23,'Blooming Beauties')
];
