const connectToDatabase = require('./db');
const { Project } = require('./models');

// Initial Data for Seeding
const seedProjects = [
  {
    id: "royal-heritage-fort",
    title: "The Royal Heritage Fort",
    location: "Neemrana, Rajasthan",
    category: "Resort Advertising",
    description: "A cinematic showcase of the 15th-century heritage property, highlighting its architectural splendor and luxury amenities through drone videography and lifestyle photography.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    mediaStats: { photos: 45, videos: 3 },
    tags: ["Drone", "Hospitality", "Video"],
    client: "Royal Heritage Group",
    duration: "2 Months",
    challenge: "The property, despite its historical significance, was struggling to attract the modern luxury traveler due to an outdated digital presence.",
    solution: "We executed a comprehensive visual rebranding campaign. Utilizing 4K drone videography to capture the scale of the fort and intimate lifestyle photography to showcase the guest experience.",
    results: ["300% Increase in Wedding Bookings", "2M+ Views on Social Media", "Featured in Travel & Leisure"],
    testimonial: {
      text: "Gajkesri Webtech captured the soul of our property. The visuals are breathtaking and have directly contributed to our highest occupancy season ever.",
      author: "Rajiv Singh",
      role: "General Manager"
    },
    gallery: [
      "https://images.unsplash.com/photo-1590765902095-23f218f45a03?q=80&w=800",
      "https://images.unsplash.com/photo-1590765796280-9286d0ce1806?q=80&w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800"
    ],
    videos: [
      "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-historic-castle-on-a-hill-4240-large.mp4",
      "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"
    ]
  },
  {
    id: "umaid-bhawan-grandeur",
    title: "Umaid Bhawan Grandeur",
    location: "Udaipur, India",
    category: "Luxury Hotel Shoot",
    description: "Capturing the regal essence of one of the world's largest private residences. Our team delivered a comprehensive visual package for their digital rebranding.",
    image: "https://images.unsplash.com/photo-1585544314038-a0d07e6980e6?q=80&w=1200&auto=format&fit=crop",
    mediaStats: { photos: 60, videos: 5 },
    tags: ["Luxury", "Interior", "Lifestyle"],
    client: "Taj Hotels",
    duration: "3 Weeks",
    challenge: "To showcase the grandeur of the palace without making it feel inaccessible or intimidating to the younger demographic.",
    solution: "We focused on 'Royal Warmth'—capturing not just the architecture, but the personalized service and intimate moments within the grand spaces.",
    results: ["50% Increase in Website Engagement", "Award for Best Hotel Video 2023", "Viral Campaign on Instagram"],
    testimonial: {
      text: "The team's attention to detail is unmatched. They managed to balance the heritage with a modern aesthetic perfectly.",
      author: "Priya Sharma",
      role: "Marketing Director"
    },
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=800"
    ],
    videos: [
        "https://assets.mixkit.co/videos/preview/mixkit-hotel-lobby-with-luxury-decoration-4242-large.mp4"
    ]
  },
  {
    id: "amber-sunset-chronicles",
    title: "Amber Sunset Chronicles",
    location: "Jaipur, Rajasthan",
    category: "Outdoor Destination Campaign",
    description: "An evocative outdoor shoot capturing the golden hour at the majestic Amber Fort, designed to promote destination weddings and cultural tourism.",
    image: "https://images.unsplash.com/photo-1566373738875-d6874e0d9956?q=80&w=1200&auto=format&fit=crop",
    mediaStats: { photos: 32, videos: 2 },
    tags: ["Travel", "Culture", "Outdoor"],
    client: "Rajasthan Tourism",
    duration: "1 Week",
    challenge: "To promote Amber Fort as a premier wedding destination while respecting its cultural heritage.",
    solution: "We utilized natural lighting during golden hour to create a romantic, dream-like atmosphere, integrating traditional attire with the historic backdrop.",
    results: ["Top Trending Travel Reel in India", "15% Rise in Pre-wedding Shoot Inquiries"],
    gallery: [
       "https://images.unsplash.com/photo-1598556776374-0a86b51c8888?q=80&w=800",
       "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=800",
       "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800"
    ],
    videos: [
        "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-a-beach-at-sunset-4638-large.mp4"
    ]
  },
  {
    id: "urban-fashion-week",
    title: "Urban Fashion Week",
    location: "Mumbai, India",
    category: "Event Coverage",
    description: "High-energy event coverage for Mumbai's premier fashion week, delivering real-time social media content.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    mediaStats: { photos: 120, videos: 15 },
    tags: ["Fashion", "Event", "Live"],
    client: "Fashion Design Council",
    duration: "3 Days",
    challenge: "Capturing the fast-paced nature of a fashion show and delivering edited content in near real-time for social media.",
    solution: "We deployed a 5-person team with on-site editors. Photos were uploaded within minutes of the walk, ensuring maximum social buzz.",
    results: ["5M+ Hashtag Reach", "Live Stream viewed by 50k people"],
    gallery: [
       "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800",
       "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
       "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800"
    ]
  }
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    await connectToDatabase();
    
    // Check for ID query param
    const { id } = req.query;

    if (id) {
        // Fetch Single
        const project = await Project.findOne({ id: id });
        if (!project) return res.status(404).json({ message: "Project not found" });
        return res.status(200).json(project);
    } else {
        // Fetch All
        let projects = await Project.find({});
        
        // Seed if empty
        if (projects.length === 0) {
            projects = await Project.insertMany(seedProjects);
        }
        
        return res.status(200).json(projects);
    }

  } catch (error) {
    console.error('Projects API Error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};