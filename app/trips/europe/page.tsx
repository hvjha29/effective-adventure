'use client';

import TripTemplate from '@/app/components/TripTemplate';

export default function EuropeTrip() {
  const tips = [
    'Best Time to Visit: May-September for pleasant weather and longer daylight hours',
    'Transportation: Get a Swiss Travel Pass if visiting multiple Swiss cities and mountains',
    'Mountain Access: Book cable cars and funiculars in advance during peak season to avoid queues',
    'Walking Shoes: Essential for hiking, trekking, and exploring villages on foot',
    'Currency: Switzerland uses Swiss Francs (CHF), while France uses Euros (EUR)',
    'Accommodation: Book mountain lodges and city hotels early, especially in popular towns like Interlaken and Lucerne',
    'Waterfalls & Gorges: Visit Trummelbach and Rosenlaui early morning for fewer crowds and better photos',
    'Dining: Try local specialties - fondue in Switzerland, croissants and pastries in Paris',
    'Museums: Many offer free or discounted entry during specific hours',
    'Weather: Mountain weather changes rapidly - bring layers and rain gear',
  ];

  const itinerary = [
    {
      day: 'Day 1: Milan - Art, Architecture & History',
      description:
        'Arrive in Milan and explore one of Italy\'s most vibrant cities. Visit the iconic Duomo di Milano cathedral with its stunning Gothic architecture. Discover the Galleria Vittorio Emanuele II, an impressive shopping arcade. Pay respects at the Cimitero Monumentale, one of Europe\'s most impressive cemeteries. See Leonardo da Vinci\'s statue and the historic opera house (La Scala) from the outside. Don\'t miss the ossuary (bone church) - a unique historical site showcasing Milan\'s rich past.',
    },
    {
      day: 'Day 2: Brienz & Interlaken - Swiss Lakes & Waterfalls',
      description:
        'Travel to Brienz in the Swiss Alps. Take a scenic ferry from Brienz to Interlaken across pristine alpine lakes. Ride the funicular to witness the breathtaking Giessbach Waterfall. Explore the charming town of Interlaken nestled between two lakes. Visit St. Beatus Caves, spectacular stalactite and stalagmite formations hidden in the mountain. Immerse yourself in the stunning natural beauty of the Bernese Oberland region.',
    },
    {
      day: 'Day 3: Mürren & Lauterbrunnen Valley - Alpine Adventures',
      description:
        'Take the iconic cogwheel train to Mürren, a car-free village perched on a mountainside in the Jungfrau region. Trek down through Alpine meadows to the charming village of Gimmelwald. Ride the gondola down to Lauterbrunnen valley. Visit the magnificent Trummelbach Falls, a series of 10 waterfalls within the mountain. Explore the picturesque Lauterbrunnen Valley and venture to the historic town of Thun with its medieval castle and lakeside charm.',
    },
    {
      day: 'Day 4: Lucerne - Mountains, Museums & Monuments',
      description:
        'Relocate to Lucerne, a stunning lakeside city. Experience Stanserhorn mountain via funicular and the world\'s first open-air rotating gondola for panoramic views. Stroll through Lucerne\'s old town and walk across the iconic Chapel Bridge (Kapellbrücke), one of Europe\'s oldest covered bridges. Pay homage at the Lion Monument, a moving tribute to Swiss guards. Visit the Picasso Museum to admire works by the legendary artist.',
    },
    {
      day: 'Day 5: Rosenlaui, Meiringen & Berne - Glaciers & Capital',
      description:
        'Journey to the stunning Rosenlaui Valley and explore the UNESCO-protected Rosenlaui Glacier Gorge with its dramatic ice formations. Visit Meiringen, home to the fascinating Sherlock Holmes Museum dedicated to Arthur Conan Doyle\'s famous detective. Travel to Switzerland\'s capital, Berne, and tour the impressive Swiss Parliament building. Watch the sunset at Rosengarten (Rose Garden) overlooking the city. Visit the enchanting Bear Park where bears roam in their natural habitat.',
    },
    {
      day: 'Day 6: Rhine Falls & Zurich - Waterfalls & Culture',
      description:
        'Witness the majestic Rhine Falls, Europe\'s largest waterfall, with its thundering cascade. Travel to Zurich and explore the FIFA Museum, a must-visit for football enthusiasts. Enjoy shopping and discover the vibrant culture of Switzerland\'s largest city. Stroll along the Limmat River and explore historic Old Town (Altstadt) with its charming streets and Zurich Cathedral.',
    },
    {
      day: 'Day 7: Mount Titlis, Lake Lucerne & Journey to Paris',
      description:
        'Ascend Mount Titlis, standing at 3,238 meters, one of the most accessible high Alpine peaks. Experience the world\'s first rotating aerial cableway for 360-degree views. Take a scenic cruise on Lake Lucerne (Vierwaldstättersee) surrounded by mountain peaks. Begin your journey to Paris via Basel and Strasbourg, traveling through the picturesque Alsace region with its fairy-tale towns.',
    },
    {
      day: 'Day 8: Paris - The City of Light',
      description:
        'Arrive in Paris and immerse yourself in European culture. Visit the magnificent Notre-Dame Cathedral, an architectural masterpiece (note: currently under restoration). Stroll through the Jardin du Luxembourg, one of Paris\'s most beloved parks, perfect for people-watching. Explore the Tuileries Garden with its classical beauty. View iconic landmarks from outside: the Louvre Museum, Musée d\'Orsay (home to Impressionist art), and Seine River cruises. Visit the Monnaie de Paris (Mint Museum) exploring French numismatic history. Promenade down the famous Champs-Élysées for high-end shopping. End your journey at the stunning Eiffel Tower, the symbol of Paris, especially magical at sunset or when lit up at night.',
    },
  ];

  return (
    <TripTemplate
      title="Europe"
      location="Milan, Brienz, Interlaken, Lucerne, Berne, Zurich, Paris"
      days="8 Days"
      bestTime="May-September"
      bannerImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=400&fit=crop"
      summary="An unforgettable 8-day journey through the heart of Europe, combining the artistic treasures of Milan with the breathtaking Alpine landscapes of Switzerland and the timeless elegance of Paris. Experience iconic landmarks, stunning natural wonders, and charming villages while discovering the rich culture and heritage of these European destinations."
      itinerary={itinerary}
      tips={tips}
    />
  );
}
