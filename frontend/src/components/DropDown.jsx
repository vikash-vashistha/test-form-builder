import React from 'react'
import {Checkbox, Heading, Select, Stack, Text} from '@chakra-ui/react'


export const DropDown = (question) => {
  return (
     <Stack>
      <Heading>DropDown</Heading>
      <Stack direction="row"><Text>Ques</Text><Text>{question?.question.question}</Text></Stack>
      <Stack direction="row">
        <Text>Options</Text>
        <Select >
        {question?.question?.options?.map((choice, i) => {
          return <option key={i}>{choice}</option>
        })}
        </Select>
      </Stack>
    </Stack>
  )
}
