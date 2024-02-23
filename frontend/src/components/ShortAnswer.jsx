import React from 'react'
import {Checkbox, Heading, Input, Stack, Text} from '@chakra-ui/react'


export const ShortAnswer = (question) => {
  return (
    <Stack>
      <Heading>ShortAnswer</Heading>
      <Stack direction="row"><Text>Ques</Text><Text>{question?.question.question}</Text></Stack>
      <Stack direction="row">
        <Input placeholder='answer'></Input>
      </Stack>
    </Stack>
  )
}
