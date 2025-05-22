//First Scene
const scenes = [
  {
    id: 0,
    background: '/walk-with-jesus/images/animations/backgrounds/starry-night.png',
    character: '/walk-with-jesus/images/animations/assets/mary-joseph.png',
    text: "In the days of Caesar Augustus, a decree went out that all the world should be registered. Joseph traveled from Nazareth to Bethlehem with Mary, who was expecting a child."
  },
  {
    id: 1,
    background: '/walk-with-jesus/images/animations/backgrounds/bethlehem-town.png',
    character: '/walk-with-jesus/images/animations/assets/innkeeper.png',
    text: "The inns were full. An innkeeper saw Mary’s pain and offered them a place among the animals, a small stable behind his home."
  },
  {
    id: 2,
    background: '/walk-with-jesus/images/animations/backgrounds/stable.png',
    character: '/walk-with-jesus/images/animations/assets/baby-jesus.png',
    text: "That night, Mary gave birth to her firstborn, a Son. She wrapped Him in cloth and laid Him in a manger because there was no room in the inn."
  },
  {
    id: 3,
    background: 'images/shepherd-field.jpg',
    character: 'images/angel-glow.gif',
    text: "Nearby, shepherds were tending their flocks when suddenly an angel appeared. 'Do not be afraid,' he said, 'for I bring you good news of great joy: today in the town of David a Savior has been born to you!'"
  },
  {
    id: 4,
    background: 'images/heavenly-host.jpg',
    character: 'images/angel-choir.gif',
    text: "A multitude of heavenly hosts appeared, praising God and saying, 'Glory to God in the highest, and on earth peace, goodwill toward men.'"
  },
  {
    id: 5,
    background: 'images/stable-night.jpg',
    character: 'images/shepherds-kneeling.gif',
    text: "The shepherds hurried to Bethlehem and found Mary, Joseph, and the baby lying in a manger. They bowed down and worshiped Him."
  },
  {
    id: 6,
    background: 'images/eastern-desert.jpg',
    character: 'images/wise-men-camels.gif',
    text: "Far in the East, wise men saw His star rise. They began their long journey, bearing gifts of gold, frankincense, and myrrh."
  },
  {
    id: 7,
    background: 'images/palace-herod.jpg',
    character: 'images/king-herod.gif',
    text: "The wise men first went to King Herod, asking, 'Where is the one who has been born king of the Jews?' Herod, disturbed, asked them to report back after they found Him."
  },
  {
    id: 8,
    background: 'images/house-bethlehem.jpg',
    character: 'images/wise-men-gifts.gif',
    text: "They found the child with Mary and offered their gifts, bowing low before Him. Warned in a dream, they returned to their country by another route."
  },
  {
    id: 9,
    background: 'images/desert-flight.jpg',
    character: 'images/joseph-leading.gif',
    text: "Joseph was warned in a dream: 'Flee to Egypt, for Herod seeks to destroy the child.' They rose that night and escaped by moonlight."
  },
  {
    id: 10,
    background: 'images/egypt.jpg',
    character: 'images/holy-family.gif',
    text: "They lived in Egypt until Herod died. Then the angel spoke again: 'Return to Israel.' And they settled in Nazareth, fulfilling the prophecy: 'He shall be called a Nazarene.'"
  },
  {
    id: 11,
    background: 'images/nazareth-home.jpg',
    character: 'images/young-jesus.gif',
    text: "Jesus grew in wisdom and stature. He was obedient to His parents, and the grace of God was upon Him."
  },
  {
    id: 12,
    background: 'images/temple-outer.jpg',
    character: 'images/pilgrims.gif',
    text: "Every year, His family went to Jerusalem for the Passover. When Jesus was twelve, they made the journey again as they always did."
  },
  {
    id: 13,
    background: 'images/temple-courtyard.jpg',
    character: 'images/young-jesus-listening.gif',
    text: "After the festival, Mary and Joseph started home. But Jesus stayed behind in the temple, sitting among the teachers, listening and asking questions."
  },
  {
    id: 14,
    background: 'images/temple-inner.jpg',
    character: 'images/elders-listening.gif',
    text: "All who heard Him were amazed at His understanding and His answers. They asked, 'Who is this child?'"
  },
  {
    id: 15,
    background: 'images/jerusalem-street.jpg',
    character: 'images/mary-joseph-worried.gif',
    text: "After a day's journey, Mary and Joseph realized Jesus was not with them. They returned to Jerusalem, searching anxiously for three days."
  },
  {
    id: 16,
    background: 'images/temple-return.jpg',
    character: 'images/young-jesus-teaching.gif',
    text: "They found Him in the temple. Mary said, 'Son, why have you treated us this way?' Jesus replied, 'Did you not know I must be in My Father’s house?'"
  },
  {
    id: 17,
    background: 'images/nazareth-home.jpg',
    character: 'images/jesus-boy.gif',
    text: "Then He went with them and was obedient. But Mary treasured all these things in her heart. Jesus increased in wisdom and favor with God and man."
  }
];

