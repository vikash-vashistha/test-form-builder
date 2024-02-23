import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Stack} from '@chakra-ui/react';
import {MultipleChoice} from '../components/MultipleChoice';
import {ShortAnswer} from '../components/ShortAnswer';
import {CheckboxF} from '../components/Checkbox';
import {DropDown} from '../components/DropDown';

export const QuestionList = () => {
   const [questions, setQuestions] = useState([]);

    const fetchQuestions = () => {
    axios.get(`http://localhost:2345/api/v1/questions/`).then((res) => {
      setQuestions(res.data.questions);
    });
  };

  useEffect(() => fetchQuestions(), [])

  return (
    <Stack>
      <div>QuestionList</div>
      <ul>
        {questions?.map((question, i) => {
          if(question.type === "multipleChoice") {
            return <MultipleChoice key={i} question={question} />
          }

          if(question.type === "shortAnswer") {
            return <ShortAnswer key={i} question={question} />
          }

          if(question.type === "checkbox") {
            return <CheckboxF key={i} question={question} />
          }

          if(question.type === "dropdown") {
            return <DropDown key={i} question={question} />
          }

        })}
      </ul>
    </Stack>
  )
}
