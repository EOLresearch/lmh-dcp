// src/views/Home/index.js
import { useState } from "react";
import { FaDoorOpen } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { GiBookmark } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

import React from 'react';
import './home.css';


function DescriptionBox({ description, isVisible }) {
  return (
    <div className={`description-box ${isVisible ? 'description-box-visible' : ''}`}>
      {description}
    </div>
  );
}

function Home() {
  const [activeDescription, setActiveDescription] = useState(null);
  const descriptions = {
    door: (
      <div className="desc-container">
        <p>In the <strong>Reminiscence Room</strong>, patients and their caregivers embark on a nostalgic journey:</p>
        <p><strong>Photo Memories:</strong> Upload cherished photographs of the beloved people, significant places, and monumental moments that have shaped a lifetime. Every photo serves as a beacon of memory, a connection to happier times, and a reminder of the love and joy experienced.</p>
        <p><strong>Narrative Stories:</strong> Add depth and context to these photographs by penning down beautiful narratives and anecdotes. Write tales of laughter, achievements, love, and adventures. These stories serve not just as descriptions but as pathways to unlock deeply rooted memories and emotions.</p>
      </div>
    ),
    write: (
      <div className="desc-container">
        <p>Within the <strong>Writing Room</strong>, users find solace and insight:</p>

        <p><strong>Guided Reflection:</strong> Through prompts like "What's on your mind today?", "Today I feel that I am needing...", and "One thing I have learned is...", we gently guide users and caregivers to introspect and articulate their current state of mind, needs, and learnings.</p>

        <p> <strong>Emotional Outlet:</strong> The act of writing can be therapeutic. This room offers an environment to freely express feelings, be it joy, sorrow, gratitude, or hope. It's a safe space to vent, celebrate small victories, or simply ponder life's intricacies.</p>

        <p> <strong>Shared Journaling:</strong> Caregivers and patients can jointly engage, using the Writing Room as a bridge of understanding and empathy. It's a beautiful opportunity to truly listen and be heard, enhancing the bond between them.</p>
      </div>
    ),
    bookmark: (
      <div className="desc-container">
        <p>Within the <strong>Reading Room</strong>, a treasure trove of insights unfolds:</p>

        <p> <strong>Resource Directory:</strong> Access a comprehensive list of organizations, helplines, and supportive communities. Whether you're in search of professional consultation, therapeutic avenues, or tools tailored to dementia care, the Reading Room points you in the right direction.</p>

        <p> <strong>Practical Strategies:</strong> Glean actionable strategies and techniques that can ease daily routines, manage symptoms, and foster positive interactions. With resources tailored for both caregivers and patients, we provide hands-on insights to navigate everyday challenges.</p>

        <p> <strong>Educational Content:</strong> Delve into articles, research papers, and informative guides that break down the nuances of dementia. Equip yourself with knowledge, better understanding its stages, symptoms, and the latest findings in dementia care.</p>
      </div>
    ),
    user: 'User account details'
  };
  return (
    <div className="home">
      <div className='info-box'>
        <h2>Welcome Home.</h2>
        <p>
          Welcome back Joe, This is your Living Memory Home.
        </p>
        <p>
          A quaint and cozy cottage full of light colors with windows that let in bright sunlight and fresh air. When the surrounding trees are painted in autumn colors, it is a perfect moment to take a breath from your daily routine, slow down, and embrace nature.
        </p>
        <div className='icon-btn-container'>
          <div className='icon-btn'
            onMouseEnter={() => setActiveDescription('door')}
            onMouseLeave={() => setActiveDescription(null)}>
            <span className='icon'>
              <FaDoorOpen />
            </span>
            <p>Reminisence Room</p>
          </div>

          <div className='icon-btn'
            onMouseEnter={() => setActiveDescription('write')}
            onMouseLeave={() => setActiveDescription(null)}>
            <span className='icon'>
              <TfiWrite />
            </span>
            <p>Writing Desk</p>
          </div>

          <div className='icon-btn'
            onMouseEnter={() => setActiveDescription('bookmark')}
            onMouseLeave={() => setActiveDescription(null)}>
            <span className='icon'>
              <GiBookmark />
            </span>
            <p>Reading Room</p>
          </div>

          <div className='icon-btn'
            onMouseEnter={() => setActiveDescription('user')}
            onMouseLeave={() => setActiveDescription(null)}>
            <span className='icon'>
              <AiOutlineUser />
            </span>
            <p>My Account</p>
          </div>
        </div>
        {activeDescription && (
          <DescriptionBox description={descriptions[activeDescription]} isVisible={activeDescription} />
        )}
      </div>
    </div>
  );
}

export default Home;