//Second Scene
scenes.push(
  {
    id: 20,
    background: 'images/jordan-river.jpg',
    character: 'images/jesus-walking.gif',
    text: "Then Jesus came from Galilee to the Jordan to be baptized by John."
  },
  {
    id: 21,
    background: 'images/jordan-river-baptism.jpg',
    character: 'images/john-and-jesus.gif',
    text: "John tried to deter Him: 'I need to be baptized by You, and do You come to me?' But Jesus replied, 'Let it be so now; it is proper to fulfill all righteousness.'"
  },
  {
    id: 22,
    background: 'images/jordan-water.jpg',
    character: 'images/baptism-scene.gif',
    text: "As soon as Jesus was baptized, He went up out of the water. At that moment, heaven was opened..."
  },
  {
    id: 23,
    background: 'images/sky-opening.jpg',
    character: 'images/holy-spirit-dove.gif',
    text: "...and the Spirit of God descended like a dove and alighted on Him."
  },
  {
    id: 24,
    background: 'images/sky-opening-light.jpg',
    character: 'images/light-rays.gif',
    text: "And a voice from heaven said, 'This is My Son, whom I love; with Him I am well pleased.'"
  },
  {
    id: 25,
    background: 'images/judean-wilderness.jpg',
    character: 'images/jesus-alone.gif',
    text: "Then Jesus was led by the Spirit into the wilderness to be tempted by the devil. He fasted forty days and forty nights."
  },
  {
    id: 26,
    background: 'images/rocks.jpg',
    character: 'images/devil-appears.gif',
    text: "The tempter came to Him and said, 'If You are the Son of God, tell these stones to become bread.'"
  },
  {
    id: 27,
    background: 'images/wilderness-desert.jpg',
    character: 'images/jesus-rebuking.gif',
    text: "Jesus answered, 'It is written: Man shall not live on bread alone, but on every word that comes from the mouth of God.'"
  },
  {
    id: 28,
    background: 'images/temple-rooftop.jpg',
    character: 'images/devil-tempting.gif',
    text: "Then the devil took Him to the holy city and had Him stand on the highest point of the temple."
  },
  {
    id: 29,
    background: 'images/temple-top.jpg',
    character: 'images/devil-pointing-down.gif',
    text: "'If You are the Son of God,' he said, 'throw Yourself down. For it is written: He will command His angels concerning You…'"
  },
  {
    id: 30,
    background: 'images/temple-top-light.jpg',
    character: 'images/jesus-standing-firm.gif',
    text: "Jesus replied, 'It is also written: Do not put the Lord your God to the test.'"
  },
  {
    id: 31,
    background: 'images/mountain-view.jpg',
    character: 'images/devil-world.gif',
    text: "Again, the devil took Him to a very high mountain and showed Him all the kingdoms of the world and their splendor."
  },
  {
    id: 32,
    background: 'images/temptation.jpg',
    character: 'images/devil-commanding.gif',
    text: "'All this I will give You,' he said, 'if You will bow down and worship me.'"
  },
  {
    id: 33,
    background: 'images/mountain-fire.jpg',
    character: 'images/jesus-rebuking.gif',
    text: "Jesus said, 'Away from Me, Satan! For it is written: Worship the Lord your God, and serve Him only.'"
  },
  {
    id: 34,
    background: 'images/satan-flees.jpg',
    character: 'images/devil-fleeing.gif',
    text: "Then the devil left Him, and angels came and attended Him."
  }
);

