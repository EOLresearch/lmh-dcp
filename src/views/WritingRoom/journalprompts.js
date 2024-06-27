const prompts = {
  interventionGroup: {
    title: "Intervention Group",
    prompts: [
      { id: "intervention_group_1", question: "What has your journey with your dementia diagnosis been like?" },
      { id: "intervention_group_2", question: "What is your favorite memory of your mother?" },
      { id: "intervention_group_3", question: "What is your favorite memory of your father?" },
      { id: "intervention_group_4", question: "Did you have any pets growing up? Describe them." },
      { id: "intervention_group_5", question: "Is there a specific scent or aroma that you find pleasant? What memories does it evoke?" },
      { id: "intervention_group_6", question: "Describe a favorite memory from your childhood." },
      { id: "intervention_group_7", question: "What was your favorite game or activity to play with friends when you were younger?" },
      { id: "intervention_group_8", question: "Describe a memorable family vacation or trip from your youth." },
      { id: "intervention_group_9", question: "Can you recall a special tradition or celebration that your family used to observe?" },
      { id: "intervention_group_10", question: "What was your favorite subject in school, and why did you enjoy it?" },
      { id: "intervention_group_11", question: "Can you share a story about a memorable teacher or mentor who made an impact on your life?" },
      { id: "intervention_group_12", question: "Describe a significant milestone or achievement from your lifetime." },
      { id: "intervention_group_13", question: "What was your favorite childhood meal or snack? Do you have any special memories associated with it?" },
      { id: "intervention_group_14", question: "Can you share a story about an adventure or misadventure that you still remember fondly?" },
      { id: "intervention_group_15", question: "Can you share a memorable moment from your twenties that shaped who you are today?" },
      { id: "intervention_group_16", question: "Describe a significant relationship or friendship from your young adult years." },
      { id: "intervention_group_17", question: "Do you have any fond memories of your wedding day?" },
      { id: "intervention_group_18", question: "Can you recall a particularly challenging time in your life and how you overcame it?" },
      { id: "intervention_group_19", question: "What was your proudest professional or personal accomplishment? How did it make you feel?" },
      { id: "intervention_group_20", question: "Can you share a story about a favorite vacation or travel experience you had as an adult?" },
      { id: "intervention_group_21", question: "Do you have any special memories of becoming a parent or grandparent? What were those moments like for you?" },
      { id: "intervention_group_22", question: "Can you recall a meaningful friendship or connection you made later in life?" },
      { id: "intervention_group_23", question: "What advice would you give to your younger self if you could go back in time?" },
      { id: "intervention_group_24", question: "Describe a place you once visited that left a lasting impression on you. What made it memorable?" },
      { id: "intervention_group_25", question: "Can you share a lesson about love that you've learned from past relationships or experiences?" }
    ]
  },
  controlGroup: {
    title: "Control Group",
    prompts: [
      { id: "control_group_1", question: "What's on your mind today?" },
      { id: "control_group_2", question: "If you could do anything now, what would it be?" },
      { id: "control_group_3", question: "What are some things you like to do?" },
      { id: "control_group_4", question: "What are your favorite hobbies?" },
      { id: "control_group_5", question: "Who are the people closest to you? Who do you like? Who do you dislike?" },
      { id: "control_group_6", question: "What type of music do you like?" },
      { id: "control_group_7", question: "These days, who or what brings you the most joy?" },
      { id: "control_group_8", question: "What is your favorite thing to do when you wake up in the morning?" },
      { id: "control_group_9", question: "Is there a particular TV show or movie that you enjoy watching? What do you like about it?" },
      { id: "control_group_10", question: "How do you like to relax or unwind?" },
      { id: "control_group_11", question: "Do you have any pets or favorite animals? What do you like about them?" },
      { id: "control_group_12", question: "What is something you're curious about or interested in learning more about?" },
      { id: "control_group_13", question: "What are some things you're grateful for in your life right now?" },
      { id: "control_group_14", question: "Describe a recent experience that made you feel excited or happy." },
      { id: "control_group_15", question: "Describe the weather outside today. How does it make you feel?" },
      { id: "control_group_16", question: "Describe a favorite item or possession that holds special meaning to you. What makes it significant?" },
      { id: "control_group_17", question: "What makes you laugh or smile these days?" },
      { id: "control_group_18", question: "What sounds or songs bring you comfort or joy?" },
      { id: "control_group_19", question: "Is there a particular place you'd like to visit? Why does it interest you?" },
      { id: "control_group_20", question: "Do you have a favorite food? Foods that you dislike?" },
      { id: "control_group_21", question: "What do you enjoy about spending time with your family or friends?" },
      { id: "control_group_22", question: "Can you share something you're proud of?" },
      { id: "control_group_23", question: "What are you looking forward to in the coming days or weeks?" },
      { id: "control_group_24", question: "Are there any current events or news topics that interest you? What are your thoughts about them?" },
      { id: "control_group_25", question: "Can you describe your favorite spot in your home? What do you like about it?" }
    ]
  }
};

export const getPrompts = () => {
  return Object.values(prompts).map(section => ({
    title: section.title,
    prompts: section.prompts
  }));
};

export const getInterventionGroupPrompts = () => {
  return prompts.interventionGroup.prompts;
};

export const getControlGroupPrompts = () => {
  return prompts.controlGroup.prompts;
};
