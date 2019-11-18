<template>
  <main class='project'>
    <h2><a :href="titleLink" target="_blank">{{ title }}</a></h2>
    <h4>{{ tech }}</h4>
    <p>{{ subtitle }}</p>
    <litebox :images="this.images"
             :prefix="this.prefix"></litebox>
    <p v-for="(paragraph,index) in body" :key="`paragraph-${index}`">{{ paragraph }}</p>
    <h4><router-link class="out"
      v-bind:to="'/portfolio'">Back</router-link></h4>
  </main>
</template>

<script>
import Litebox from '../components/Litebox'

const projects = {
  1: {
    title: 'Cryptogram',
    prefix: 'cryptogram',
    titleLink: 'http://skwh.github.io/cryptogram',
    subtitle: 'I created a web-based version of the game Cryptogram, based on the Android app of the same name.',
    tech: 'Vanilla HTML, CSS, Javascript',
    body: [
      'After playing the game "Cryptogram" on the Android app store, I remembered a similar game I had played long ago and had very much enjoyed. There were a few things I didn\'t like about the Android app, so I decided to create my own version.',
      'I am particularly proud of this project because I did a good job putting things into different modules and breaking routines into smaller functions. The interface uses custom HTML elements that are entirely styled using CSS.',
      'I previously used an api in order to fetch quotes, but at some point the api went down. It was hard to find a free api alternative, so I replaced the api with a random list of quotes.',
      'If I were to do this project again, I would try and use more functional programming. I think there are still some methods that could be improved.'
    ],
    images: [
      'cryptogram.png',
      'cryptogram-partial.png',
      'cryptogram-hints.png'
    ]
  },
  2: {
    title: 'Either & Maybe in Typescript',
    prefix: 'typescript-maybe',
    titleLink: 'https://github.com/skwh/maybe',
    subtitle: 'I made a small example library in Typescript for the Either pattern and the Maybe monad, based on Haskell. I also wrote an article about it for dev.to!',
    tech: 'Typescript',
    body: [
      'After having some experience with the Either pattern in Haskell, I wondered how I could have applied it to the work I did at a summer internship with Slalom_Build. I hadn\'t seen the topic discussed much in the developer community, so I decided to write an article about it for the developer site dev.to.',
      'I started with just the either pattern, but I soon extended it to the Maybe monad as well. I would say I don\'t completely understand the use of Monads in Haskell or even in coding in general, but the Maybe monad is one of the first introduced to new Haskell developers, so I felt I could somewhat faithfully replicate it. I learned a lot about Typescript generics with this project, and I got a lot of good feedback and pointers from the other developers who commented on my article.',
      'The article is avaliable here: https://dev.to/polyov_dev/data-validation-in-typescript-using-the-either-pattern-4omk'
    ],
    images: [
      'screenshot.png'
    ]
  },
  3: {
    title: 'D&D Assistant',
    prefix: 'dnd-assistant',
    titleLink: 'https://github.com/skwh/dnd-assistant',
    subtitle: 'As a Haskell project, I made a CLI program to help when playing Dungeons and Dragons.',
    tech: 'Haskell',
    body: [
      'This project was my first "major" Haskell project, where I intended to use more intermediate aspects of Haskell, such as the IO Monad and the structure of a project with a few different modules. These topics weren\'t covered in the class where I learned Haskell, so feeling confident with these features felt like a natural next step. Initially I had a very expansive plan for the different features and arguments avaliable, but I soon realized that I had far too many features and I couldn\'t figure out where start. So I restricted myself to the first few easy features and then tried to work from there.',
      'Unfortunately I\'ve only been able to play a few sessions of D&D using it.'
    ],
    images: [
      'screenshot.png'
    ]
  },
  4: {
    title: 'gmg - GroupMe Client',
    prefix: 'groupme',
    titleLink: 'http://github.com/skwh/groupme-client',
    subtitle: 'I designed and implemented an Electron-based GroupMe client, making use of GroupMe\'s extensive public API and push messaging service.',
    tech: 'Electron, Angular 4, SCSS, Figma (mockups)',
    body: [
      'For this project, my emphasis was on creating a messaging application which was usable and acted on a user\'s expectations of how messaging applications should work, but at the same time, stood out, was easy to use, and looked good. I also wanted to tackle the issue of using the familiar design featured in GroupMe\'s mobile app and existing Web clients, while still creating my own design.',
      'In creating a unique interface, I decided to use the familiar GroupMe blue color, however using a grey as a distinguishing secondary color. I then started to build from the foundational design principles: giving lots of space to the logo in the top left, and then including familiar navigation elements below that, splitting the "Group Chats" and "Direct Chats" into two sections, in a similar manner to Slack\'s interface. I used an off-blue color to signify which group was currently selected, and then a green for a group which had a pending notification, ensuring that the notification icon would stand out.',
      'Of course, the second part of the design process wasn\'t just the colors and fonts, but also the user\'s interactive experience. I wanted a way to display which users had liked messages which corresponded more heavily towards the GroupMe app\'s style, which was to display the avatars and names of users below messages, vs the web interface\'s style, which displayed them floating above the heart icon. I decided to make messages clickable. The messages, when clicked, slid open to reveal more information about them - a timestamp and the names of the users who liked the message.',
      'A further challenge was how to enable and communicate administrative features to users. How could a user add another user to a group? How could they change the group\'s avatar? How could they set their notification settings for the group? I decided on a twofold approach: there would be a page which listed all of the user\'s groups, and provided access to a settings page from there, and a bar which displayed above the message feed for a group, which contained the group\'s name, avatar, and again, a link to the group\'s settings page. This meant that users could both see all of the groups that they were part of to manage them individually, and get more information about a group that they were currently chatting in.'
    ],
    images: [
      'registration-view.png',
      'default-view.png',
      'main-view.png',
      'likes-component.png',
      'end-of-messages-component.png',
      'new-messages-component.png',
      'attach-view.png',
      'message-with-attachments-view.png',
      'message-with-attachments-hidden-component.png',
      'groups-index-2.png',
      'group-edit-view.png',
      'create-group-view.png',
      'group-load-error-popup.png',
      'mention-component.png',
      'settings-view.png',
      'message-error-component.png',
      'colors.png',
      'font-choices.png',
      'fonts.png',
      'groups-index.png',
      'list-item-design.png'
    ]
  },
  5: {
    title: 'Hello LA! - Hack @ Brown 2016 Entry',
    prefix: 'hello-la',
    titleLink: 'https://hello-la.herokuapp.com/',
    subtitle: 'As a high school senior I attended Hack @ Brown 2016, a hackathon sponsored by Brown University.',
    tech: 'Ruby on Rails, jQuery, SCSS',
    body: [
      'For my team\'s project, I acted as a full-stack developer, and worked closely with two design students on the team to translate Adobe Illustrator mockups into working code. I also developed the back-end functionality of the website, which acted as a faux tourism website for Los Angeles. This project won the "Best UX" award, from sponsor pMD.'
    ],
    images: [
      'hello_la.png'
    ]
  }
}

export default {
  name: 'Project',
  components: { Litebox },
  data () {
    return this.getProjectForId(this.$route.params.id)
  },
  methods: {
    getProjectForId (id) {
      return projects[id]
    }
  }
}
</script>

<style scoped>

div.lightbox {
  margin: auto;
  width:75%;
}

.project>p {
  text-indent: 2em;
}

.project>h2, .project>h4 {
  margin: 0;
}

.project>h2 {
  font-size: 2em;
}

.project>h4 {
  color: rgba(200,200,200,1);
  margin-left: 1em;
  font-size: 1.25em;
}

.project>h2>a, h3>a {
  transition: color 0.3s;
}

.project>h2>a:hover {
  color: #AAA;
}

h3>a:hover {
  color: rgb(66, 134, 244);
}

.project>h2>a::after, h3>a::after {
  content: "  >>";
  font-size: 0.75em;
  transition: margin-left 0.2s;
}

.project>h2>a:hover::after {
  margin-left: 0.3em;
  color: #AAA;
}

h3>a:hover::after {
  margin-left: 0.3em;
}

.project>p {
  font-weight: 400;
  line-height: 1.75em;
  font-size: 1.15em;
}
</style>