//Third Scene
scenes.push(
  {
    id: 35,
    background: 'images/sea-of-galilee.jpg',
    character: 'images/jesus-fishing-boat.gif',
    text: "As Jesus walked beside the Sea of Galilee, He saw Simon and his brother Andrew casting a net into the lake, for they were fishermen."
  },
  {
    id: 36,
    background: 'images/fishing-boat.jpg',
    character: 'images/simon-and-andrew.gif',
    text: "“Come, follow Me,” Jesus said, “and I will send you out to fish for people.”"
  },
  {
    id: 37,
    background: 'images/fishing-net.jpg',
    character: 'images/disciples-following.gif',
    text: "At once they left their nets and followed Him."
  },
  {
    id: 38,
    background: 'images/hillside-mount.jpg',
    character: 'images/jesus-sermon.gif',
    text: "Jesus went up on a mountainside and began to teach them, saying, 'Blessed are the poor in spirit, for theirs is the kingdom of heaven…'"
  },
  {
    id: 39,
    background: 'images/multitude-listening.jpg',
    character: 'images/disciples-listening.gif',
    text: "He taught them about humility, mercy, purity, and peacemaking. The people were amazed at His authority."
  },
  {
    id: 40,
    background: 'images/village-sick.jpg',
    character: 'images/jesus-healing.gif',
    text: "Jesus healed the sick — the blind received sight, the lame walked, and those with leprosy were cleansed."
  },
  {
    id: 41,
    background: 'images/stormy-sea.jpg',
    character: 'images/disciples-boat.gif',
    text: "One evening, as they sailed across the sea, a furious storm came up, and the waves broke over the boat."
  },
  {
    id: 42,
    background: 'images/stormy-sea.jpg',
    character: 'images/jesus-sleeping.gif',
    text: "The disciples woke Jesus: 'Lord, save us! We’re going to drown!'"
  },
  {
    id: 43,
    background: 'images/calm-sea.jpg',
    character: 'images/jesus-standing-boat.gif',
    text: "Jesus got up and rebuked the winds and the waves, and it was completely calm. They were amazed: 'Even the winds and the waves obey Him!'"
  },
  {
    id: 44,
    background: 'images/crowd-hillside.jpg',
    character: 'images/jesus-teaching-crowd.gif',
    text: "A great crowd followed Him. Jesus said to Philip, 'Where shall we buy bread for these people to eat?'"
  },
  {
    id: 45,
    background: 'images/boy-loaves.jpg',
    character: 'images/boy-basket.gif',
    text: "A boy had five small loaves and two fish. Jesus gave thanks, broke the loaves, and gave them to the crowd."
  },
  {
    id: 46,
    background: 'images/people-eating.jpg',
    character: 'images/crowd-eating.gif',
    text: "They all ate and were satisfied. The disciples picked up twelve basketfuls of leftovers!"
  },
  {
    id: 47,
    background: 'images/night-lake.jpg',
    character: 'images/jesus-walking-water.gif',
    text: "Later that night, Jesus came to the disciples, walking on the lake. They were terrified, thinking He was a ghost."
  },
  {
    id: 48,
    background: 'images/waves-light.jpg',
    character: 'images/peter-sinking.gif',
    text: "Peter stepped out of the boat but began to sink. 'Lord, save me!' he cried. Jesus caught him and said, 'You of little faith, why did you doubt?'"
  },
  {
    id: 49,
    background: 'images/boat-safety.jpg',
    character: 'images/jesus-calm.gif',
    text: "And when they climbed into the boat, the wind died down. Those in the boat worshiped Him, saying, 'Truly You are the Son of God.'"
  }
);

