import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'
import { findFlagUrlByCountryName } from 'country-flags-svg';
import nodemailer from 'nodemailer'





const postExperience = asyncHandler(async (req, res) => {
    try {
      // Extract the necessary data from the request body
      const { username, country, email, experience, addToNewsletter } = req.body;
  
      // Create a new post object
      const newPost = new Post({
        username,
        country,
        email,
        experience,
        addToNewsletter
      });
  
      // Save the post to the database
      const savedPost = await newPost.save();

      const main = async () => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
                port: 465, // Port for SMTP (usually 465)
                secure: true, // Usually true if connecting to port 465
                auth: {  
                  user: "abhiramzmenon@gmail.com", // Your email address
                  pass: "vdfmuyguhvctijwx", // Password (for gmail, your app password)
                  // ⚠️ For better security, use environment variables set on the server for these values when deploying
                },
                debug: true
            });
        
            let info = await transporter.sendMail({
                from: 'abhiramzmenon@gmail.com',
                to: `${email}`,
                subject: "Testing, testing, 123",
                html: `
                <h1>Hello there</h1>
                <p>Isn't NodeMailer useful?</p>
                `,
            });

            console.log('checking the backend api')
            console.log(info)
        
            console.log(info.messageId);
        } catch(error) {
            console.log(error)
        }
      }

      main()
  
      // Send a success response
      return res.status(201).json({ message: 'Experience posted successfully', post: savedPost });
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error posting experience:', error);
      return res.status(500).json({ error: 'An error occurred while posting the experience' });
    }
});

const getFlagImageLink = (country) => {
    const flagImageLink = findFlagUrlByCountryName(country);
    return flagImageLink || 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
};

const getLatestExperiences = asyncHandler(async (req, res) => {
    try {
      // Retrieve the latest 8 experiences from the database
      const experiences = await Post.find().sort({ createdAt: -1 }).limit(6);
  
      // Map the experiences to include the flag image link based on the country
      const experiencesWithFlag = await Promise.all(
        experiences.map(async (experience) => {
          const { country } = experience;
          const flagImageLink = getFlagImageLink(country);
          return { ...experience._doc, flagImageLink };
        })
      );
  
      // Send the experiences with flag image links as the response
      return res.status(200).json(experiencesWithFlag);
    } catch (error) {
      console.error('Error retrieving experiences:', error);
      return res.status(500).json({ error: 'An error occurred while retrieving experiences' });
    }
});



export {
    postExperience,
    getLatestExperiences
}
  