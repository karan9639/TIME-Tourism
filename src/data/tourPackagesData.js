/**
 * Tour Packages Data - Complete database of all tour packages
 *
 * This file contains comprehensive tour package data matching timetours.us structure:
 * - Information: Basic tour details, inclusions, exclusions
 * - Tour Plan: Day-by-day itinerary with detailed descriptions
 * - Location: Map data and key destinations
 * - Gallery: Cloudinary image URLs for photo galleries
 */

export const tourPackagesData = [
  // ============================================
  // INDIA TOURS
  // ============================================

  {
    id: 1,
    slug: "golden-triangle",
    title: "Golden Triangle",
    tagline: "The Classic Introduction to India's Rich Heritage",
    description: "The itinerary covers the famous cities of Delhi, Agra & Jaipur.",
    fullDescription: `The Golden Triangle is India's most popular tourist circuit, connecting the national capital Delhi, Agra (home of the Taj Mahal), and Jaipur (the Pink City). This carefully crafted journey takes you through centuries of Indian history, from Mughal magnificence to Rajput royalty.`,
    duration: 6,
    destination: "India",
    category: "India",
    departure: "Delhi",
    groupSize: "2-16 persons",
    tourType: "Cultural Heritage",
    price: null,
    rating: 0,
    reviewCount: 0,
    image: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    heroImage: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    highlights: [
      "Witness the Taj Mahal at sunrise",
      "Explore the historic Red Fort in Delhi",
      "Visit the magnificent Amber Fort in Jaipur",
      "Experience a rickshaw ride through Old Delhi",
      "Discover the abandoned city of Fatehpur Sikri",
    ],
    included: ["5 Star Accommodation", "Airport Transfer", "Breakfast", "Gallery Ticket", "Lunch"],
    notIncluded: ["Personal Guide"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Delhi",
        description: `<p>Arrival at Delhi, you will be met by our TIME representative at the airport, later transfer to the Hotel.</p><p><strong>Delhi</strong>, the Empress of Indian cities has a fascinating history and a stimulating present.</p>`,
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "In Delhi",
        description: `<p>Morning after breakfast, proceed for the full day sightseeing of Delhi. Visit Red Fort, Jama Masjid, Raj Ghat, Rickshaw Ride through Old Delhi, Humayun's Tomb, and Qutub Minar.</p>`,
        overnight: "Delhi",
      },
      {
        day: 3,
        title: "Delhi – Agra (210 kms / 4hrs)",
        description: `<p>Morning after breakfast, drive to Agra. Visit the Taj Mahal and Agra Fort.</p>`,
        overnight: "Agra",
      },
      {
        day: 4,
        title: "Agra – Jaipur via Fatehpur Sikri (245 kms / 5hrs)",
        description: `<p>Morning after breakfast, drive to Jaipur, en route visiting Fatehpur Sikri.</p>`,
        overnight: "Jaipur",
      },
      {
        day: 5,
        title: "In Jaipur",
        description: `<p>Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal.</p>`,
        overnight: "Jaipur",
      },
      {
        day: 6,
        title: "Jaipur – Delhi - Departure",
        description: `<p>Drive to Delhi and transfer to the airport for onward journey.</p>`,
        overnight: null,
      },
    ],
    locationDescription:
      "The Golden Triangle tour covers Delhi, Agra, and Jaipur - three of India's most iconic cities.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d1797079.2547840385!2d76.13890387618654!3d27.498410066339604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!3m2!1d28.6139391!2d77.2090212!4m5!1s0x3974471ef5c7ed37%3A0x97c3c2e5cc5d0aa8!2sAgra%2C%20Uttar%20Pradesh!3m2!1d27.1766701!2d78.00807449999999!4m5!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!3m2!1d26.9124336!2d75.7872709!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!3m2!1d28.6139391!2d77.2090212!5e0!3m2!1sen!2sin!4v1703425500000!5m2!1sen!2sin",
    keyDestinations: [
      { name: "Delhi", description: "India's capital with Red Fort, Jama Masjid" },
      { name: "Agra", description: "Home to the magnificent Taj Mahal" },
      { name: "Jaipur", description: "The Pink City with Amber Fort" },
    ],
    galleryImages: [
      { id: 1, url: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg", alt: "Taj Mahal at sunrise" },
    ],
  },

  {
    id: 2,
    slug: "catholic-church-tour-in-india",
    title: "Catholic Church Tour Package In India",
    tagline: "A Spiritual Journey Through India's Christian Heritage",
    description: "The area occupied by Mumbai three hundred years ago, was 7...",
    fullDescription: `Embark on a profound spiritual journey exploring India's rich Catholic heritage. This comprehensive 10-day tour takes you through historic churches, basilicas, and sacred sites from Mumbai to Goa, following the footsteps of St. Francis Xavier and other missionaries who brought Christianity to India.`,
    duration: 10,
    destination: "India",
    category: "India",
    departure: "Mumbai",
    groupSize: "2-20 persons",
    tourType: "Religious/Pilgrimage",
    price: null,
    rating: 0,
    reviewCount: 0,
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    heroImage: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    highlights: [
      "Visit the Basilica of Bom Jesus with St. Francis Xavier's relics",
      "Explore Se Cathedral - Asia's largest church",
      "Discover Mount Mary Basilica in Mumbai",
      "Visit St. Thomas Cathedral in Chennai",
      "Experience the serene churches of Old Goa",
    ],
    included: ["5 Star Accommodation", "Airport Transfer", "Breakfast", "Gallery Ticket", "Lunch"],
    notIncluded: ["Personal Guide"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Mumbai",
        description: `<p>Arrival and transfer to your hotel. Mumbai, occupying what was once a cluster of seven islands, has come a long way. Today, it is India's commercial nerve center and its most cosmopolitan city.</p>
        <p>Visit <strong>Mount Mary Basilica</strong>, officially known as Basilica of Our Lady of the Mount, a Roman Catholic Basilica located in Bandra, Mumbai. The first chapel was built around 1640 by the Jesuits and dedicated to Our Lady.</p>`,
        overnight: "Mumbai",
      },
      {
        day: 2,
        title: "In Mumbai/Bombay",
        description: `<p>Proceed for sightseeing of Mumbai including <strong>St. Thomas' Cathedral</strong> (Mumbai), also known as St. Thomas Cathedral is the oldest British-era building, and perhaps one of the very first British structures built in the city.</p>
        <p>Visit <strong>Afghan Church</strong> – The Church of St. John the Evangelist, originally known as St. John's Church, commonly known as the Afghan Church is an Anglican Church in South Mumbai.</p>
        <p>Also visit the <strong>Gateway of India</strong>, <strong>Prince of Wales Museum</strong>, and the seafront <strong>Marine Drive</strong>.</p>`,
        overnight: "Mumbai",
      },
      {
        day: 3,
        title: "Mumbai – Cochin (Flight)",
        description: `<p>Morning transfer to the airport to board flight to Cochin.</p>
        <p><strong>Cochin</strong>, known as the "Queen of the Arabian Sea" is located in the South Indian state of Kerala. Home to the oldest European church in India.</p>
        <p>Visit <strong>St. Francis Church</strong> – The St. Francis CSI Church is believed to be the first church built by Europeans in India. Originally built in 1503, Vasco Da Gama was buried here in 1524 before his remains were returned to Portugal.</p>
        <p>Also see the famous <strong>Chinese Fishing Nets</strong>, <strong>Jewish Synagogue</strong>, and <strong>Dutch Palace</strong>.</p>`,
        overnight: "Cochin",
      },
      {
        day: 4,
        title: "Cochin – Periyar/Thekkady",
        description: `<p>Morning drive to Thekkady, famous for spice plantations and the Periyar Wildlife Sanctuary.</p>
        <p>Visit a <strong>spice plantation</strong> to learn about cardamom, pepper, coffee, and other spices. Optional boat ride on Periyar Lake to spot elephants and other wildlife.</p>`,
        overnight: "Thekkady",
      },
      {
        day: 5,
        title: "In Cochin",
        description: `<p>Continue exploring Cochin's religious heritage.</p>
        <p>Visit <strong>Santa Cruz Cathedral Basilica</strong> – One of the finest churches in India. The original building was built by the Portuguese and later destroyed by the British. The present structure was built in 1902.</p>
        <p>Evening free to explore Fort Kochi's charming streets.</p>`,
        overnight: "Cochin",
      },
      {
        day: 6,
        title: "Cochin – Kumarakom (Approx. 80 kms/ 2 hrs)",
        description: `<p>Drive to Kumarakom, located on the banks of Vembanad Lake. Experience the serene Kerala backwaters.</p>
        <p>Visit local churches and enjoy the tranquil village atmosphere. Optional houseboat cruise through the backwaters.</p>`,
        overnight: "Kumarakom",
      },
      {
        day: 7,
        title: "Kumarakom – Cochin (Approx. 65 kms/ 1 hr) - Goa",
        description: `<p>Morning drive to Cochin airport for your flight to Goa.</p>
        <p><strong>Goa</strong>, India's smallest state, is famous for its Portuguese heritage and beautiful churches. The flight offers stunning views of the Western Ghats.</p>
        <p>Arrival and transfer to hotel. Rest of the day at leisure to enjoy Goa's beaches.</p>`,
        overnight: "Goa",
      },
      {
        day: 8,
        title: "In Goa",
        description: `<p>Full day exploring Old Goa's UNESCO World Heritage churches.</p>
        <p><strong>Basilica of Bom Jesus</strong> – This basilica holds the mortal remains of St. Francis Xavier. Built between 1594 and 1605, it is a fine example of Baroque architecture and is one of the richest and most famous churches in India.</p>
        <p><strong>Se Cathedral</strong> – The Cathedral of Santa Catarina is the cathedral of the Latin Rite Roman Catholic Archdiocese of Goa. It is one of the largest churches in Asia.</p>
        <p><strong>Church of St. Francis of Assisi</strong> – Originally a small chapel built by eight Franciscan friars in 1521. Features beautiful frescoes and a museum.</p>`,
        overnight: "Goa",
      },
      {
        day: 9,
        title: "Day 09 In Goa",
        description: `<p>Continue exploring Goa's religious heritage.</p>
        <p>Visit <strong>Church of St. Cajetan</strong> – Built by Italian friars in 1651, modeled on the original design of St. Peter's Basilica in Rome.</p>
        <p><strong>Chapel of St. Catherine</strong> – Built in 1510 to commemorate the Portuguese victory over the Muslim rulers.</p>
        <p>Afternoon free for beach activities or shopping in Panjim.</p>`,
        overnight: "Goa",
      },
      {
        day: 10,
        title: "Goa – Mumbai (Flight) & Leave Mumbai",
        description: `<p>Morning transfer to Goa airport for flight to Mumbai.</p>
        <p>Arrival in Mumbai and connection to your onward international flight, carrying wonderful memories of India's Christian heritage.</p>
        <p><strong>Tour ends with blessed memories!</strong></p>`,
        overnight: null,
      },
    ],
    locationDescription: "This pilgrimage tour covers major Christian heritage sites across Mumbai, Kerala, and Goa.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m58!1m12!1m3!1d7879892.155929966!2d73.21875!3d14.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m43!3e0!4m5!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai!3m2!1d19.0759837!2d72.8776559!4m5!1s0x3b080d514abec6bf%3A0xbd582caa5f3f59b!2sKochi%2C%20Kerala!3m2!1d9.9312328!2d76.2673041!4m5!1s0x3b0894d68d9c89fb%3A0xc869d9e687126512!2sThekkady%2C%20Kerala!3m2!1d9.5982343!2d77.1612078!4m5!1s0x3b0806bf4fd3ab29%3A0x3f3c50ea17ce77fd!2sKumarakom%2C%20Kerala!3m2!1d9.6175!2d76.4304!4m5!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!3m2!1d15.2993265!2d74.12399599999999!4m5!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai!3m2!1d19.0759837!2d72.8776559!5e0!3m2!1sen!2sin",
    keyDestinations: [
      { name: "Mumbai", description: "Mount Mary Basilica, St. Thomas Cathedral" },
      { name: "Cochin", description: "St. Francis Church, oldest European church in India" },
      { name: "Old Goa", description: "Basilica of Bom Jesus with St. Francis Xavier's relics" },
      { name: "Kumarakom", description: "Serene backwater churches" },
    ],
    galleryImages: [
      { id: 1, url: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg", alt: "Church in India" },
      { id: 2, url: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg", alt: "Historic architecture" },
      { id: 3, url: "/kerala-backwaters-houseboat-india-sunset.jpg", alt: "Kerala backwaters" },
    ],
  },

  {
    id: 3,
    slug: "classical-tour-of-south-india",
    title: "Classical Tour of South India – Experience South India",
    tagline: "Temples, Backwaters & Beaches",
    description: "The vibrant history of the city of Chennai which was previously...",
    fullDescription: `Experience the diverse beauty of South India from the ancient temples of Tamil Nadu to the serene backwaters of Kerala. This 13-day journey covers Chennai, Mahabalipuram, Pondicherry, Tanjore, Madurai, Periyar, Kumarakom, and Cochin.`,
    duration: 13,
    destination: "India",
    category: "India",
    departure: "Chennai",
    groupSize: "2-16 persons",
    tourType: "Cultural Heritage",
    price: null,
    rating: 0,
    reviewCount: 0,
    image: "/kerala-backwaters-houseboat-india-sunset.jpg",
    heroImage: "/kerala-backwaters-houseboat-india-sunset.jpg",
    highlights: [
      "UNESCO World Heritage temples of Mahabalipuram",
      "French colonial architecture of Pondicherry",
      "Magnificent Brihadeeswara Temple in Tanjore",
      "Sacred Meenakshi Temple in Madurai",
      "Kerala backwater houseboat experience",
    ],
    included: ["5 Star Accommodation", "Airport Transfer", "Breakfast", "Gallery Ticket", "Lunch"],
    notIncluded: ["Personal Guide"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Chennai",
        description: "<p>Arrival at Chennai airport. Transfer to hotel.</p>",
        overnight: "Chennai",
      },
      {
        day: 2,
        title: "Chennai – Mahabalipuram",
        description: "<p>Drive to Mahabalipuram. Visit Shore Temple and Five Rathas.</p>",
        overnight: "Mahabalipuram",
      },
      {
        day: 3,
        title: "Mahabalipuram – Pondicherry",
        description: "<p>Drive to the French town of Pondicherry.</p>",
        overnight: "Pondicherry",
      },
      {
        day: 4,
        title: "Pondicherry – Tanjore",
        description: "<p>Drive to Tanjore. Visit Brihadeeswara Temple.</p>",
        overnight: "Tanjore",
      },
      {
        day: 5,
        title: "Tanjore – Madurai",
        description: "<p>Drive to Madurai. Visit Meenakshi Temple.</p>",
        overnight: "Madurai",
      },
      {
        day: 6,
        title: "In Madurai",
        description: "<p>Full day exploring Madurai's temples and markets.</p>",
        overnight: "Madurai",
      },
      {
        day: 7,
        title: "Madurai – Periyar",
        description: "<p>Drive to Periyar Wildlife Sanctuary.</p>",
        overnight: "Periyar",
      },
      {
        day: 8,
        title: "In Periyar",
        description: "<p>Boat safari on Periyar Lake. Spice plantation visit.</p>",
        overnight: "Periyar",
      },
      {
        day: 9,
        title: "Periyar – Kumarakom",
        description: "<p>Drive to Kumarakom backwaters.</p>",
        overnight: "Kumarakom",
      },
      {
        day: 10,
        title: "Kumarakom Houseboat",
        description: "<p>Overnight houseboat cruise through backwaters.</p>",
        overnight: "Houseboat",
      },
      {
        day: 11,
        title: "Kumarakom – Cochin",
        description: "<p>Drive to Cochin. Sightseeing of Fort Kochi.</p>",
        overnight: "Cochin",
      },
      {
        day: 12,
        title: "In Cochin",
        description: "<p>Visit St. Francis Church, Jewish Synagogue, Chinese Fishing Nets.</p>",
        overnight: "Cochin",
      },
      { day: 13, title: "Depart Cochin", description: "<p>Transfer to airport for departure.</p>", overnight: null },
    ],
    locationDescription: "Journey through the cultural heartland of South India.",
    keyDestinations: [
      { name: "Chennai", description: "Gateway to South India" },
      { name: "Mahabalipuram", description: "UNESCO shore temples" },
      { name: "Madurai", description: "Meenakshi Temple city" },
      { name: "Cochin", description: "Queen of Arabian Sea" },
    ],
    galleryImages: [
      { id: 1, url: "/kerala-backwaters-houseboat-india-sunset.jpg", alt: "Kerala backwaters" },
      { id: 2, url: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg", alt: "South India temple" },
      { id: 3, url: "/indian-heritage-fort-rajasthan-luxury.jpg", alt: "Temple architecture" },
    ],
  },

  {
    id: 4,
    slug: "ladakh-himalayan-photography",
    title: "Ladakh Himalayan Photography Tour",
    tagline: "Capture the Roof of the World",
    description: "Delhi, the Empress of Indian cities has a fascinating history and...",
    duration: 12,
    destination: "India",
    category: "India",
    departure: "Delhi",
    groupSize: "4-10 persons",
    tourType: "Photography/Adventure",
    image: "/himalaya-trekking-adventure-mountains.jpg",
    heroImage: "/himalaya-trekking-adventure-mountains.jpg",
    highlights: ["Pangong Lake photography", "Nubra Valley landscapes", "Ancient monasteries"],
    included: ["Accommodation", "Meals", "Permits", "Photography guide"],
    notIncluded: ["Camera equipment", "Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 5,
    slug: "cycling-tours-north-east-india",
    title: "Cycling Tours in North East India",
    tagline: "Adventure Through Seven Sisters",
    description: "DIBRUGARH is the gateway to the 'Hidden Land' of Eastern Arunachal...",
    duration: 9,
    destination: "India",
    category: "India",
    departure: "Dibrugarh",
    groupSize: "4-12 persons",
    tourType: "Adventure/Cycling",
    image: "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
    heroImage: "/everest-base-camp-nepal-trekking-adventure-photogr.jpg",
    highlights: ["Scenic cycling routes", "Tribal villages", "Tea gardens"],
    included: ["Cycling equipment", "Support vehicle", "Accommodation"],
    notIncluded: ["Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 6,
    slug: "odisha-chhattisgarh-tribal",
    title: "Odisha and Chhattisgarh Tribal Tours – Odisha Tour Packages",
    tagline: "Tribal Heritage of Eastern India",
    description: "Bhubaneshwar is the capital of Odisha and a major city that...",
    duration: 14,
    destination: "India",
    category: "India",
    departure: "Bhubaneshwar",
    groupSize: "2-12 persons",
    tourType: "Cultural/Tribal",
    image: "/indian-heritage-fort-rajasthan-luxury.jpg",
    heroImage: "/indian-heritage-fort-rajasthan-luxury.jpg",
    highlights: ["Tribal village visits", "Konark Sun Temple", "Traditional crafts"],
    included: ["Accommodation", "All meals", "Tribal permits"],
    notIncluded: ["Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 7,
    slug: "north-india-birding",
    title: "North India Birding Tour Package",
    tagline: "For Bird Enthusiasts",
    description: "Java has been the main seat of the family since 1672...",
    duration: 12,
    destination: "India",
    category: "India",
    departure: "Delhi",
    groupSize: "4-10 persons",
    tourType: "Wildlife/Birding",
    image: "/kerala-backwaters-houseboat-india-sunset.jpg",
    heroImage: "/kerala-backwaters-houseboat-india-sunset.jpg",
    highlights: ["Bharatpur Bird Sanctuary", "Chambal River", "Expert ornithologist guide"],
    included: ["Accommodation", "Park fees", "Birding guide"],
    notIncluded: ["Binoculars", "Camera equipment"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 8,
    slug: "beach-backwater-holidays-india",
    title: "Beach and Backwater Holidays in India",
    tagline: "Sun, Sand & Serenity",
    description: "Kovalam is an internationally renowned beach with three adjacent crescent beaches...",
    duration: 9,
    destination: "India",
    category: "India",
    departure: "Cochin",
    groupSize: "2-12 persons",
    tourType: "Beach/Relaxation",
    image: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    heroImage: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    highlights: ["Kovalam beaches", "Alleppey backwaters", "Ayurvedic treatments"],
    included: ["Beach resort stay", "Houseboat cruise", "Ayurvedic spa"],
    notIncluded: ["Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 9,
    slug: "central-india-wildlife",
    title: "Central India Wildlife Tour",
    tagline: "Tiger Territory",
    description: "The area occupied by Mumbai three hundred years ago, was 7...",
    duration: 12,
    destination: "India",
    category: "India",
    departure: "Mumbai",
    groupSize: "4-10 persons",
    tourType: "Wildlife Safari",
    image: "/himalaya-trekking-adventure-mountains.jpg",
    heroImage: "/himalaya-trekking-adventure-mountains.jpg",
    highlights: ["Bandhavgarh National Park", "Kanha Tiger Reserve", "Expert naturalist"],
    included: ["Safari lodges", "Game drives", "Park fees"],
    notIncluded: ["Camera fees"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 10,
    slug: "golden-triangle-forts-havelis",
    title: "Golden Triangle With Forts and Havelis",
    tagline: "Extended Heritage Experience",
    description: "Delhi, the Empress of Indian cities has a fascinating history and...",
    duration: 9,
    destination: "India",
    category: "India",
    departure: "Delhi",
    groupSize: "2-16 persons",
    tourType: "Cultural Heritage",
    image: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    heroImage: "/taj-mahal-india-luxury-travel-editorial-golden-hou.jpg",
    highlights: ["Shekhawati havelis", "Mandawa frescoes", "Extended Jaipur exploration"],
    included: ["Heritage hotels", "All meals", "Monument fees"],
    notIncluded: ["Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 11,
    slug: "mystic-kerala",
    title: "Mystic Kerala Tour",
    tagline: "God's Own Country",
    description: "Cochin, originally built by the Portuguese, has a natural harbor with...",
    duration: 11,
    destination: "India",
    category: "India",
    departure: "Cochin",
    groupSize: "2-10 persons",
    tourType: "Nature & Wellness",
    price: null,
    image: "/kerala-backwaters-houseboat-india-sunset.jpg",
    heroImage: "/kerala-backwaters-houseboat-india-sunset.jpg",
    highlights: ["Overnight houseboat cruise", "Munnar tea plantations", "Kathakali performance", "Ayurvedic spa"],
    included: ["Resort accommodation", "Houseboat stay", "All meals on houseboat", "Ayurvedic massage"],
    notIncluded: ["International flights", "Personal expenses"],
    itinerary: [],
    locationDescription: "Experience Kerala from misty hills to tranquil backwaters.",
    keyDestinations: [
      { name: "Cochin", description: "Historic port city" },
      { name: "Munnar", description: "Hill station with tea gardens" },
      { name: "Alleppey", description: "Venice of the East" },
    ],
    galleryImages: [{ id: 1, url: "/kerala-backwaters-houseboat-india-sunset.jpg", alt: "Kerala backwaters" }],
  },

  {
    id: 12,
    slug: "rajasthan-land-of-maharajas",
    title: "Rajasthan Tour – The Land of Maharajas",
    tagline: "Experience Royal India",
    description: "Delhi, the Empress of Indian cities has a fascinating history and...",
    duration: 13,
    destination: "India",
    category: "India",
    departure: "Delhi",
    groupSize: "2-12 persons",
    tourType: "Royal Heritage",
    image: "/indian-heritage-fort-rajasthan-luxury.jpg",
    heroImage: "/indian-heritage-fort-rajasthan-luxury.jpg",
    highlights: [
      "Stay in heritage palace hotels",
      "Camel safari in Jaisalmer",
      "Udaipur lake palace",
      "Traditional Rajasthani cuisine",
    ],
    included: ["Heritage hotels", "All meals", "Cultural performances"],
    notIncluded: ["International flights", "Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  // ============================================
  // HOLIDAYS (Sri Lanka, Bhutan, Nepal)
  // ============================================

  {
    id: 13,
    slug: "spirituality-yoga-india",
    title: "Spirituality and Yoga Tour In India",
    tagline: "Journey to Inner Peace",
    description: "Delhi, the Empress of Indian cities has a fascinating history and a stimulating present...",
    duration: 12,
    destination: "India",
    category: "Holidays",
    departure: "Delhi",
    groupSize: "2-12 persons",
    tourType: "Spiritual/Wellness",
    image: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    heroImage: "/varanasi-ghats-sunrise-india-spiritual-travel-phot.jpg",
    highlights: ["Yoga sessions in Rishikesh", "Ganges ceremonies in Varanasi", "Meditation retreats", "Ashram stays"],
    included: ["Ashram accommodation", "Yoga sessions", "Vegetarian meals", "Spiritual guide"],
    notIncluded: ["International flights", "Personal expenses"],
    itinerary: [],
    galleryImages: [],
  },

  {
    id: 14,
    slug: "the-island-nation-sri-lanka",
    title: "The Island Nation – Sri Lanka Tour Package",
    tagline: "Pearl of the Indian Ocean",
    description:
      "Colombo – is the business and commercial centre and the new capital is Sri Jayawardhanapura Kotte, which is only a few miles away. Colombo was only a small seaport, which came into prominence in the 16th Century with the arrival of the Portuguese in 1505.",
    fullDescription: `Discover the tropical paradise of Sri Lanka, a tear-drop shaped island nation blessed with ancient temples, pristine beaches, and lush tea plantations. From the cultural triangle to the southern coast, experience 2,500 years of heritage.`,
    duration: 9,
    destination: "Sri Lanka",
    category: "Holidays",
    departure: "Colombo",
    groupSize: "2-12 persons",
    tourType: "Cultural & Beach",
    image: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    heroImage: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg",
    highlights: [
      "Sigiriya Rock Fortress",
      "Temple of the Tooth in Kandy",
      "Yala National Park safari",
      "Galle Fort exploration",
      "Tea plantation visit",
    ],
    included: ["5 Star Accommodation", "Airport Transfer", "Breakfast", "Gallery Ticket", "Lunch"],
    notIncluded: ["Personal Guide"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Colombo",
        description: "<p>Welcome to Sri Lanka! Transfer to your hotel in Colombo.</p>",
        overnight: "Colombo",
      },
      {
        day: 2,
        title: "Colombo – Sigiriya",
        description: "<p>Drive to Sigiriya. Climb the ancient rock fortress.</p>",
        overnight: "Sigiriya",
      },
      {
        day: 3,
        title: "Sigiriya – Kandy",
        description: "<p>Visit Dambulla Cave Temple. Drive to Kandy.</p>",
        overnight: "Kandy",
      },
      {
        day: 4,
        title: "In Kandy",
        description: "<p>Temple of the Tooth. Botanical Gardens. Cultural show.</p>",
        overnight: "Kandy",
      },
      {
        day: 5,
        title: "Kandy – Nuwara Eliya",
        description: "<p>Scenic train ride through tea country.</p>",
        overnight: "Nuwara Eliya",
      },
      {
        day: 6,
        title: "Nuwara Eliya – Yala",
        description: "<p>Drive to Yala National Park area.</p>",
        overnight: "Yala",
      },
      { day: 7, title: "Yala Safari", description: "<p>Morning and afternoon game drives.</p>", overnight: "Yala" },
      {
        day: 8,
        title: "Yala – Galle – Colombo",
        description: "<p>Visit Galle Fort. Drive to Colombo.</p>",
        overnight: "Colombo",
      },
      { day: 9, title: "Depart Colombo", description: "<p>Transfer to airport for departure.</p>", overnight: null },
    ],
    locationDescription: "Explore the cultural triangle and southern coast of Sri Lanka.",
    keyDestinations: [
      { name: "Colombo", description: "Commercial capital" },
      { name: "Sigiriya", description: "Ancient rock fortress" },
      { name: "Kandy", description: "Cultural capital with Temple of Tooth" },
      { name: "Galle", description: "UNESCO Dutch fort" },
    ],
    galleryImages: [
      { id: 1, url: "/maldives-overwater-villa-luxury-travel-editorial-s.jpg", alt: "Sri Lanka beach" },
      { id: 2, url: "/sri-lanka-tea-plantation-hills-green-landscape.jpg", alt: "Tea plantations" },
      { id: 3, url: "/kerala-backwaters-houseboat-india-sunset.jpg", alt: "Tropical scenery" },
    ],
  },

  {
    id: 15,
    slug: "bhutan-trekking",
    title: "Visit Bhutan with Trekking Tour Package",
    tagline: "The Last Shangri-La",
    description:
      "The flight to Paro is one of the most spectacular in entire Himalayas. Flying along the Himalayan range from Kathmandu, the journey offers fascinating views and an exciting descent into the Kingdom.",
    fullDescription: `Experience the mystical kingdom of Bhutan, the last Himalayan Buddhist kingdom. Trek to the iconic Tiger's Nest Monastery, explore ancient dzongs, and immerse yourself in a culture that measures success by Gross National Happiness.`,
    duration: 8,
    destination: "Bhutan",
    category: "Holidays",
    departure: "Paro",
    groupSize: "2-8 persons",
    tourType: "Adventure & Culture",
    image: "/bhutan-tigers-nest-monastery-cliffside.jpg",
    heroImage: "/bhutan-tigers-nest-monastery-cliffside.jpg",
    highlights: [
      "Tiger's Nest Monastery trek",
      "Punakha Dzong visit",
      "Traditional hot stone bath",
      "Archery demonstration",
      "Thimphu exploration",
    ],
    included: ["Government hotels", "All meals", "Licensed guide", "Sustainable Development Fee", "All permits"],
    notIncluded: ["International flights to Paro", "Travel insurance", "Personal expenses"],
    itinerary: [
      {
        day: 1,
        title: "Arrive Paro",
        description: "<p>Spectacular flight into Paro valley. Visit Paro Dzong.</p>",
        overnight: "Paro",
      },
      {
        day: 2,
        title: "Paro – Thimphu",
        description: "<p>Drive to capital city. Visit Memorial Chorten and Buddha Dordenma.</p>",
        overnight: "Thimphu",
      },
      {
        day: 3,
        title: "In Thimphu",
        description: "<p>Explore Tashichho Dzong, folk heritage museum, handicrafts market.</p>",
        overnight: "Thimphu",
      },
      {
        day: 4,
        title: "Thimphu – Punakha",
        description: "<p>Cross Dochula Pass. Visit Punakha Dzong.</p>",
        overnight: "Punakha",
      },
      { day: 5, title: "Punakha – Paro", description: "<p>Return to Paro via scenic route.</p>", overnight: "Paro" },
      {
        day: 6,
        title: "Tiger's Nest Trek",
        description: "<p>Trek to Taktsang Monastery (Tiger's Nest).</p>",
        overnight: "Paro",
      },
      {
        day: 7,
        title: "In Paro",
        description: "<p>Visit Kyichu Lhakhang. Evening hot stone bath.</p>",
        overnight: "Paro",
      },
      { day: 8, title: "Depart Paro", description: "<p>Transfer to airport for departure.</p>", overnight: null },
    ],
    locationDescription: "Journey through the valleys of Bhutan including Paro, Thimphu, and Punakha.",
    keyDestinations: [
      { name: "Paro", description: "Gateway with Tiger's Nest" },
      { name: "Thimphu", description: "Capital city" },
      { name: "Punakha", description: "Former capital with stunning dzong" },
    ],
    galleryImages: [
      { id: 1, url: "/bhutan-tigers-nest-monastery-cliffside.jpg", alt: "Tiger's Nest Monastery" },
      { id: 2, url: "/himalaya-trekking-adventure-mountains.jpg", alt: "Himalayan views" },
    ],
  },
]

// Helper function to get tours by category
export const getToursByCategory = (category) => {
  return tourPackagesData.filter((tour) => tour.category === category)
}

// Helper function to get tour by slug
export const getTourBySlug = (slug) => {
  return tourPackagesData.find((tour) => tour.slug === slug)
}

// Helper function to get related tours
export const getRelatedTours = (currentTourId, limit = 3) => {
  return tourPackagesData.filter((tour) => tour.id !== currentTourId).slice(0, limit)
}
