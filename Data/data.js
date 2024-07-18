
const sampleListings = [
  {
    title: "Serene Beachfront Cottage in Goa",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach in Goa.",
      image:  "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern Loft in Mumbai",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers in Mumbai!",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: 1200,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Mountain Retreat in Manali",
    description:
      "Unplug and unwind in this peaceful mountain cabin in Manali. Surrounded by nature, it's a perfect place to recharge.",
      image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

      price: 1000,
    location: "Manali",
    country: "India",
  },
  {
    title: "Historic Villa in Jaipur",
    description:
      "Experience the charm of Jaipur in this beautifully restored villa. Explore the vibrant culture and heritage.",
      image: 
       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 2500,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Secluded Treehouse in Kerala",
    description:
      "Live among the treetops in this unique treehouse retreat in Kerala. A true nature lover's paradise.",
      image:  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Kerala",
    country: "India",
  },
  {
    title: "Beachfront Paradise in Andaman",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation in Andaman.",
      image:  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 2000,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Rustic Cabin by the Lake in Nainital",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts in Nainital.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 900,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Luxury Penthouse in Bangalore",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment in Bangalore.",
      image:  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
    price: 3500,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Ski-In/Ski-Out Chalet in Gulmarg",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the beautiful Gulmarg.",
      image:  "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
    price: 3000,
    location: "Gulmarg",
    country: "India",
  },
  {
    title: "Safari Lodge in Ranthambore",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge in Ranthambore. Witness the majestic tigers up close.",
      image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
    price: 4000,
    location: "Ranthambore",
    country: "India",
  },
  {
    title: "Historic Canal House in Alappuzha",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Alappuzha's iconic backwaters.",
      image:  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
    price: 1800,
    location: "Alappuzha",
    country: "India",
  },
  {
    title: "Private Island Retreat in Lakshadweep",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience in Lakshadweep.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
    price: 5000,
    location: "Lakshadweep",
    country: "India",
  },
    {
      title: "Heritage Haveli in Udaipur",
      description: "Stay in a luxurious heritage haveli overlooking Lake Pichola in Udaipur. Experience royal hospitality and stunning views.",
      image:  "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 2200,
      location: "Udaipur",
      country: "India",
    },
    {
      title: "Beachfront Bungalow in Pondicherry",
      description: "Relax in a cozy beachfront bungalow in Pondicherry. Enjoy the serene beach and French colonial architecture.",
      image:  "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1300,
      location: "Pondicherry",
      country: "India",
    },
    {
      title: "Eco-Friendly Cottage in Coorg",
      description: "Enjoy a sustainable stay in this eco-friendly cottage in Coorg. Surrounded by coffee plantations and nature trails.",
      image:  "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1100,
      location: "Coorg",
      country: "India",
    },
    {
      title: "Penthouse Suite in Delhi",
      description: "Experience urban luxury in this penthouse suite in Delhi. Enjoy stunning city views and modern amenities.",
      image:  "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 3200,
      location: "Delhi",
      country: "India",
    },
    {
      title: "Lakeside Villa in Bhopal",
      description: "Stay in a beautiful lakeside villa in Bhopal. Enjoy serene views and peaceful surroundings.",
      image:  "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1600,
      location: "Bhopal",
      country: "India",
    },
    {
      title: "Colonial Bungalow in Darjeeling",
      description: "Experience the charm of Darjeeling in this colonial bungalow. Enjoy breathtaking views of the Himalayas.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 1400,
      location: "Darjeeling",
      country: "India",
    },
    {
      title: "Desert Camp in Jaisalmer",
      description: "Experience the magic of the Thar Desert in this luxury desert camp. Enjoy camel rides and cultural performances.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 1800,
      location: "Jaisalmer",
      country: "India",
    },
    {
      title: "Luxury Houseboat in Srinagar",
      description: "Stay in a luxury houseboat on Dal Lake in Srinagar. Experience the unique charm of Kashmir.",
      image:  "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 2700,
      location: "Srinagar",
      country: "India",
    },
    {
      title: "Cliffside Retreat in Mahabalipuram",
      description: "Enjoy stunning ocean views from this cliffside retreat in Mahabalipuram. Perfect for a peaceful getaway.",
      image:  "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1900,
      location: "Mahabalipuram",
      country: "India",
    },
    {
      title: "Backwater Villa in Kumarakom",
      description: "Stay in a serene backwater villa in Kumarakom. Enjoy boat rides and beautiful sunsets.",
      image:  "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 2100,
      location: "Kumarakom",
      country: "India",
    },
    {
      title: "Farmhouse Stay in Punjab",
      description: "Experience the rural charm of Punjab in this cozy farmhouse. Enjoy traditional Punjabi hospitality.",
      image:  "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1000,
      location: "Punjab",
      country: "India",
    },
    {
      title: "Palace Suite in Mysore",
      description: "Stay in a regal palace suite in Mysore. Experience the grandeur and elegance of royal living.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 3000,
      location: "Mysore",
      country: "India",
    },
    {
      title: "Treehouse in Wayanad",
      description: "Stay in a charming treehouse in Wayanad. Enjoy the beauty of nature and wildlife around you.",
      image:  "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 1500,
      location: "Wayanad",
      country: "India",
    },
    {
      title: "Mountain Cabin in Manali",
      description: "Enjoy a cozy stay in a mountain cabin in Manali. Perfect for a relaxing vacation amidst nature.",
      image:  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1700,
      location: "Manali",
      country: "India",
    },
    {
      title: "Cultural Homestay in Varanasi",
      description: "Experience the spiritual and cultural essence of Varanasi in this homestay. Enjoy traditional hospitality.",
      image:  "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1200,
      location: "Varanasi",
      country: "India",
    },
    {
      title: "Seaside Cottage in Kovalam",
      description: "Relax in a seaside cottage in Kovalam. Enjoy the tranquil beach and soothing sea breeze.",
      image:  "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 2000,
      location: "Kovalam",
      country: "India",
    },
    {
      title: "Rustic Barn in Maharashtra",
      description: "Experience the charm of rural Maharashtra in this rustic barn. Perfect for a peaceful countryside retreat.",
      image:  "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      
      price: 900,
      location: "Maharashtra",
      country: "India",
    },
    {
      title: "Charming Cottage in Munnar",
      description: "Stay in a charming cottage in the picturesque hills of Munnar. Enjoy tea plantations and serene views.",
      image:  "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      
      price: 1400,
      location: "Munnar",
      country: "India",
    },
    {
      title: "Luxury Tent in Ranthambore",
      description: "Experience the wilderness of Ranthambore in this luxury tent. Enjoy safaris and wildlife sightings.",
      filename: "Luxury Villa in the Maldives",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
      price: 2500,
      location: "Ranthambore",
      country: "India",
    },
    {
      title: "Mountain Villa in Rishikesh",
      description: "Stay in a mountain villa in Rishikesh. Enjoy the beauty of the Himalayas and the serenity of the Ganges.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

      price: 2300,
      location: "Rishikesh",
      country: "India",
    },
    {
      title: "Urban Loft in Bangalore",
      description: "Experience the vibrant city life of Bangalore in this stylish urban loft. Enjoy modern amenities and city views.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

      price: 2800,
      location: "Bangalore",
      country: "India",
    },
    {
      title: "Boutique Hotel in Jaipur",
      description: "Stay in a charming boutique hotel in the Pink City of Jaipur. Enjoy the city's rich heritage and culture.",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 2100,
      location: "Jaipur",
      country: "India",
    },
    {
      title: "Modern Apartment in Hyderabad",
      description: "Enjoy a comfortable stay in a modern apartment in Hyderabad. Perfect for business travelers and families.",
      image: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 1800,
      location: "Hyderabad",
      country: "India",
    },
    {
      title: "Traditional Kerala House in Alleppey",
      description: "Stay in a traditional Kerala house in Alleppey. Enjoy backwater boat rides and local cuisine.",
      image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 1500,
      location: "Alleppey",
      country: "India",
    },
    {
      title: "Hilltop Villa in Kodaikanal",
      description: "Stay in a beautiful hilltop villa in Kodaikanal. Enjoy panoramic views and a tranquil environment.",
      image: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

      price: 2200,
      location: "Kodaikanal",
      country: "India",
    },
    {
      title: "Beach House in Goa",
      description: "Relax in a stunning beach house in Goa. Enjoy the sun, sand, and vibrant nightlife.",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

      price: 2500,
      location: "Goa",
      country: "India",
    },
    {
      title: "Mountain Chalet in Shimla",
      description: "Enjoy a cozy stay in a mountain chalet in Shimla. Perfect for a relaxing vacation amidst nature.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",

      price: 1700,
      location: "Shimla",
      country: "India",
    },
    {
      title: "Luxury Resort in Andaman",
      description: "Experience the pristine beauty of the Andaman Islands in this luxury resort. Perfect for a tropical getaway.",
      image:  "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      price: 3000,
      location: "Andaman",
      country: "India",
    },
  ];
  module.exports = { data: sampleListings };