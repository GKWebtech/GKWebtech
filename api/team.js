const connectToDatabase = require('./db');
const { TeamMember } = require('./models');

const seedTeam = [
  {
    name: "Dr. Anuj Tiwari",
    role: "Founder & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Utkarsh Sharma",
    role: "Fullstack Developer & AI Automation Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    linkedin: "www.linkedin.com/in/utkarsh-sharma-2b9110362",
    github: "https://github.com/Utkarsh9571"
  },
  {
    name: "Vanshika Joshi",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Harshvardhan Vashisth",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Vansh Joshi",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    linkedin: "#",
    github: "#"
  }
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    await connectToDatabase();
    
    let team = await TeamMember.find({});
    
    // Seed if empty
    if (team.length === 0) {
        team = await TeamMember.insertMany(seedTeam);
    }
    
    return res.status(200).json(team);

  } catch (error) {
    console.error('Team API Error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};