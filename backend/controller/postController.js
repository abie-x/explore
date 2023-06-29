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
        
            // let info = await transporter.sendMail({
            //     from: 'abhiramzmenon@gmail.com',
            //     to: `${email}`,
            //     subject: " Exciting crypto rewards await you! Thank you for being part of the community",
            //     html: `
            //     <h3>Hello there ${username},</h3>
            //     <p>We wanted to take a moment to express our deepest gratitude for joining us on this incredible journey. Your contribution and dedication to sharing your travel experiences are the very foundation upon which our movement is built. Thank you for being an essential part of Vybes.</p>
            //     <br />
            //     <p>As a token of our appreciation, we are excited to announce that you will be receiving exclusive crypto tokens when we launch our app later this year. These tokens hold immense value, and they signify your integral role in shaping the future of travel in India. You are not just a participant; you are a trailblazer, a pioneer, and a catalyst for change.</p>
            //     <br />
            //     <p>With these crypto tokens, you will have the power to unlock a world of extraordinary travel experiences. Picture yourself exploring hidden gems, indulging in unique cultural encounters, and venturing off the beaten path, all made possible through the value of these tokens. The more you accumulate, the more you'll be able to customize and elevate your future journeys.</p>
            //     <br />
            //     <p>But it doesn't end there. Your involvement in this movement extends far beyond your personal gain. By sharing your experiences and spreading the word, you are actively contributing to the growth and enrichment of our community. Together, we will revolutionize the way people travel, showcasing the wonders of India to the world.</p>
            //     <br />
            //     <p>We invite you to share your association with Vybes with pride. Let your friends, family, and social media followers know that you are part of something remarkable. Encourage them to join us, to share their own stories, and to become part of this transformative movement. Together, we will create a travel culture that celebrates exploration, connection, and the sheer joy of discovering the incredible wonders of India. </p>
            //     <br />
            //     <p>Stay tuned for further updates and announcements about the app launch. The future of travel is in our hands, and together, we will redefine what it means to explore.</p>
            //     <br />
            //     <br />
            //     <p>With boundless gratitude,</p>
            //     `,
            // });

          //   let info = await transporter.sendMail({
          //     from: 'abhiramzmenon@gmail.com',
          //     to: `${email}`,
          //     subject: "Exciting crypto rewards await you! Thank you for being part of the community",
          //     html: `
          //     <div style="font-family: Arial, sans-serif; padding: 20px;">
          //         <h3>Hello there ${username},</h3>
          //         <p>We wanted to take a moment to express our deepest gratitude for joining us on this incredible journey. Your contribution and dedication to sharing your travel experiences are the very foundation upon which our movement is built. Thank you for being an essential part of Vybes.</p>
          //         <br />
          //         <p style="font-weight: bold;">As a token of our appreciation, we are excited to announce that you will be receiving exclusive crypto tokens when we launch our app later this year. These tokens hold immense value, and they signify your integral role in shaping the future of travel in India. You are not just a participant; you are a trailblazer, a pioneer, and a catalyst for change.</p>
          //         <br />
          //         <p>With these crypto tokens, you will have the power to unlock a world of extraordinary travel experiences. Picture yourself exploring hidden gems, indulging in unique cultural encounters, and venturing off the beaten path, all made possible through the value of these tokens. The more you accumulate, the more you'll be able to customize and elevate your future journeys.</p>
          //         <br />
          //         <p>But it doesn't end there. Your involvement in this movement extends far beyond your personal gain. By sharing your experiences and spreading the word, you are actively contributing to the growth and enrichment of our community. Together, we will revolutionize the way people travel, showcasing the wonders of India to the world.</p>
          //         <br />
          //         <p>We invite you to share your association with Vybes with pride. Let your friends, family, and social media followers know that you are part of something remarkable. Encourage them to join us, to share their own stories, and to become part of this transformative movement. Together, we will create a travel culture that celebrates exploration, connection, and the sheer joy of discovering the incredible wonders of India.</p>
          //         <br />
          //         <p>Stay tuned for further updates and announcements about the app launch. The future of travel is in our hands, and together, we will redefine what it means to explore.</p>
          //         <br />
          //         <br />
          //         <p style="font-weight: bold;">With boundless gratitude,</p>
          //         <p>Your Vybes Team</p>
          //     </div>
          //     `,
          // });
          
          let info = await transporter.sendMail({
            from: 'abhiramzmenon@gmail.com',
            to: `${email}`,
            subject: "Exciting crypto tokens worth $100 for you🔥 Thank you for being part of the community!",
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.5;
                        color: #333333;
                    }
                    
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    
                    .header {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    
                    .greeting {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    
                    .message {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                    
                    .highlight {
                        font-weight: bold;
                        font-size: 16px;
                    }
                    
                    .benefits {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                    
                    .benefit-item {
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
                    
                    .share-section {
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                    
                    .closing {
                        font-size: 16px;
                        margin-top: 20px;
                    }

                      .closing-company_name {
                        font-size: 16px;
                        line-height: .5; /* Adjust the line height to create space between paragraphs */
                  }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h3 class="greeting">Hello there, ${username}!</h3>
                    </div>
                    <p class="message">We wanted to take a moment to express our deepest gratitude for joining us on this incredible journey. Your contribution and dedication to sharing your travel experiences are the very foundation upon which our movement is built. Thank you for being an essential part of Vybes.</p>
                    
                    <div class="benefits">
                        <p class="highlight">As a token of our appreciation, we are excited to announce that you will be receiving exclusive crypto tokens when we launch our app later this year.</p>
                        <p class="highlight">These tokens hold immense value, and they signify your integral role in shaping the future of travel in India.</p>
                        <p class="highlight">You are not just a participant; you are a trailblazer, a pioneer, and a catalyst for change.</p>
                    </div>
                    
                    <div class="benefits">
                        <p>With these crypto tokens, you will have the power to unlock a world of extraordinary travel experiences.</p>
                        <p>Picture yourself exploring hidden gems, indulging in unique cultural encounters, and venturing off the beaten path, all made possible through the value of these tokens.</p>
                        <p>The more you accumulate, the more you'll be able to customize and elevate your future journeys.</p>
                    </div>
                    
                    <div class="share-section">
                        <p>But it doesn't end there. Your involvement in this movement extends far beyond your personal gain.</p>
                        <p>By sharing your experiences and spreading the word, you are actively contributing to the growth and enrichment of our community.</p>
                        <p>Together, we will revolutionize the way people travel, showcasing the wonders of India to the world.</p>
                    </div>
                    
                    <p class="closing">We invite you to share your association with Vybes with pride. Let your friends, family, and social media followers know that you are part of something remarkable</p>
                    <p class="closing">Encourage them to join us, to share their own stories, and to become part of this transformative movement.Together, we will create a travel culture that celebrates exploration, connection, and the sheer joy of discovering the incredible wonders of India.</p>
                    
                    <p class="closing">Stay tuned for further updates and announcements about the app launch.The future of travel is in our hands, and together, we will redefine what it means to explore.</p>
                    
                    <div class='closing-company_name'>
                      <p>With boundless gratitude,</p>
                      <p>The Vybes Team💗</p>
                    </div>
                </div>
            </body>
            </html>
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
      return res.status(201).json({ message: 'Experience posted successfully'});
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error posting experience:', error);
      return res.status(500).json({ message: 'An error occurred while posting the experience' });
    }
});

const getFlagImageLink = (country) => {
    const flagImageLink = findFlagUrlByCountryName(country);
    return flagImageLink || 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';
};

const getLatestExperiences = asyncHandler(async (req, res) => {
    try {
      // Retrieve the latest 8 experiences from the database
      const experiences = await Post.find().sort({ createdAt: -1 }).limit(4);
  
      // Map the experiences to include the flag image link based on the country
      const experiencesWithFlag = await Promise.all(
        experiences.map(async (experience) => {
          const { country } = experience;
          const flagImageLink = getFlagImageLink(country);
          console.log(experience)
          return { username: experience.username, country: experience.country, experience: experience.experience, flagImageLink };
        })
      );
  
      // Send the experiences with flag image links as the response
      return res.status(200).json(experiencesWithFlag);
    } catch (error) {
      console.error('Error retrieving experiences:', error);
      return res.status(500).json({ message: 'An error occurred while retrieving experiences' });
    }
});



export {
    postExperience,
    getLatestExperiences
}
  