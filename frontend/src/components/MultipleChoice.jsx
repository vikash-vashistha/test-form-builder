import {Checkbox, Heading, Radio, RadioGroup, Stack, Text} from '@chakra-ui/react'
import React from 'react'

export const MultipleChoice = (question) => {
  return (
    <Stack>
      <Heading>MultipleChoice</Heading>
      <Stack direction="row"><Text>Ques</Text><Text>{question?.question.question}</Text></Stack>
      <Stack direction="row">
        <Text>Options</Text>
        <RadioGroup>
        {question?.question?.options?.map((choice, i) => {
          return <Radio key={i}>{choice}</Radio>
        })}
        </RadioGroup>
      </Stack>
    </Stack>
  )
}
