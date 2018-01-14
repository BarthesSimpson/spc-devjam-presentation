// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
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
        {/* WHY AVs? */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why make vehicles autonomous?
          </Heading>
          <List>
            <Appear>
              <ListItemDF>
                11 million car accidents per year in the US alone
              </ListItemDF>
            </Appear>
            <Appear>
              <ListItemDF textSize={'1.2em'}>
                Average US commuter spends 42 hrs per year in traffic
              </ListItemDF>
            </Appear>
            <Appear>
              <ListItemDF>If you've ever seen my wife drive...</ListItemDF>
            </Appear>
            <Appear>
              <Text textColor="tertiary">
                ...you'd have witnessed safe, proficient driving
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textSize={'0.8em'} padding={'2em'}>
                (sources: USDOT, NHTSA)
              </Text>
            </Appear>
          </List>
        </Slide>

        {/* RISKS OF ML */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            When machines learn, who teaches them?
          </Heading>
          <Text textColor="tertiary" textSize={'0.9em'}>
            If you thought I was going to make a bad joke based on the false
            trope that women are worse drivers than men, consider that machine
            learning can actually encode and even amplify our prejudices.
          </Text>
          <Appear>
            <Text textColor="tertiary" textSize={'0.9em'} padding={'0.5em 0'}>
              e.g. a carelessly designed hiring algorithm that includes
              demographic information might conclude that women are less well
              suited to STEM jobs because they are underrepresented in the
              field.
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textSize={'0.9em'}>
              If the model is used as a basis for making job offers, it then
              leads to fewer women being hired in STEM, which further skews the
              proportions. This sort of negative feedback loop is one of the
              major risks of machine learning in general.
            </Text>
          </Appear>
        </Slide>
        {/* Men are more likely than women to get cited for reckless driving (3.41
        to 1 ratio), driving under the influence (3.09 to 1 ratio), seat belt
        violations (3.08 to 1 ratio), speeding (1.75 to 1 ratio), failure to
        yield (1.54 to 1 ratio), and stop signal violations (1.53 to 1 ratio). */}

        {/* SUCCESSES OF ML */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            AI Successes and Opportunities
          </Heading>
          {/* INSERT LIST OF TRIUMPHS, e.g. better at object detection than humans */}
          />
        </Slide>

        {/* EARLY CARS */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            The State of the Art in 2005
          </Heading>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0Imsj9u0CcA?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen={'allowfullscreen'}
          />
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
