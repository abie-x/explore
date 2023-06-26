import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'
import { findFlagUrlByCountryName } from 'country-flags-svg';

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
  