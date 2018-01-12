// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import code snippets
import sampleCode from './testCode'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
import styled from 'styled-components'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#171717',
    secondary: '#e27d60',
    tertiary: '#21A66D',
    quarternary: '#ffdada',
    quinary: '#c38d9e'
    // tertiary: '#90E3B0',
    // tertiary: '#64BAAD',
  },
  // {
  //   primary: 'Montserrat',
  //   secondary: 'Helvetica'
  // }
  {
    primary: 'Gill Sans',
    secondary: 'Helvetica'
  }
)

// Better Styling

const ListItemDF = styled(ListItem)`
  margin-bottom: 0.5em;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="number"
      >
        {/* TITLE */}
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Vito Carleone
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A self-parking autonomous vehicle
          </Text>
        </Slide>

        {/* PROJECT DESCRIPTION */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How to make a car self-drive
          </Heading>
          <List ordered>
            <ListItemDF>Computer Vision</ListItemDF>
            <ListItemDF>Sensor Fusion</ListItemDF>
            <ListItemDF>Localization &amp; Path Planning</ListItemDF>
            <ListItemDF>Control</ListItemDF>
          </List>
        </Slide>

        {/* CODE SAMPLE */}
        <Slide transition={['fade']} bgColor="primary">
          <CodePane source={sampleCode} textSize="0.6em" lang="javascript" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
