const connectToDatabase = require('./db');
const { Testimonial } = require('./models');

const seedTestimonials = [
  {
    rating: 5,
    text: "Gajkesri Webtech completely transformed our online presence. Our organic traffic increased by 200% in just six months, and the lead quality has never been better.",
    name: "Leslie Alexander",
    role: "CMO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    rating: 5,
    text: "Their social media team is outstanding. They captured our brand voice perfectly and engaged our community in ways we couldn't have imagined.",
    name: "Albert Flores",
    role: "Founder, GreenLife",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    rating: 5,
    text: "The ROI we've seen from their PPC campaigns is incredible. Professional, data-driven, and transparent reporting. Highly recommended!",
    name: "Jenny Wilson",
    role: "Director of Marketing, FashionNova",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    await connectToDatabase();
    
    let testimonials = await Testimonial.find({});
    
    // Seed if empty
    if (testimonials.length === 0) {
        testimonials = await Testimonial.insertMany(seedTestimonials);
    }
    
    return res.status(200).json(testimonials);

  } catch (error) {
    console.error('Testimonial API Error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};