const prompts = {
  earlyChildhood: {
    title: "Early Childhood",
    prompts: [
      { promptId: "earlyChildhood_1", text: "Where were you born?" },
      { promptId: "earlyChildhood_2", text: "What are some of your earliest childhood memories?" },
      { promptId: "earlyChildhood_3", text: "Where did you grow up, go to school?" },
      { promptId: "earlyChildhood_4", text: "Who were the most influential people from your early life?" },
      { promptId: "earlyChildhood_5", text: "What were your favorite activities or games as a child?" },
      { promptId: "earlyChildhood_6", text: "Were there any significant events or experiences in your early childhood that shaped who you are today?" },
      { promptId: "earlyChildhood_7", text: "Did you have pets growing up? What were they like?" },
      { promptId: "earlyChildhood_8", text: "What were your favorite foods or snacks as a child?" },
      { promptId: "earlyChildhood_9", text: "Did you have favorite toys or possessions that were particularly special to you?" },
      { promptId: "earlyChildhood_10", text: "How did you celebrate birthdays and holidays when you were a child?" },
      { promptId: "earlyChildhood_11", text: "Can you describe your childhood home and neighborhood?" },
      { promptId: "earlyChildhood_12", text: "Did you have any nicknames when you were a child? How did you get them?" },
      { promptId: "earlyChildhood_13", text: "Did you have any favorite songs or music that you enjoyed listening to as a child?" },
      { promptId: "earlyChildhood_14", text: "Were there any specific places you loved to visit or go on family outings during your early years?" },
    ]
  },
  adolescence: {
    title: "Adolescence",
    prompts: [
      { promptId: "adolescence_1", text: "How would you describe yourself as a teenager? What were your interests, hobbies, and passions?" },
      { promptId: "adolescence_2", text: "Can you share a funny story from your adolescence?" },
      { promptId: "adolescence_3", text: "Who were your closest friends during your teenage years? What activities did you enjoy doing together?" },
      { promptId: "adolescence_4", text: "What was your relationship like with your family during your adolescence?" },
      { promptId: "adolescence_5", text: "How did you spend your free time as a teenager? Were there any particular hangout spots or activities you enjoyed?" },
      { promptId: "adolescence_6", text: "Did you have any part-time jobs or responsibilities during adolescence? How did they impact your life?" },
      { promptId: "adolescence_7", text: "Can you recall any fashion trends or cultural phenomena that were popular during your adolescence?" },
      { promptId: "adolescence_8", text: "What were your dreams or aspirations for the future when you were a teenager?" },
      { promptId: "adolescence_9", text: "Looking back, what advice would you give your teenager self?" }
    ]
  },
  youngAdulthood: {
    title: "Young Adulthood",
    prompts: [
      { promptId: "youngAdulthood_1", text: "What was your first job or career path as a young adult?" },
      { promptId: "youngAdulthood_2", text: "Can you share a memorable travel experience or adventure from your young adult years?" },
      { promptId: "youngAdulthood_3", text: "Did you face any obstacles or setbacks during your young adult years?" },
      { promptId: "youngAdulthood_4", text: "Looking back, what lessons did you learn during your young adult years that have shaped who you are today?" },
      { promptId: "youngAdulthood_5", text: "Were there any hobbies, interests, or passions that you pursued during this time in your life?" },
      { promptId: "youngAdulthood_6", text: "What was your favorite thing about being a young adult?" },
      { promptId: "youngAdulthood_7", text: "Can you describe your first apartment or living situation after leaving home?" },
      { promptId: "youngAdulthood_8", text: "Can you share a funny or memorable story from your early twenties?" },
      { promptId: "youngAdulthood_9", text: "What were some of the big decisions you had to make during your early adulthood?" },
      { promptId: "youngAdulthood_10", text: "How did you stay in touch with family or friends who lived far away?" },
      { promptId: "youngAdulthood_11", text: "Can you share a memorable friendship or relationship from your early twenties?" },
      { promptId: "youngAdulthood_12", text: "What was your favorite way to unwind or relax after a long day?" },
      { promptId: "youngAdulthood_13", text: "What was your go-to meal or recipe?" }
    ]
  },
  middleAdulthood: {
    title: "Middle Adulthood",
    prompts: [
      { promptId: "middleAdulthood_1", text: "Can you share a significant career accomplishment or project you worked on during your middle adulthood?" },
      { promptId: "middleAdulthood_2", text: "Can you describe any volunteer work or community involvement that was meaningful to you during your middle adulthood?" },
      { promptId: "middleAdulthood_3", text: "Can you share a challenging experience you faced and how you overcame it during this stage of life?" },
      { promptId: "middleAdulthood_4", text: "Did you encounter any unexpected passions or interests that emerged during your middle adulthood?" },
      { promptId: "middleAdulthood_5", text: "Did you experience any major life events with your family such as weddings, births, reunions, during this time?" },
      { promptId: "middleAdulthood_6", text: "Can you describe the importance of communication and connection within your family during your middle adulthood?" }
    ]
  },
  olderAdulthood: {
    title: "Older Adulthood",
    prompts: [
      { promptId: "olderAdulthood_1", text: "Can you share any wisdom or life lessons you have learned over the years?" },
      { promptId: "olderAdulthood_2", text: "What are some of your favorite memories from the last few years?" },
      { promptId: "olderAdulthood_3", text: "What are you most proud of accomplishing in your older adulthood?" },
      { promptId: "olderAdulthood_4", text: "What activities or hobbies do you enjoy most?" },
      { promptId: "olderAdulthood_5", text: "How has your perspective on life changed as you have grown older?" },
      { promptId: "olderAdulthood_6", text: "What role do your relationship with family and friends play?" },
      { promptId: "olderAdulthood_7", text: "Can you share any traveling experiences or adventures you have had in your older adulthood?" },
      { promptId: "olderAdulthood_8", text: "What advice would you give to younger generations?" },
      { promptId: "olderAdulthood_9", text: "Can you describe any new hobbies or interests you’ve picked up?" },
      { promptId: "olderAdulthood_10", text: "What are some things you appreciate more as you’ve aged?" },
      { promptId: "olderAdulthood_11", text: "Who do you feel closest to in this stage of your life?" },
      { promptId: "olderAdulthood_12", text: "Do you have any grandchildren? If so, what are they like?" },
      { promptId: "olderAdulthood_13", text: "What are things you would like others to know about you?" }
    ]
  }
};

export const getAllPrompts = () => {
  return Object.values(prompts).reduce((all, section) => [...all, ...section.prompts], []);
};
