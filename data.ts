import { Service, BlogPost, Project, TeamMember, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: "seo-optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1600",
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic with our data-driven SEO strategies.",
    fullDescription: "Our SEO Optimization service is designed to propel your business to the top of search engine results. We go beyond basic keyword insertion to provide a comprehensive strategy that includes technical SEO audits, on-page optimization, high-quality link building, and content optimization. We analyze search intent to ensure your brand connects with the right audience at the right time.",
    features: [
      "Comprehensive Website Audit & Technical SEO",
      "Keyword Research & Competitor Analysis",
      "On-Page Optimization (Meta tags, Headings, Content)",
      "Off-Page Link Building & Authority Growth",
      "Local SEO for Geographic Targeting",
      "Monthly Performance Reporting & Tracking"
    ]
  },
  {
    id: "social-media-marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1600",
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across all major social media platforms.",
    fullDescription: "Social media is the heartbeat of modern digital interaction. Our team creates bespoke social media strategies that amplify your brand voice, foster community engagement, and drive conversions. From Instagram Reels to LinkedIn thought leadership, we manage your presence across all relevant platforms to ensure consistent and impactful messaging.",
    features: [
      "Platform-Specific Strategy (Instagram, LinkedIn, Twitter, TikTok)",
      "Content Calendar Creation & Scheduling",
      "Community Management & Engagement",
      "Influencer Partnership Management",
      "Social Listening & Trend Analysis",
      "Paid Social Campaigns Integration"
    ]
  },
  {
    id: "content-strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600",
    title: "Content Strategy & Branding",
    description: "Create compelling content and a strong brand identity that resonates with your audience.",
    fullDescription: "Content is king, but context is queen. We develop robust content strategies that align with your business goals and speak directly to your customer's pain points. Our branding services ensure that every piece of content—from blog posts to whitepapers—reflects your unique identity, establishing trust and authority in your industry.",
    features: [
      "Brand Voice & Identity Development",
      "Content Audits & Gap Analysis",
      "Blog Writing & Long-form Content",
      "Copywriting for Web & Ad Creatives",
      "Visual Storytelling & Infographics",
      "Newsletter & Email Marketing Content"
    ]
  },
  {
    id: "google-meta-ads",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600",
    title: "Google & Meta Ads",
    description: "Maximize ROI with targeted PPC campaigns on Google, Facebook, and Instagram.",
    fullDescription: "Stop wasting money on vague advertising. Our paid media experts design high-conversion campaigns on Google Ads and Meta (Facebook/Instagram). We utilize advanced targeting, retargeting pixels, and A/B testing to lower your Cost Per Acquisition (CPA) while maximizing your Return on Ad Spend (ROAS).",
    features: [
      "Google Search & Display Ads Management",
      "Facebook & Instagram Ad Campaigns",
      "Retargeting & Lookalike Audiences",
      "A/B Testing for Ad Creatives",
      "Conversion Tracking Setup",
      "Real-time Budget Optimization"
    ]
  },
  {
    id: "campaign-planning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    title: "Campaign Planning & Analytics",
    description: "Strategic planning and in-depth analytics to optimize every aspect of your marketing.",
    fullDescription: "Data without insight is just noise. We provide end-to-end campaign planning backed by rigorous analytics. Whether you are launching a new product or looking to scale, our team maps out the entire customer journey. We set clear KPIs and use advanced analytics tools to track performance, ensuring every dollar spent contributes to your bottom line.",
    features: [
      "Full-Funnel Campaign Strategy",
      "Customer Journey Mapping",
      "Google Analytics 4 (GA4) Setup & Audit",
      "Custom Dashboard Creation",
      "Conversion Rate Optimization (CRO)",
      "Competitor Benchmarking"
    ]
  },
  {
    id: "website-management",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1600",
    title: "Website Management & WordPress",
    description: "Secure, fast, and optimized website management services specialized in WordPress.",
    fullDescription: "Your website is your digital storefront. We offer comprehensive WordPress management services to keep your site secure, fast, and up-to-date. From plugin updates and security patches to speed optimization and minor design tweaks, we handle the technical details so you can focus on running your business.",
    features: [
      "WordPress Theme & Plugin Updates",
      "Site Speed Optimization (Core Web Vitals)",
      "Daily Backups & Security Monitoring",
      "Malware Removal & Protection",
      "Content Updates & Layout Fixes",
      "Hosting Management & Migration"
    ]
  },
  {
    id: "creative-design",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    detailImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
    title: "Creative Ad Design & Reels",
    description: "Eye-catching visuals and short-form video content designed to go viral.",
    fullDescription: "In a crowded digital landscape, visuals are your first impression. Our creative studio produces stunning graphic designs and high-energy short-form videos (Reels/TikToks) that capture attention instantly. We blend aesthetics with psychology to create ads that not only look good but drive action.",
    features: [
      "Social Media Graphics & Templates",
      "Short-Form Video Production (Reels/Shorts)",
      "Display Ad Banners & Creatives",
      "Motion Graphics & Animation",
      "Video Editing & Post-Production",
      "Thumbnail Design"
    ]
  }
];

