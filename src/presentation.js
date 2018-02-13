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
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
import styled from 'styled-components'

// import images
import supervised1 from './img/supervised1.png'
import sigmoid from './img/sigmoid.png'
import relu from './img/relu.jpeg'
import xkcd from './img/xkcd.png'
import mandelbrot from './img/mandelbrot.gif'
import neural_net from './img/neural_net.png'
import googlenet from './img/googlenet.png'
import vito from './img/vito.png'

// Require CSS
require('normalize.css')
const colors = {
  primary: '#171717',
  secondary: '#e27d60',
  tertiary: '#21A66D',
  quarternary: '#ffdada',
  quinary: '#c38d9e'
}

const fonts = {
  primary: 'Gill Sans',
  secondary: 'Helvetica'
}

const theme = createTheme(colors, fonts)

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
                ...you'd have witnessed safe, proficient driving.
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary">
                I want to live in a world where every vehicle is driven as
                responsibly as she drives.
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" textSize={'0.8em'} padding={'2em'}>
                (sources: USDOT, NHTSA)
              </Text>
            </Appear>
          </List>
        </Slide>

        {/* HOW AVs */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How?
          </Heading>
          <List ordered>
            <ListItemDF>Computer Vision</ListItemDF>
            <ListItemDF>Sensor Fusion</ListItemDF>
            <ListItemDF>Localization &amp; Path Planning</ListItemDF>
            <ListItemDF>Control</ListItemDF>
          </List>
        </Slide>

        {/* HOW MUCH */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How Much?
          </Heading>
          <Appear>
            <Text textColor="tertiary" textAlign="left">
              Level 0 - no autonomy
            </Text>
          </Appear>

          <Appear>
            <Text textColor="tertiary" textAlign="left">
              Level 1 - assistive tech, e.g. braking, cruise control
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left">
              Level 2 - multiple level 1 techs in tandem
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left">
              Level 3 - complete autonomy in some circumstances (e.g. freeway,
              parking)
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left">
              Level 4 - complete autonomy with human overrides
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textAlign="left">
              Level 5 - complete autonomy; no human overrides
            </Text>
          </Appear>
        </Slide>

        {/* TWO APPROACHES */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Two approaches
          </Heading>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Traditional Robotics Approach
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Plot a pipeline of human-designed steps, e.g. detect lanes on road,
            detect other vehicles, detect and interpret traffic signs, etc.
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />End-To-End Deep Learning Approach
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Give the machine the inputs (e.g. camera, sensor data collected when
            a human is driving), a model architecture (e.g. deep CNN), and the
            desired outputs (e.g. the steering, acceleration, braking data
            generated by the human driver ), and let the machine learn its own
            internal representations.
          </Text>
        </Slide>

        {/* ML Glossary*/}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Some definitions
          </Heading>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Machine Learning
          </Heading>
          <Text textSize="0.8em" textAlign="left" textColor="tertiary">
            Fast processors, cheap storage, and big data mean we can now use old
            techniques in new ways. Machine Learning is basically a
            cool-sounding term for applying statistical computing techniques to
            large datasets.
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Neural Network
          </Heading>
          <Text textSize="0.8em" textAlign="left" textColor="tertiary">
            One of many different types of machine learning algorithm. Based on
            a metaphor/model of how the brain works: groups of neurons in the
            brain take in information and are either 'activated' or not
            depending on the strength of the input signal.
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Layer
          </Heading>
          <Text textSize="0.8em" textAlign="left" textColor="tertiary">
            A set of neurons in a neural network that all receive the same
            inputs &amp; have their outputs aggregated. Typically each neuron
            performs a linear function on the input data then a non-linear
            activation function.
          </Text>
        </Slide>

        {/* CONV NET DEFINITION */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" textAlign="left">
            Deep Neural Network / Deep Learning
          </Heading>
          <Text textSize="0.8em" textAlign="left" textColor="tertiary">
            A neural network with several layers of neurons is called "deep"
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Convolutional Neural Network
          </Heading>
          <Text textSize="0.8em" textAlign="left" textColor="tertiary">
            In a ConvNet, some layers have a different struture from the
            traditional "fully connected" neural network. Instead of each neuron
            performing a linear function on the data, a convolutional layer
            applies a number of filters and then combines the outputs of those
            filters to create the output (which may have a completely different
            shape from the input).
          </Text>
          <Text textSize="0.8em" textAlign="left" textColor="tertiary">
            <br />
            This makes it possible to build rich representations of complex data
            like images without having to learn a vast number of parameters.
          </Text>
        </Slide>

        {/* NEURAL NET VISUALIZATION */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Simple Neural Network
          </Heading>
          <Image src={neural_net} height={500} alt="neural network" />
          <Text textSize="0.8em" textColor="tertiary">
            Source: Wikipedia
          </Text>
        </Slide>

        {/* ACTIVATION FUNCTION */}
        <Slide transition={['fade']} bgColor="#fff" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Activation Functions
          </Heading>
          <Image src={sigmoid} height={250} alt="sigmoid activation" />
          <Text textSize="0.8em" textColor="tertiary" />
          <Image src={relu} height={250} alt="relu activation" />
          <Text textSize="0.8em" textColor="tertiary">
            Source:
            https://medium.com/the-theory-of-everything/understanding-activation-functions-in-neural-networks-9491262884e0
          </Text>
        </Slide>

        {/* DEEP NET VISUALIZATION */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Deep Neural Network
          </Heading>
          <Image src={googlenet} height={500} alt="googlenet" />
          <Text textSize="0.8em" textColor="tertiary">
            Source: Google Research
          </Text>
        </Slide>

        {/* MACHINE LEARNING IN GENERAL*/}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Categories of Machine Learning
          </Heading>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Supervised Learning
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Gather labeled data and use statistical techniques to form a
            predictive model for new data
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Unsupervised Learning
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Gather unlabeled data and use statistical techniques to detect
            structure
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Reinforcement Learning
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Set up some task, a set of "moves", and a reward system then have a
            computer repeat task until it develops an strategy with acceptable
            performance
          </Text>
        </Slide>

        {/* SUPERVISED LEARNING EXAMPLE*/}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Supervised Learning Example
          </Heading>
          <Image src={supervised1} alt="Annotated vehicles image" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Supervised Learning Example
          </Heading>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.75em'}
            padding={'0.5em 0'}
          >
            1. Gather 10,000 images from dashcam, and manually add bounding
            boxes around vehicles
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.75em'}
            padding={'0.5em 0'}
          >
            2. For each image, save the image as a pixel array. Also save the
            detected objects as an array of bounding boxes with numerical labels
            (e.g. car=1, truck=2)
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.75em'}
            padding={'0.5em 0'}
          >
            3. Feed some portion of the images (training set) through an
            algorithm and have it make random guesses as to bounding boxes and
            labels. Measure its performance against the true labels. Use
            calculus and the chain rule to figure out how much each parameter of
            your model contributed to the error, then adjust the guilty parties
            by some small amount (the "learning rate")
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.75em'}
            padding={'0.5em 0'}
          >
            4. Keep running the images forward and backward through the
            algorithm until the model performs well. Test it on another portion
            of your images (validation set). It if performs poorly, you have
            overfit to the training set, so apply regularization techniques.
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.75em'}
            padding={'0.5em 0'}
          >
            5. When the validation set performance is sufficient, test on a
            final chunk of your data (test set). If the model performs well, you
            are good to go; if not, you need to shuffle your data and start
            over.
          </Text>
        </Slide>
        {/* RISKS OF ML */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            When machines learn, who teaches them?
          </Heading>
          <Text textColor="tertiary" textSize="0.9em">
            When I mentioned my wife earlier, you probably thought I was going
            to make a bad joke based on the false trope that women are worse
            drivers than men. Consider that machine learning can actually encode
            and even amplify our prejudices.
          </Text>
          <Appear>
            <Text textColor="tertiary" textSize="0.9em" padding={'0.5em 0'}>
              e.g. a carelessly designed hiring algorithm that includes
              demographic information might conclude that women are less well
              suited to STEM jobs because they are underrepresented in the
              field.
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary" textSize="0.9em">
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
          But pitfalls aside, AI is amazing. Here are just a few of the many
          amazing applications where it's already having a major impact:
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Healthcare
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            NCI and NVIDIA initiative for cancer detection using deep learning
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            Ecology
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Oak Ridge National Laboratory monitoring wildlife populations using
            image classification / object detection; also NASA doing something
            similar with satellite images
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            Security
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Accenture Labs using ML to detect security threats through graph
            analysis
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            Retail
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Using recommender systems to market only relevant products to
            consumers
          </Text>
        </Slide>

        {/* EARLY CARS */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            The State of the Art in 2005
          </Heading>
          <iframe
            title="early cars"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0Imsj9u0CcA?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen={'allowfullscreen'}
          />
        </Slide>

        {/* VITO */}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Vito Carleone
          </Heading>
          <Image src={vito} width={560} height={315} alt="Vito Carleone" />
        </Slide>

        {/* ABOUT VITO */}

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            About Vito
          </Heading>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Robot
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Elegoo Car Kit (Arduino Uno) with a couple of sensor upgrades ($100)
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Camera
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Kodak PIXPRO 3D VR Camera ($400)
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Algorithm
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            NVIDIA end-to-end CNN trained on AWS g2 instance ($100)
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Controller
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            NVIDIA Jetson TX2 ($600)
          </Text>
        </Slide>

        {/* TRAINING VITO*/}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Training Vito to park
          </Heading>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            1. Broadcast video over wifi and steering controls over bluetooth
            (serial port)
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            2. Use IR sensors to follow a line
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            3. Set up parking trajectories by placing obstacles and taping a
            line along the optimal path; as Vito follows the path, he records
            camera and steering info but not IR data.
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            4. Get high school robotics students to collect 1,000 test runs
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            5. Use data augmentation techniques to multiply training data
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            6. Train CNN to "predict" steering given a visual input
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            6. Once performance on validation/test set is adequate, save weights
          </Text>
          <Text
            textAlign="left"
            textColor="tertiary"
            textSize={'0.8em'}
            padding={'0.5em 0'}
          >
            7. Use saved weights to run incoming camera data through CNN in
            real-time, sending "predicted" steering angle to controller
          </Text>
        </Slide>

        {/* DEMOS*/}
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Demos
          </Heading>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Object Detection
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Video the audience and run through YOLO detector
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />End-To-End Learning
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Demonstrate using NVIDIA algorithm to drive car in simulator
          </Text>
          <Heading size={6} textColor="secondary" textAlign="left">
            <br />Visualizing CNNs
          </Heading>
          <Text textSize="0.9em" textAlign="left" textColor="tertiary">
            Take a photo with someone and visualize the 16 layers of vgg-16
          </Text>
        </Slide>

        {/* CODE SAMPLE */}
        {/* <Slide transition={['fade']} bgColor="primary">
          <CodePane source={sampleCode} textSize="0.6em" lang="javascript" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide> */}
      </Deck>
    )
  }
}
