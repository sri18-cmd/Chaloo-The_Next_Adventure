
// data.tsx
// Note: All image links have been verified and updated.

import type { Destination } from './types';

export const destinations: Destination[] = [
  {
    id: 'taj-mahal-india',
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    brief: 'Ivory-white marble mausoleum on the Yamuna river.',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal.',
    images: [
      { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1587135941948-67083818a879?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.9,
    pricePerNight: 9500,
    reviews: [
      { id: '7', author: 'Priya Sharma', avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'A symbol of eternal love. Absolutely breathtaking at sunrise.', date: '2024-01-20' },
      { id: '8', author: 'Rohan Kumar', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'The architecture is magnificent. A true wonder of the world.', date: '2023-12-10' },
    ],
  },
  {
    id: 'jaipur-rajasthan',
    name: 'Hawa Mahal',
    location: 'Jaipur, Rajasthan',
    brief: 'The "Palace of Winds" with its intricate facade.',
    description: 'Hawa Mahal is a palace in Jaipur, India. Made with the red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women\'s chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh.',
    images: [
      { url: 'https://images.unsplash.com/photo-1617594393933-4a5cf95b827f?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1599661046227-e43b1270639a?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.7,
    pricePerNight: 7000,
    reviews: [
      { id: '9', author: 'Ananya Gupta', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop', rating: 4, comment: 'Beautiful photo spot, but not much to see inside.', date: '2024-02-15' },
    ],
  },
  {
    id: 'kerala-backwaters-india',
    name: 'Kerala Backwaters',
    location: 'Alleppey, Kerala',
    brief: 'Serene network of lakes, canals, and lagoons.',
    description: 'The Kerala backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast of Kerala state in southern India. The network includes five large lakes linked by canals, both manmade and natural, fed by 38 rivers, and extending virtually half the length of Kerala state.',
    images: [
      { url: 'https://images.unsplash.com/photo-1602216056096-3b404c8299e8?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1587789202104-58f2265abce3?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1593693411515-c202a01333b8?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.8,
    pricePerNight: 15000,
    reviews: [
      { id: '10', author: 'Vijay Nair', avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'Houseboat stay was an unforgettable experience. So peaceful and relaxing.', date: '2023-11-28' },
    ],
  },
  {
    id: 'varanasi-ghats-india',
    name: 'Varanasi Ghats',
    location: 'Varanasi, Uttar Pradesh',
    brief: 'Spiritual heart of India on the banks of the Ganges.',
    description: 'Varanasi\'s ghats are riverfront steps leading to the banks of the River Ganges. The city has 88 ghats. Most of the ghats are bathing and puja ceremony ghats, while two ghats are used exclusively as cremation sites.',
    images: [
      { url: 'https://images.unsplash.com/photo-1561362512-19e37f413a45?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1603940124236-762293816174?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1587899764789-5683a484e554?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
    ],
    rating: 4.8,
    pricePerNight: 5500,
    reviews: [
      { id: '1', author: 'Aarav Patel', avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'Incredibly spiritual and moving experience. The evening Aarti is a must-see.', date: '2024-03-01' },
    ],
  },
  {
    id: 'goa-beaches-india',
    name: 'Goa Beaches',
    location: 'Goa, India',
    brief: 'Sun, sand, and sea on the western coast.',
    description: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations.',
    images: [
      { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1574781488585-8d268516e1a4?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.6,
    pricePerNight: 12000,
    reviews: [
      { id: '2', author: 'Sanya Singh', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop', rating: 4, comment: 'Great vibes and beautiful beaches. Some areas can get a bit crowded.', date: '2024-02-20' },
    ],
  },
   {
    id: 'golden-temple-amritsar',
    name: 'Golden Temple',
    location: 'Amritsar, Punjab',
    brief: 'The spiritual and cultural centre for the Sikh religion.',
    description: 'The Golden Temple, also known as Harmandir Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the preeminent spiritual site of Sikhism.',
    images: [
      { url: 'https://images.unsplash.com/photo-1549497745-f03317f035f4?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1628799230012-144a10383145?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1609879204368-077a1a0a4c28?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
    ],
    rating: 4.9,
    pricePerNight: 6000,
    reviews: [
      { id: '3', author: 'Ishaan Reddy', avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'A place of profound peace and beauty. The langar is an amazing experience of selfless service.', date: '2023-10-15' },
    ],
  },
  {
    id: 'mumbai-gateway',
    name: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    brief: 'An arch-monument built in the early 20th century.',
    description: 'The Gateway of India is an arch-monument built in the early twentieth century, located in the city of Mumbai, India. It was erected to commemorate the landing in December 1911 of King-Emperor George V and Queen-Empress Mary, the first British monarch to visit India.',
    images: [
      { url: 'https://images.unsplash.com/photo-1566552881560-0d8b1a2c47ac?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1595064085577-7c0ef9b9557a?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.7,
    pricePerNight: 8000,
    reviews: [
       { id: '4', author: 'Meera Desai', avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop', rating: 4, comment: 'Iconic landmark, especially beautiful in the evening light. Very crowded though.', date: '2024-01-05' },
    ],
  },
  {
    id: 'rishikesh-uttarakhand',
    name: 'Rishikesh',
    location: 'Rishikesh, Uttarakhand',
    brief: 'Yoga capital of the world and adventure sports hub.',
    description: 'Rishikesh, a town in the Himalayan foothills beside the Ganges River, is renowned for its yoga and meditation centers. It\'s also a popular spot for adventure sports like white-water rafting, bungee jumping, and trekking.',
    images: [
      { url: 'https://images.unsplash.com/photo-1585892897851-f7a31535a09e?q=80&w=800&auto=format&fit=crop', width: 800, height: 530 },
      { url: 'https://images.unsplash.com/photo-1609769682942-16249333313d?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1589694369658-13d81b8b2ebb?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
    ],
    rating: 4.8,
    pricePerNight: 6500,
    reviews: [
      { id: '11', author: 'Anjali Verma', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'The Ganga Aarti was divine. River rafting was an adrenaline rush! Perfect mix of peace and adventure.', date: '2024-04-10' },
    ],
  },
  {
    id: 'darjeeling-west-bengal',
    name: 'Darjeeling',
    location: 'Darjeeling, West Bengal',
    brief: 'Queen of the Himalayas, famous for its tea gardens.',
    description: 'Darjeeling is a town in India\'s West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or “Toy Train,” completed in 1881.',
    images: [
      { url: 'https://images.unsplash.com/photo-1590616194243-7b491a923363?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1599639552174-a3f2b45a0e9b?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1626073187268-d6159c94c3c3?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.7,
    pricePerNight: 8500,
    reviews: [
      { id: '12', author: 'Vikram Singh', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'The view of Kanchenjunga at sunrise from Tiger Hill is unforgettable. The tea is the best I have ever had.', date: '2023-11-15' },
    ],
  },
  {
    id: 'hampi-karnataka',
    name: 'Hampi',
    location: 'Hampi, Karnataka',
    brief: 'Ancient village of ruins and temples.',
    description: 'Hampi, a UNESCO World Heritage Site, is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. The terrain is otherworldly, with giant boulders perched precariously over miles of undulating terrain.',
    images: [
      { url: 'https://images.unsplash.com/photo-1562212477-9685b3f7f093?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1601334464132-159f8c62c2f8?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1599332243883-c6b7adea6a9f?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
    ],
    rating: 4.9,
    pricePerNight: 5000,
    reviews: [
      { id: '13', author: 'Divya Rao', avatarUrl: 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'Felt like stepping back in time. The scale of the ruins is immense. Rent a scooter to explore properly!', date: '2024-01-25' },
    ],
  },
  {
    id: 'leh-ladakh-bike',
    name: 'Leh-Ladakh Bike Trip',
    location: 'Leh, Ladakh',
    brief: 'Epic bike journey through high-altitude desert.',
    description: 'Embark on a thrilling motorcycle adventure through the breathtaking landscapes of Leh and Ladakh. Navigate winding mountain passes, witness serene monasteries, and experience the raw beauty of the Himalayas.',
    images: [
      { url: 'https://images.unsplash.com/photo-1617822448375-34704a5c4883?q=80&w=800&auto=format&fit=crop', width: 800, height: 532 },
      { url: 'https://images.unsplash.com/photo-1588214126783-c543666f7f2b?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1616422285423-f2038786a51d?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
    ],
    rating: 4.9,
    pricePerNight: 22000,
    reviews: [
      { id: '5', author: 'Aditya Singh', avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'The ride of a lifetime. Challenging but worth every second. Scenery is out of this world.', date: '2023-09-12' },
    ],
    tags: ['adventure']
  },
  {
    id: 'spiti-valley-bike',
    name: 'Spiti Valley Bike Expedition',
    location: 'Spiti, Himachal Pradesh',
    brief: 'Ride through a remote, cold desert mountain valley.',
    description: 'A challenging and rewarding bike expedition into the Spiti Valley. This trip offers stunning vistas of stark landscapes, ancient Buddhist monasteries, and a true sense of adventure off the beaten path.',
    images: [
      { url: 'https://images.unsplash.com/photo-1605335558913-b54dedb4d081?q=80&w=800&auto=format&fit=crop', width: 800, height: 534 },
      { url: 'https://images.unsplash.com/photo-1627993424569-8902bca3b1a8?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1654345479004-94e80a5c4883?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.8,
    pricePerNight: 20000,
    reviews: [
       { id: '6', author: 'Kavya Joshi', avatarUrl: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=100&auto=format&fit=crop', rating: 5, comment: 'Felt like I was on another planet. The raw, untouched beauty is incredible. Be prepared for basic amenities.', date: '2023-08-21' },
    ],
    tags: ['adventure']
  },
  {
    id: 'meghalaya-bike',
    name: 'Meghalaya Bike Tour',
    location: 'Shillong, Meghalaya',
    brief: 'Explore the abode of clouds on two wheels.',
    description: 'Discover the lush green hills, cascading waterfalls, and unique living root bridges of Meghalaya on a motorcycle. This tour through North East India is a journey through nature\'s paradise.',
    images: [
      { url: 'https://images.unsplash.com/photo-1605445584488-51b7a2334f59?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1615594119398-96c23170753b?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
      { url: 'https://images.unsplash.com/photo-1616864353045-80f3f2f0b9e8?q=80&w=800&auto=format&fit=crop', width: 800, height: 533 },
    ],
    rating: 4.7,
    pricePerNight: 18000,
    reviews: [],
    tags: ['adventure']
  }
];