//Fourth Scene
scenes.push(
  {
    id: 50,
    background: 'images/fields-flowers.jpg',
    character: 'images/jesus-teaching.gif',
    text: "Jesus spoke many things in parables, saying: 'A farmer went out to sow his seed… Some fell on rocky places, some among thorns, and some on good soil.'"
  },
  {
    id: 51,
    background: 'images/wheat-field.jpg',
    character: 'images/crowd-listening.gif',
    text: "'The seed falling on good soil refers to someone who hears the word and understands it. This is the one who produces a crop.'"
  },
  {
    id: 52,
    background: 'images/city-village.jpg',
    character: 'images/jesus-teaching-crowd.gif',
    text: "Jesus continued, 'The kingdom of heaven is like a mustard seed, which a man took and planted in his field…'"
  },
  {
    id: 53,
    background: 'images/judea-path.jpg',
    character: 'images/messenger-running.gif',
    text: "One day a message came to Jesus: 'Lord, the one You love is sick.' It was Lazarus."
  },
  {
    id: 54,
    background: 'images/bethany-town.jpg',
    character: 'images/martha-crying.gif',
    text: "Jesus arrived in Bethany. Martha said, 'Lord, if You had been here, my brother would not have died.'"
  },
  {
    id: 55,
    background: 'images/grave-site.jpg',
    character: 'images/jesus-wept.gif',
    text: "Jesus was deeply moved. He wept. Then He said, 'Take away the stone.'"
  },
  {
    id: 56,
    background: 'images/open-tomb.jpg',
    character: 'images/lazarus-rising.gif',
    text: "Jesus called in a loud voice, 'Lazarus, come out!' And the dead man came out, his hands and feet wrapped in linen."
  },
  {
    id: 57,
    background: 'images/road-jerusalem.jpg',
    character: 'images/jesus-donkey.gif',
    text: "As they approached Jerusalem, Jesus rode on a young donkey, fulfilling prophecy: 'See, your King comes to you, gentle and riding on a donkey.'"
  },
  {
    id: 58,
    background: 'images/palm-crowd.jpg',
    character: 'images/crowd-waving.gif',
    text: "A large crowd spread their cloaks and palm branches on the road, shouting, 'Hosanna to the Son of David! Blessed is He who comes in the name of the Lord!'"
  },
  {
    id: 59,
    background: 'images/upper-room.jpg',
    character: 'images/jesus-last-supper.gif',
    text: "In the upper room, Jesus reclined at the table with His disciples. He said, 'I have eagerly desired to eat this Passover with you before I suffer.'"
  },
  {
    id: 60,
    background: 'images/last-supper-table.jpg',
    character: 'images/bread-wine.gif',
    text: "He took bread, gave thanks and broke it, saying, 'This is My body given for you; do this in remembrance of Me.'"
  },
  {
    id: 61,
    background: 'images/last-supper-cup.jpg',
    character: 'images/jesus-holding-cup.gif',
    text: "In the same way, after the supper He took the cup, saying, 'This cup is the new covenant in My blood, which is poured out for you.'"
  },
  {
    id: 62,
    background: 'images/disciples-listening.jpg',
    character: 'images/jesus-warning.gif',
    text: "Jesus said, 'One of you will betray Me.' The disciples were saddened and began to say, 'Surely not I, Lord?'"
  },
  {
    id: 63,
    background: 'images/judas-leaving.jpg',
    character: 'images/judas-shadow.gif',
    text: "Jesus replied, 'The one who has dipped his hand into the bowl with Me will betray Me.' Judas got up and left the room quietly into the night."
  }
);

//Fifth Scene
scenes.push(
  {
    id: 64,
    background: 'images/garden-night.jpg',
    character: 'images/jesus-praying.gif',
    text: "Jesus went to the Garden of Gethsemane with His disciples. He said, 'Sit here while I go over there and pray.'"
  },
  {
    id: 65,
    background: 'images/garden-olive-trees.jpg',
    character: 'images/jesus-anguish.gif',
    text: "He fell with His face to the ground and prayed, 'My Father, if it is possible, may this cup be taken from Me. Yet not as I will, but as You will.'"
  },
  {
    id: 66,
    background: 'images/disciples-sleeping.jpg',
    character: 'images/sleeping-disciples.gif',
    text: "He returned to His disciples and found them sleeping. 'Could you not keep watch with Me for one hour?' He asked."
  },
  {
    id: 67,
    background: 'images/garden-night.jpg',
    character: 'images/judas-guards.gif',
    text: "Suddenly, Judas arrived with a large crowd armed with swords and clubs. He greeted Jesus with a kiss. The betrayal was complete."
  },
  {
    id: 68,
    background: 'images/jesus-arrested.jpg',
    character: 'images/guards-arresting.gif',
    text: "Jesus said, 'Am I leading a rebellion that you come out with swords and clubs to capture Me? But this is your hour—when darkness reigns.'"
  },
  {
    id: 69,
    background: 'images/fire-night.jpg',
    character: 'images/peter-watching.gif',
    text: "Peter followed at a distance and sat down with the guards to see the outcome."
  },
  {
    id: 70,
    background: 'images/courtyard.jpg',
    character: 'images/servant-girl.gif',
    text: "A servant girl saw Peter and said, 'You also were with Jesus of Galilee.' But he denied it before them all."
  },
  {
    id: 71,
    background: 'images/peter-denial.jpg',
    character: 'images/peter-scared.gif',
    text: "Three times Peter denied knowing Jesus. Immediately a rooster crowed. Peter remembered the word Jesus had spoken and wept bitterly."
  },
  {
    id: 72,
    background: 'images/caiaphas-hall.jpg',
    character: 'images/jesus-bound.gif',
    text: "Jesus was brought before the high priest Caiaphas. Many false witnesses came forward, but Jesus remained silent."
  },
  {
    id: 73,
    background: 'images/sanhedrin.jpg',
    character: 'images/jesus-on-trial.gif',
    text: "The high priest said, 'Tell us if You are the Messiah, the Son of God.' Jesus replied, 'You have said so.' They tore their robes and declared Him guilty."
  },
  {
    id: 74,
    background: 'images/pilate-court.jpg',
    character: 'images/pilate-questioning.gif',
    text: "Jesus was taken to Pilate, the Roman governor. Pilate asked, 'Are You the king of the Jews?' Jesus said, 'You say so.'"
  },
  {
    id: 75,
    background: 'images/pilate-public.jpg',
    character: 'images/crowd-angry.gif',
    text: "Pilate said, 'I find no basis for a charge against Him.' But the crowd shouted, 'Crucify Him!'"
  },
  {
    id: 76,
    background: 'images/barabbas.jpg',
    character: 'images/barabbas-freed.gif',
    text: "Pilate offered to release one prisoner. The crowd chose Barabbas. Pilate washed his hands and said, 'I am innocent of this man’s blood.'"
  },
  {
    id: 77,
    background: 'images/jesus-whipped.jpg',
    character: 'images/jesus-suffering.gif',
    text: "Jesus was flogged, mocked, and dressed in a crown of thorns. They struck Him and spat on Him. He bore it all in silence."
  }
);