export const blogsData: BlogPost[] = [
  {
    id: "future-of-seo-ai",
    category: 'SEO Strategy',
    date: '21 May 2024',
    title: 'The Future of SEO: AI and Voice Search Trends',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Explore how Artificial Intelligence and voice search are reshaping the landscape of Search Engine Optimization in 2024.',
    author: 'Vikram Rathore',
    readTime: '5 min read',
    tags: ['AI', 'SEO', 'Technology', 'Trends'],
    content: `
      <p>Search Engine Optimization (SEO) is undergoing a paradigm shift. With the advent of Generative AI and the increasing prevalence of voice search, the traditional methods of keyword stuffing and backlink farming are rapidly becoming obsolete. In 2024, the focus is squarely on <strong>user intent</strong> and <strong>contextual relevance</strong>.</p>
      
      <h3>The Rise of Generative Engine Optimization (GEO)</h3>
      <p>As search engines like Google integrate AI overviews (SGE), visibility isn't just about ranking number one on a blue link list; it's about being cited in the AI-generated answer. This requires content that is authoritative, comprehensive, and structured for machine understanding.</p>
      
      <h3>Voice Search is Non-Negotiable</h3>
      <p>With smart speakers and mobile assistants, voice queries are more conversational. "Best Italian restaurant near me" is replaced by "Hey Google, where can I find authentic pasta nearby that's open right now?" Optimizing for long-tail keywords and natural language is crucial.</p>
      
      <blockquote>"The future of search isn't just about finding links; it's about finding answers. Brands that provide direct, high-value answers will win."</blockquote>
      
      <h3>Key Takeaways for 2024:</h3>
      <ul>
        <li>Focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</li>
        <li>Structure your data with Schema markup.</li>
        <li>Create content that answers specific questions directly.</li>
      </ul>
    `
  },
  {
    id: "maximizing-roi-instagram-ads",
    category: 'Social Media',
    date: '20 May 2024',
    title: 'Maximizing ROI on Instagram Ads in 2024',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    excerpt: 'Learn the latest strategies to lower your CPA and increase engagement with high-converting Instagram ad creatives.',
    author: 'Emily Chen',
    readTime: '4 min read',
    tags: ['Social Media', 'Ads', 'Instagram', 'ROI'],
    content: `
      <p>Instagram advertising has become more competitive, but it remains one of the most powerful tools for B2C brands. The key to success in 2024 isn't just budget; it's <strong>creative agility</strong>.</p>
      
      <h3>UGC is King</h3>
      <p>User-Generated Content (UGC) continues to outperform polished studio shots. Ads that look like organic content—specifically Reels—have a significantly lower Cost Per Click (CPC). Authenticity builds trust faster than high production value.</p>
      
      <h3>Leverage AI for Creative Testing</h3>
      <p>Meta's Advantage+ suite allows advertisers to automatically test different variations of headlines, copy, and visuals. Instead of guessing what works, let the algorithm find the winning combination for you.</p>
      
      <h3>Strategies for Success:</h3>
      <ol>
        <li><strong>Hook in 3 Seconds:</strong> You must grab attention immediately.</li>
        <li><strong>Use Vertical Video:</strong> 9:16 aspect ratio is mandatory for Reels placements.</li>
        <li><strong>Clear CTA:</strong> Tell the user exactly what to do next (e.g., "Shop Now", "Learn More").</li>
      </ol>
    `
  },
  {
    id: "content-strategy-converts",
    category: 'Content Marketing',
    date: '19 May 2024',
    title: 'How to Build a Content Strategy That Converts',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop',
    excerpt: 'Stop creating content for the sake of it. Here is a blueprint for a content funnel that turns readers into buyers.',
    author: 'Sarah Jenkins',
    readTime: '6 min read',
    tags: ['Content', 'Marketing', 'Strategy', 'Funnel'],
    content: `
      <p>Many businesses fall into the trap of "content churn"—publishing blog posts and social updates without a clear purpose. A high-converting content strategy maps content to the <strong>buyer's journey</strong>.</p>
      
      <h3>Top of Funnel (Awareness)</h3>
      <p>At this stage, your audience is looking for answers to problems, not products. Create educational blog posts, infographics, and "how-to" videos. The goal is traffic and trust.</p>
      
      <h3>Middle of Funnel (Consideration)</h3>
      <p>Now they know who you are. Offer them value in exchange for contact info. Think webinars, case studies, and free downloadable templates.</p>
      
      <h3>Bottom of Funnel (Decision)</h3>
      <p>This is where you sell. Product comparisons, testimonials, and detailed service pages (like the ones on this site!) are critical here.</p>
      
      <p>Remember: Consistency is key, but quality creates conversion.</p>
    `
  },
  {
    id: "wordpress-security-essentials",
    category: 'Web Development',
    date: '15 May 2024',
    title: 'WordPress Security Essentials for 2024',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Protect your business assets with these critical security measures for your WordPress website.',
    author: 'Rohan Gupta',
    readTime: '7 min read',
    tags: ['WordPress', 'Security', 'Web Dev', 'Cybersecurity'],
    content: `
      <p>WordPress powers over 40% of the web, making it a prime target for hackers. Securing your site is not optional; it's a fundamental business requirement.</p>
      
      <h3>1. Keep Everything Updated</h3>
      <p>Outdated plugins and themes are the #1 entry point for vulnerabilities. Enable auto-updates for minor versions and check major updates in a staging environment first.</p>
      
      <h3>2. Use a Web Application Firewall (WAF)</h3>
      <p>Services like Cloudflare or Wordfence provide a shield between your site and incoming traffic, blocking malicious requests before they reach your server.</p>
      
      <h3>3. Enforce Strong Authentication</h3>
      <p>Two-Factor Authentication (2FA) is a must for all admin accounts. Additionally, limit login attempts to prevent brute-force attacks.</p>
      
      <p>Don't wait for a hack to take security seriously. Prevention is always cheaper than recovery.</p>
    `
  },
  {
    id: "power-of-email-marketing",
    category: 'Email Marketing',
    date: '10 May 2024',
    title: 'Why Email Marketing Still Deliver the Best ROI',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Despite the rise of social media, email remains the most effective channel for direct sales and customer retention.',
    author: 'Emily Chen',
    readTime: '4 min read',
    tags: ['Email', 'Marketing', 'Retention', 'ROI'],
    content: `
      <p>It's easy to get distracted by the latest social media trends, but when it comes to dollars and cents, <strong>email is undisputed</strong>. The average ROI for email marketing is $36 for every $1 spent.</p>
      
      <h3>Ownership vs. Rental</h3>
      <p>On social media, you are renting your audience from an algorithm that can change tomorrow. Your email list is an asset you own. No one can throttle your reach to your own subscribers.</p>
      
      <h3>Personalization at Scale</h3>
      <p>Modern email tools allow for hyper-segmentation. You can send different offers to people who abandoned a cart versus those who just read a blog post. This relevance drives revenue.</p>
      
      <h3>Automation is Your Friend</h3>
      <p>Set up welcome sequences, birthday discounts, and re-engagement campaigns once, and let them generate revenue while you sleep.</p>
    `
  }
];

