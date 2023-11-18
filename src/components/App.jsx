import '../index.css';
//import { Component } from 'react';
import { useState } from "react";

import { Section } from './Section/Section';
import { Feedback } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics'

export const App = (
  // for props
) => {

  // const [option, setOption] = useState(() => {
  
  //  });

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const option = {good, neutral, bad}

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };    

  const handleFeedback = (name) => {
    
    switch (name) {
      case "good": {
        setGood(prevState => prevState +1);
        return
      }
      case "neutral": {
        setNeutral(prevState => prevState +1);
        return
      }
      case "bad": {
        setBad(prevState => prevState +1);
        return
      }  
    }
      // this.setState((prevState) => {
      // return {
      //     [option]: prevState[option] +1,
      // }
      // })
    };

  const countTotalFeedback = () => {
      let total = (good + bad + neutral);
      return total
  }

  const countPositiveFeedbackPercentage = () => {
      let positive = good / (good + bad + neutral) * 100;
      return Math.round(positive);
  }

  const isFeedback = countTotalFeedback();
  return (
    <>
    <h1>4-th feedback HW! 👍</h1>
    <Section title="Please leave feedback"> 
      <Feedback
        option={Object.keys(option)}
        handleFeedback={handleFeedback}
      />  
      </Section>
        
      {isFeedback === 0 ? <Section
        title="There is no feedback" /> : 

      <Section title = "Statistics">  
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}

          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
        </Section>
        }
    </>
  );
};
