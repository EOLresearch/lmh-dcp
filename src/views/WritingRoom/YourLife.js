import React, { useState, useRef } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import lifebook from '../../assets/img/lifebook.png';
import lifebook2 from '../../assets/img/lifebook2.png';
import Prompt from './Prompt'; // Import the Prompt component

const prompts = {
  earlyChildhood: {
    title: "Early Childhood",
    prompts: [
      "Where were you born?",
      "What are some of your earliest childhood memories?",
      "Where did you grow up, go to school?",
      "Who were the most influential people from your early life?",
      "What were your favorite activities or games as a child?",
      "Were there any significant events or experiences in your early childhood that shaped who you are today?",
      "Did you have pets growing up? What were they like?",
      "What were your favorite foods or snacks as a child?",
      "Did you have favorite toys or possessions that were particularly special to you?",
      "How did you celebrate birthdays and holidays when you were a child?",
      "Can you describe your childhood home and neighborhood?",
      "Did you have any nicknames when you were a child? How did you get them?",
      "Did you have any favorite songs or music that you enjoyed listening to as a child?",
      "Were there any specific places you loved to visit or go on family outings during your early years?"
    ]
  },
  adolescence: {
    title: "Adolescence",
    prompts: [
      "How would you describe yourself as a teenager? What were your interests, hobbies, and passions?",
      "Can you share a funny story from your adolescence?",
      "Who were your closest friends during your teenage years? What activities did you enjoy doing together?",
      "What was your relationship like with your family during your adolescence?",
      "How did you spend your free time as a teenager? Were there any particular hangout spots or activities you enjoyed?",
      "Did you have any part-time jobs or responsibilities during adolescence? How did they impact your life?",
      "Can you recall any fashion trends or cultural phenomena that were popular during your adolescence?",
      "What were your dreams or aspirations for the future when you were a teenager?",
      "Looking back, what advice would you give your teenager self?"
    ]
  },
  youngAdulthood: {
    title: "Young Adulthood",
    prompts: [
      "What was your first job or career path as a young adult?",
      "Can you share a memorable travel experience or adventure from your young adult years?",
      "Did you face any obstacles or setbacks during your young adult years?",
      "Looking back, what lessons did you learn during your young adult years that have shaped who you are today?",
      "Were there any hobbies, interests, or passions that you pursued during this time in your life?",
      "What was your favorite thing about being a young adult?",
      "Can you describe your first apartment or living situation after leaving home?",
      "Can you share a funny or memorable story from your early twenties?",
      "What were some of the big decisions you had to make during your early adulthood?",
      "How did you stay in touch with family or friends who lived far away?",
      "Can you share a memorable friendship or relationship from your early twenties?",
      "What was your favorite way to unwind or relax after a long day?",
      "What was your go-to meal or recipe?"
    ]
  },
  middleAdulthood: {
    title: "Middle Adulthood",
    prompts: [
      "Can you share a significant career accomplishment or project you worked on during your middle adulthood?",
      "Can you describe any volunteer work or community involvement that was meaningful to you during your middle adulthood?",
      "Can you share a challenging experience you faced and how you overcame it during this stage of life?",
      "Did you encounter any unexpected passions or interests that emerged during your middle adulthood?",
      "Did you experience any major life events with your family such as weddings, births, reunions, during this time?",
      "Can you describe the importance of communication and connection within your family during your middle adulthood?"
    ]
  },
  olderAdulthood: {
    title: "Older Adulthood",
    prompts: [
      "Can you share any wisdom or life lessons you have learned over the years?",
      "What are some of your favorite memories from the last few years?",
      "What are you most proud of accomplishing in your older adulthood?",
      "What activities or hobbies do you enjoy most?",
      "How has your perspective on life changed as you have grown older?",
      "What role do your relationship with family and friends play?",
      "Can you share any traveling experiences or adventures you have had in your older adulthood?",
      "What advice would you give to younger generations?",
      "Can you describe any new hobbies or interests you’ve picked up?",
      "What are some things you appreciate more as you’ve aged?",
      "Who do you feel closest to in this stage of your life?",
      "Do you have any grandchildren? If so, what are they like?",
      "What are things you would like others to know about you?"
    ]
  }
};


const YourLife = ({ setShowYourLife }) => {
  const [openLifeBook, setOpenLifeBook] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const coverPhotoInputRef = useRef(null);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    console.log("Saving content: ", editorContent);
    // Implement save logic here...
  };

  const handleCoverPhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
  };
  const toggleExpandSection = (section) => {
    setExpandedSection(section === expandedSection ? null : section);
  };
  const handleBackButtonClick = () => {
    setSelectedPrompt(null);
  };
  return (
    <div className="feature-container">
      <button className="close-btn" onClick={() => setShowYourLife(false)}><BsXLg /></button>
      {openLifeBook ? (
        <div className="open-life-book-content">
          <button onClick={() => setOpenLifeBook(false)} id="book-close-button"><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Close</span></button>
          <div className='life-book-copy-container'>
            <div className='life-book-left-side'>
              {selectedPrompt === null ? (
                <div>
                  <h3>Welcome to your Life Book</h3>
                  <p>Here is a collection of prompts to help you reflect on different stages of your life.</p>
                  <p>We have defined 5 general life-stages to the right where we have organized the prompts to help get you started.</p>
                  <p>When you are complete, you will be able to download a PDF copy of your Life Book.</p>
                </div>
              ) : (
                <div>
                  <h2>{selectedPrompt}</h2>
                  <button onClick={() => setSelectedPrompt(null)} className="back-button">Back</button>
                </div>
              )}
            </div>
            <div className='life-book-right-side'>
              {selectedPrompt === null ? (
                expandedSection ? (
                  <div>
                    <button onClick={() => toggleExpandSection(null)} className="back-button">Back to Life Stages</button>
                    <Prompt
                      section={prompts[expandedSection]}
                      isExpanded={true}
                      onSelectPrompt={handlePromptSelect}
                      toggleExpand={() => toggleExpandSection(expandedSection)}
                    />
                  </div>
                ) : (
                  <div className="life-stage-prompts">
                    {Object.keys(prompts).map((key, index) => (
                      <Prompt
                        key={index}
                        section={prompts[key]}
                        isExpanded={false}
                        onSelectPrompt={handlePromptSelect}
                        toggleExpand={() => toggleExpandSection(key)}
                      />
                    ))}
                  </div>
                )
              ) : (
                <div>
                  <button onClick={handleBackButtonClick} className="back-button">Back to Prompts</button>
                  <ReactQuill
                    value={editorContent}
                    onChange={handleEditorChange}
                    theme="snow"
                  />
                  <button onClick={handleSave} className="save-button">Save</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <button style={{ visibility: 'hidden' }} ><FaLongArrowAltLeft color={"gold"} size={100} /> <span>Close</span></button>
          {coverPhoto ? (
            <>
              <img src={coverPhoto} alt="Cover" className="cover-photo" />
              <button onClick={() => coverPhotoInputRef.current.click()} className="edit-cover-button">Edit Cover Photo</button>
            </>
          ) : (
            <button onClick={() => coverPhotoInputRef.current.click()} className="add-cover-button">Add Cover Photo</button>
          )}
          <input
            type="file"
            ref={coverPhotoInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleCoverPhotoChange}
          />
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${coverPhoto ? lifebook2 : lifebook})`
            }}
          >
          </div>
          <button onClick={() => setOpenLifeBook(true)}><FaLongArrowAltRight color={"gold"} size={100} /> <span>Open</span></button>
        </>
      )}
    </div>
  );
};

export default YourLife;