export const projectsData: Project[] = [
  {
    id: "Nirvanavan Foundation",
    title: "Nirvanavan Foundation",
    location: "Dadikar, Rajasthan",
    category: "Event ",
    description: "A cinematic showcase of the 15th-century heritage property, highlighting its architectural splendor and luxury amenities through drone videography and lifestyle photography.",
    image: "/images/portfolio/Nirvanan-Foundation/Group.jpeg",
    mediaStats: { photos: 10, videos: 1 },
    tags: ["Drone", "Video", "Art"],
    client: "Nirvanan Foundation",
    duration: "2 Weeks",
    challenge: "The property, despite its historical significance, was struggling to attract the modern luxury traveler due to an outdated digital presence.",
    solution: "We executed a comprehensive visual rebranding campaign. Utilizing 4K drone videography to capture the scale of the fort and intimate lifestyle photography to showcase the guest experience.",
    results: ["300% Increase in Wedding Bookings", "2M+ Views on Social Media", "Featured in Travel & Leisure"],
    testimonial: {
      text: "Gajkesri Webtech captured the soul of our property. The visuals are breathtaking and have directly contributed to our highest occupancy season ever.",
      author: "Nirvanan Bodhisattva",
      role: "Founder of Nirvanan Foundation"
    },
    gallery: [],
    youtubeIds: []

  },
  {
    id: "Rambihari Palace",
    title: "Rambihari Palace",
    location: "Kishanpur, Alwar, Rajasthan",
    category: "Luxury Palace Shoot",
    description: "Capturing the regal essence of one of the best hidden gem of Rajasthan's culture. Our team delivered a comprehensive visual package for their digital rebranding.",
    image: "/images/portfolio/Rambihari/20251213_230354.jpg",
    mediaStats: { photos: 19, videos: 2 },
    tags: ["Luxury", "Interior", "Royality", "Lifestyle", "Hospitality"],
    client: "Rambihari Palace A Luxury Hotel",
    duration: "1 Week",
    challenge: "To showcase the grandeur of the palace without making it feel inaccessible or intimidating to the younger demographic.",
    solution: "We focused on 'Royal Warmth'—capturing not just the architecture, but the personalized service and intimate moments within the grand spaces.",
    results: ["50% Increase in Website Engagement", "Viral Campaign on Instagram"],
    testimonial: {
      text: "The team's attention to detail is unmatched. They managed to balance the heritage with a modern aesthetic perfectly.",
      author: "Mr. Ram Kaushik",
      role: "Owner"
    },
    gallery: ["/images/portfolio/Rambihari/IMG_0448.JPG", "/images/portfolio/Rambihari/6.1.jpg", "/images/portfolio/Rambihari/9.1.jpg", "/images/portfolio/Rambihari/20251213_224325.jpg", "/images/portfolio/Rambihari/IMG_0336.JPG", "/images/portfolio/Rambihari/IMG_0385.png", "/images/portfolio/Rambihari/IMG_0408.png", "/images/portfolio/Rambihari/IMG_0435.JPG", "/images/portfolio/Rambihari/IMG_0437.png", "/images/portfolio/Rambihari/IMG_0448.JPG",, "/images/portfolio/Rambihari/IMG_0545.JPG", "/images/portfolio/Rambihari/IMG_0551.png", "/images/portfolio/Rambihari/IMG_0592.JPG", "/images/portfolio/Rambihari/IMG_0633.JPG", "/images/portfolio/Rambihari/IMG_0639.JPG", "/images/portfolio/Rambihari/IMG_0648.JPG", "/images/portfolio/Rambihari/IMG_0651.png", "/images/portfolio/Rambihari/IMG_0653.JPG", "/images/portfolio/Rambihari/IMG_0654.JPG"],
    youtubeIds: []
  },
  {
    id: "Dadikar Fort",
    title: "Dadikar Fort",
    location: "Dadikar, Rajasthan",
    category: "Luxury Fort Shoot",
    description: "An evocative outdoor shoot capturing the golden hour at the majestic Dadikar Fort, designed to promote destination weddings and cultural tourism.",
    image: "https://images.unsplash.com/photo-1566373738875-d6874e0d9956?q=80&w=1200&auto=format&fit=crop",
    mediaStats: { photos: 10, videos: 2 },
    tags: ["Travel", "Culture", "Luxury", "Outdoor"],
    client: "Dadhikar Fort & Resorts Private Limited",
    duration: "1 Week",
    challenge: "To promote Dadikar Fort as a premier wedding destination while respecting its cultural heritage.",
    solution: "We utilized natural lighting during golden hour to create a romantic, dream-like atmosphere, integrating traditional attire with the historic backdrop.",
    results: ["Top Trending Travel Reel in India", "15% Rise in Pre-wedding Shoot Inquiries"],
    gallery: [
       "https://images.unsplash.com/photo-1598556776374-0a86b51c8888?q=80&w=800",
       "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=800",
       "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800"
    ],
    youtubeIds: [ 
        "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-a-beach-at-sunset-4638-large.mp4"
    ]
  },
  {
    id: "Bamboo Saa Resort & Spa",
    title: "Bamboo Saa Resort & Spa",
    location: "Jaipur, Rajasthan",
    category: "Wellness Retreat Marketing",
    description: "High-energy event coverage for Jaipur's premier wellness retreat, delivering real-time social media content.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    mediaStats: { photos: 10, videos: 2 },
    tags: ["Wellness", "Nature", "Amenities"],
    client: "Mr. V.K. Agarwal",
    duration: "1 Week",
    challenge: "Capturing the nature in a resort based in the capital of Rajasthan and delivering edited content in near real-time for social media.",
    solution: "We deployed a 5-person team with on-site editors. Ensuring maximum social buzz.",
    results: ["5M+ Hashtag Reach", "Live Stream viewed by 50k people"],
    gallery: [
       "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800",
       "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
       "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800"
    ]
  }
];

