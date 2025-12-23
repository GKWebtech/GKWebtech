const connectToDatabase = require('./db');
const { Lead, Brochure } = require('./models');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    // Check and Seed Brochures if empty
    const count = await Brochure.countDocuments();
    if (count === 0) {
      const seedData = [
        { serviceId: 'all', title: 'Full Agency Portfolio', filePath: '/files/Gajkesri_Portfolio.pdf' },
        { serviceId: 'seo-optimization', title: 'SEO Services Brochure', filePath: '/files/SEO_Brochure.pdf' },
        { serviceId: 'social-media-marketing', title: 'Social Media Brochure', filePath: '/files/Social_Media.pdf' },
        { serviceId: 'default', title: 'Service Overview', filePath: '/files/General_Service.pdf' }
      ];
      await Brochure.insertMany(seedData);
    }

    const { name, email, phone, brochureType, serviceId } = req.body;

    // Determine requested brochure
    let searchId = brochureType === 'all' ? 'all' : serviceId;
    let brochure = await Brochure.findOne({ serviceId: searchId });
    
    if (!brochure) {
        brochure = await Brochure.findOne({ serviceId: 'default' });
    }

    // Save Lead
    const newLead = new Lead({
      name,
      email,
      phone,
      source: 'brochure_request',
      brochureRequested: brochure ? brochure.title : 'Unknown'
    });

    await newLead.save();

    // Return download link
    const downloadUrl = brochure ? brochure.filePath : '#';

    return res.status(200).json({ 
      success: true, 
      downloadUrl: downloadUrl,
      message: 'Details saved.' 
    });

  } catch (error) {
    console.error('Brochure API Error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};