//Sixth Scene
scenes.push(
  {
    id: 78,
    background: 'images/cross-carrying-road.jpg',
    character: 'images/jesus-carrying-cross.gif',
    text: "Jesus, beaten and bleeding, carried His own cross to the place called Golgotha. The weight was immense, and He stumbled."
  },
  {
    id: 79,
    background: 'images/crowd-road.jpg',
    character: 'images/simon-helping.gif',
    text: "A man named Simon of Cyrene was forced by the soldiers to carry the cross behind Jesus."
  },
  {
    id: 80,
    background: 'images/women-weeping.jpg',
    character: 'images/women-crying.gif',
    text: "Women followed and mourned. Jesus said, 'Daughters of Jerusalem, do not weep for Me; weep for yourselves and your children.'"
  },
  {
    id: 81,
    background: 'images/golgotha-hill.jpg',
    character: 'images/jesus-nailed.gif',
    text: "They crucified Him. Nails pierced His hands and feet. He was lifted between two criminals. Above His head: 'Jesus of Nazareth, King of the Jews.'"
  },
  {
    id: 82,
    background: 'images/cross-view.jpg',
    character: 'images/crowd-jeering.gif',
    text: "The crowd mocked Him: 'He saved others, but He can’t save Himself!' Soldiers cast lots for His clothing at the foot of the cross."
  },
  {
    id: 83,
    background: 'images/thief-on-cross.jpg',
    character: 'images/jesus-and-thieves.gif',
    text: "One thief insulted Jesus. The other said, 'Jesus, remember me when You come into Your kingdom.' Jesus replied, 'Today you will be with Me in paradise.'"
  },
  {
    id: 84,
    background: 'images/darkness-overland.jpg',
    character: 'images/sky-darkening.gif',
    text: "At noon, darkness came over the whole land until 3 PM. Jesus cried out, 'My God, My God, why have You forsaken Me?'"
  },
  {
    id: 85,
    background: 'images/final-breath.jpg',
    character: 'images/jesus-final-moment.gif',
    text: "Then Jesus called out with a loud voice, 'Father, into Your hands I commit My spirit.' And with that, He breathed His last."
  },
  {
    id: 86,
    background: 'images/temple-curtain.jpg',
    character: 'images/earthquake.gif',
    text: "The curtain of the temple was torn in two from top to bottom. The earth shook, and rocks split."
  },
  {
    id: 87,
    background: 'images/roman-centurion.jpg',
    character: 'images/centurion-humbled.gif',
    text: "The centurion who saw what had happened praised God and said, 'Surely this was a righteous man.'"
  },
  {
    id: 88,
    background: 'images/crosses-sunset.jpg',
    character: 'images/mary-john.gif',
    text: "Mary, the mother of Jesus, and John stood near. Jesus had told him, 'Behold your mother.' John took her into his home from that time on."
  },
  {
    id: 89,
    background: 'images/tomb-stone.jpg',
    character: 'images/jesus-laid.gif',
    text: "His body was taken down and laid in a tomb cut in the rock. A large stone was rolled in front of the entrance."
  },
  {
    id: 90,
    background: 'images/reflection-sunset.jpg',
    character: 'images/cross-silhouette.gif',
    text: "This was the walk with Jesus — from birth to the cross. He gave everything so that you might live."
  },
  {
    id: 91,
    background: 'images/end-screen.jpg',
    character: 'images/light-rays.gif',
    text: "Thank you for walking with Jesus. Reflect on His love and sacrifice. The story does not end here — it continues in your heart."
  }
);