export const teamData: TeamMember[] = [
  {
    name: "Dr. Anuj Tiwari",
    education: "PhD from Netherlands",
    role: "Founder & Director",
    image: "/images/team/Founder.png",
    linkedin: "https://www.linkedin.com/in/atal-s-03570938a/",
    github: "#"
  },
  {
    name: "Utkarsh Sharma",
    education: "",   
    role: "Chief Technical Officer",
    image: "/images/team/Utkarsh1.JPG",
    linkedin: "https://www.linkedin.com/in/utkarsh-sharma-2b9110362",
    github: "https://github.com/Utkarsh9571"
  },
  {
    name: "Vanshika Joshi",
    education: "",
    role: "Chief Managing Officer",
    image: "/images/team/Vanshika.png",
    linkedin: "https://www.linkedin.com/in/vanshika-joshi-599247251/",
    github: "#"
  },
  {
    name: "Vansh Joshi",
    education: "",
    role: "Operations Manager",
    image: "/images/team/Vansh.png",
    linkedin: "#",
    github: "#"
  }
];

export const testimonialsData: Testimonial[] = [
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
    rating: 4,
    text: "The ROI we've seen from their PPC campaigns is incredible. Professional, data-driven, and transparent reporting. Highly recommended!",
    name: "Jenny Wilson",
    role: "Director of Marketing, FashionNova",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];