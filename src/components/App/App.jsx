import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import {
  AppWrapper,
  Title,
  ContentWrapper,
  FeedbackMessage,
} from '../App/App.styles';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  const options = Object.keys(feedback);

  return (
    <AppWrapper>
      <Title>Leave Feedback</Title>
      <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
      {total > 0 ? (
        <ContentWrapper>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </ContentWrapper>
      ) : (
        <FeedbackMessage>No feedback given</FeedbackMessage>
      )}
    </AppWrapper>
  );
};

export default App;
