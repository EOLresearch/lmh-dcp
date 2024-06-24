const prompts = {
  earlyChildhood: {
    title: "Early Childhood",
    prompts: [
      { id: "earlychildhood_1", question: "Where were you born?" },
      { id: "earlychildhood_2", question: "What are some of your earliest childhood memories?" },
      { id: "earlychildhood_3", question: "Where did you grow up, go to school?" },
      { id: "earlychildhood_4", question: "Who were the most influential people from your early life?" },
      { id: "earlychildhood_5", question: "What were your favorite activities or games as a child?" },
      { id: "earlychildhood_6", question: "Were there any significant events or experiences in your early childhood that shaped who you are today?" },
      { id: "earlychildhood_7", question: "Did you have pets growing up? What were they like?" },
      { id: "earlychildhood_8", question: "What were your favorite foods or snacks as a child?" },
      { id: "earlychildhood_9", question: "Did you have favorite toys or possessions that were particularly special to you?" },
      { id: "earlychildhood_10", question: "How did you celebrate birthdays and holidays when you were a child?" },
      { id: "earlychildhood_11", question: "Can you describe your childhood home and neighborhood?" },
      { id: "earlychildhood_12", question: "Did you have any nicknames when you were a child? How did you get them?" },
      { id: "earlychildhood_13", question: "Did you have any favorite songs or music that you enjoyed listening to as a child?" },
      { id: "earlychildhood_14", question: "Were there any specific places you loved to visit or go on family outings during your early years?" }
    ]
  },
  adolescence: {
    title: "Adolescence",
    prompts: [
      { id: "adolescence_1", question: "How would you describe yourself as a teenager? What were your interests, hobbies, and passions?" },
      { id: "adolescence_2", question: "Can you share a funny story from your adolescence?" },
      { id: "adolescence_3", question: "Who were your closest friends during your teenage years? What activities did you enjoy doing together?" },
      { id: "adolescence_4", question: "What was your relationship like with your family during your adolescence?" },
      { id: "adolescence_5", question: "How did you spend your free time as a teenager? Were there any particular hangout spots or activities you enjoyed?" },
      { id: "adolescence_6", question: "Did you have any part-time jobs or responsibilities during adolescence? How did they impact your life?" },
      { id: "adolescence_7", question: "Can you recall any fashion trends or cultural phenomena that were popular during your adolescence?" },
      { id: "adolescence_8", question: "What were your dreams or aspirations for the future when you were a teenager?" },
      { id: "adolescence_9", question: "Looking back, what advice would you give your teenager self?" }
    ]
  },
  youngAdulthood: {
    title: "Young Adulthood",
    prompts: [
      { id: "youngadulthood_1", question: "What was your first job or career path as a young adult?" },
      { id: "youngadulthood_2", question: "Can you share a memorable travel experience or adventure from your young adult years?" },
      { id: "youngadulthood_3", question: "Did you face any obstacles or setbacks during your young adult years?" },
      { id: "youngadulthood_4", question: "Looking back, what lessons did you learn during your young adult years that have shaped who you are today?" },
      { id: "youngadulthood_5", question: "Were there any hobbies, interests, or passions that you pursued during this time in your life?" },
      { id: "youngadulthood_6", question: "What was your favorite thing about being a young adult?" },
      { id: "youngadulthood_7", question: "Can you describe your first apartment or living situation after leaving home?" },
      { id: "youngadulthood_8", question: "Can you share a funny or memorable story from your early twenties?" },
      { id: "youngadulthood_9", question: "What were some of the big decisions you had to make during your early adulthood?" },
      { id: "youngadulthood_10", question: "How did you stay in touch with family or friends who lived far away?" },
      { id: "youngadulthood_11", question: "Can you share a memorable friendship or relationship from your early twenties?" },
      { id: "youngadulthood_12", question: "What was your favorite way to unwind or relax after a long day?" },
      { id: "youngadulthood_13", question: "What was your go-to meal or recipe?" }
    ]
  },
  middleAdulthood: {
    title: "Middle Adulthood",
    prompts: [
      { id: "middleadulthood_1", question: "Can you share a significant career accomplishment or project you worked on during your middle adulthood?" },
      { id: "middleadulthood_2", question: "Can you describe any volunteer work or community involvement that was meaningful to you during your middle adulthood?" },
      { id: "middleadulthood_3", question: "Can you share a challenging experience you faced and how you overcame it during this stage of life?" },
      { id: "middleadulthood_4", question: "Did you encounter any unexpected passions or interests that emerged during your middle adulthood?" },
      { id: "middleadulthood_5", question: "Did you experience any major life events with your family such as weddings, births, reunions, during this time?" },
      { id: "middleadulthood_6", question: "Can you describe the importance of communication and connection within your family during your middle adulthood?" }
    ]
  },
  olderAdulthood: {
    title: "Older Adulthood",
    prompts: [
      { id: "olderadulthood_1", question: "Can you share any wisdom or life lessons you have learned over the years?" },
      { id: "olderadulthood_2", question: "What are some of your favorite memories from the last few years?" },
      { id: "olderadulthood_3", question: "What are you most proud of accomplishing in your older adulthood?" },
      { id: "olderadulthood_4", question: "What activities or hobbies do you enjoy most?" },
      { id: "olderadulthood_5", question: "How has your perspective on life changed as you have grown older?" },
      { id: "olderadulthood_6", question: "What role do your relationship with family and friends play?" },
      { id: "olderadulthood_7", question: "Can you share any traveling experiences or adventures you have had in your older adulthood?" },
      { id: "olderadulthood_8", question: "What advice would you give to younger generations?" },
      { id: "olderadulthood_9", question: "Can you describe any new hobbies or interests you’ve picked up?" },
      { id: "olderadulthood_10", question: "What are some things you appreciate more as you’ve aged?" },
      { id: "olderadulthood_11", question: "Who do you feel closest to in this stage of your life?" },
      { id: "olderadulthood_12", question: "Do you have any grandchildren? If so, what are they like?" },
      { id: "olderadulthood_13", question: "What are things you would like others to know about you?" }
    ]
  }
};

// export const getAllPrompts = () => {
//   return Object.values(prompts).reduce((all, section) => [...all, ...section.prompts], []);
// };
export const getSectionPrompts = () => {
  return Object.values(prompts).map(section => ({
    title: section.title,
    prompts: section.prompts
  }));
};
