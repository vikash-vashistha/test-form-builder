import React from 'react'
import {Checkbox, Heading, Stack, Text} from '@chakra-ui/react'


export const CheckboxF = (question) => {
  return (
    <Stack>
      <Heading>Checkbox</Heading>
      <Stack direction="row"><Text>Ques</Text><Text>{question?.question.question}</Text></Stack>
      <Stack direction="row">
        <Text>Options</Text>
        <Stack direction="column">
        {question?.question?.options?.map((choice, i) => {
          return <Checkbox key={i}>{choice}</Checkbox>
        })}
        </Stack>
      </Stack>
    </Stack>
  )
}
