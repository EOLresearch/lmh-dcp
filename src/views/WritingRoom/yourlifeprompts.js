const prompts = {
  earlyChildhood: {
    title: "Early Childhood",
    prompts: [
      "1. Where were you born?",
      "2. What are some of your earliest childhood memories?",
      "3. Where did you grow up, go to school?",
      "4. Who were the most influential people from your early life?",
      "5. What were your favorite activities or games as a child?",
      "6. Were there any significant events or experiences in your early childhood that shaped who you are today?",
      "7. Did you have pets growing up? What were they like?",
      "8. What were your favorite foods or snacks as a child?",
      "9. Did you have favorite toys or possessions that were particularly special to you?",
      "10. How did you celebrate birthdays and holidays when you were a child?",
      "11. Can you describe your childhood home and neighborhood?",
      "12. Did you have any nicknames when you were a child? How did you get them?",
      "13. Did you have any favorite songs or music that you enjoyed listening to as a child?",
      "14. Were there any specific places you loved to visit or go on family outings during your early years?"
    ]
  },
  adolescence: {
    title: "Adolescence",
    prompts: [
      "1. How would you describe yourself as a teenager? What were your interests, hobbies, and passions?",
      "2. Can you share a funny story from your adolescence?",
      "3. Who were your closest friends during your teenage years? What activities did you enjoy doing together?",
      "4. What was your relationship like with your family during your adolescence?",
      "5. How did you spend your free time as a teenager? Were there any particular hangout spots or activities you enjoyed?",
      "6. Did you have any part-time jobs or responsibilities during adolescence? How did they impact your life?",
      "7. Can you recall any fashion trends or cultural phenomena that were popular during your adolescence?",
      "8. What were your dreams or aspirations for the future when you were a teenager?",
      "9. Looking back, what advice would you give your teenager self?"
    ]
  },
  youngAdulthood: {
    title: "Young Adulthood",
    prompts: [
      "1. What was your first job or career path as a young adult?",
      "2. Can you share a memorable travel experience or adventure from your young adult years?",
      "3. Did you face any obstacles or setbacks during your young adult years?",
      "4. Looking back, what lessons did you learn during your young adult years that have shaped who you are today?",
      "5. Were there any hobbies, interests, or passions that you pursued during this time in your life?",
      "6. What was your favorite thing about being a young adult?",
      "7. Can you describe your first apartment or living situation after leaving home?",
      "8. Can you share a funny or memorable story from your early twenties?",
      "9. What were some of the big decisions you had to make during your early adulthood?",
      "10. How did you stay in touch with family or friends who lived far away?",
      "11. Can you share a memorable friendship or relationship from your early twenties?",
      "12. What was your favorite way to unwind or relax after a long day?",
      "13. What was your go-to meal or recipe?"
    ]
  },
  middleAdulthood: {
    title: "Middle Adulthood",
    prompts: [
      "1. Can you share a significant career accomplishment or project you worked on during your middle adulthood?",
      "2. Can you describe any volunteer work or community involvement that was meaningful to you during your middle adulthood?",
      "3. Can you share a challenging experience you faced and how you overcame it during this stage of life?",
      "4. Did you encounter any unexpected passions or interests that emerged during your middle adulthood?",
      "5. Did you experience any major life events with your family such as weddings, births, reunions, during this time?",
      "6. Can you describe the importance of communication and connection within your family during your middle adulthood?"
    ]
  },
  olderAdulthood: {
    title: "Older Adulthood",
    prompts: [
      "1. Can you share any wisdom or life lessons you have learned over the years?",
      "2. What are some of your favorite memories from the last few years?",
      "3. What are you most proud of accomplishing in your older adulthood?",
      "4. What activities or hobbies do you enjoy most?",
      "5. How has your perspective on life changed as you have grown older?",
      "6. What role do your relationship with family and friends play?",
      "7. Can you share any traveling experiences or adventures you have had in your older adulthood?",
      "8. What advice would you give to younger generations?",
      "9. Can you describe any new hobbies or interests you’ve picked up?",
      "10. What are some things you appreciate more as you’ve aged?",
      "11. Who do you feel closest to in this stage of your life?",
      "12. Do you have any grandchildren? If so, what are they like?",
      "13. What are things you would like others to know about you?"
    ]
  }
};

export const getAllPrompts = () => {
  return Object.values(prompts).reduce((all, section) => [...all, ...section.prompts], []);
};