const Discord = module.require("discord.js");

module.exports = {
    name: "kill",
    description: "Kills a user",
    run: async (client, message, args) => {
        let target = message.mentions.members.first();
        let author = message.member;
        let isBotOwner = "661501985517862972";
    if (args.length == 0) {
    return message.channel.send("Damn, You are trying to kill the air..??").then(msg => msg.delete(2300))
    }
    if (target.id == isBotOwner) {
    return message.channel.send("-_-   I am not going to kill my master, you idiot !")
    }
    var kills = [
        ` after a long day, plops down on the couch with ${target} and turns on The Big Bang Theory. After a Sheldon Cooper joke, ${target} laughs uncontrollably as they die.`,
    `${author} Alt+F4'd ${target}.exe!`,
    `${author} attempted to play a flute, exploding the head of ${target}.`,
    `${author} blew his ear drums out listening to music too hard.`,
    `${author} challenges ${target} to a fist fight to the death. ${target} wins.`,
    `${author} cleaves the head of ${target} with a keyboard.`,
    `${author} crushes ${target} with a fridge.`,
    `${author} decapitates ${target} with a sword.`,
    `${author} drags ${target}s ears too hard and rips them off.`,
    `${author} drowns ${target} in a beer barrel.`,
    `${author} drowns ${target} in a tub of hot chocolate. *How was your last drink?*`,
    `${author} eviscerates ${target} with a rusty butter knife. Ouch!`,
    `${author} feeds toothpaste-filled oreos to ${target}, who were apparently allergic to fluorine. GGWP.`,
    `${author} fell in love with ${target} then broke his heart literally.`,
    `${author} fires a supersonic frozen turkey at ${target}, killing them instantly.`,
    `${author} forgot to leave the car door window open and ${target} dies from overheating`,
    `${author} forgot to zombie-proof ${target} lawn... Looks like zombies had a feast last night.`,
    `${author} gets ${target} to watch anime with them. ${target} couldn't handle it.`,
    `${author} grabs ${target} and shoves them into an auto-freeze machine with some juice and sets the temperature to 100 Kelvin, creating human ice pops.`,
    `${author} hired me to kill you, but I don't want to! ${target}`,
    `${author} hugs ${target} too hard..`,
    `${author} hulk smashes ${target} into a pulp.`,
    `${author} killed ${target} by ripping the skin off of their face and making a mask out of it.`,
    `${author} kills ${target} after hours of torture.`,
    `${author} kills ${target} with a candlestick in the study`,
    `${author} kills ${target} with kindness`,
    `${author} kills ${target} with their own foot.`,
    `${author} murders ${target} with an axe.`,
    `${author} pressed delete. It deleted ${target}`,
    `${author} pushes ${target} into the cold vacuum of space.`,
    `${author} runs ${target} over with a PT Cruiser.`,
    `${author} shoots ${target} in the head.`,
    `${author} shoots in ${target} mouth with rainbow laser, causing ${target} head to explode with rainbows and ${target} is reborn as unicorn. :unicorn:`,
    `${author} shot ${target} using the Starkiller Base!`,
    `${author} slips bleach into ${target}'s lemonade.`,
    `${author} strangles ${target}.`,
    `${author} straps ${target} to an ICBM and sends them to North Korea along with it.`,
    `${author} strikes ${target} with the killing curse... *Avada Kedavra!*`,
    `${author} tears off ${target}s lips after a kiss.`,
    `${author} thicc and collapses ${target}'s rib cage`,
    `${author} tries to shoot the broad side of a barn, misses and hits ${target} instead.`,
    `${author} turns on Goosebumps(2015 film) on the TV. ${target} being a scaredy-cat, dies of an heart attack.`,
    `${author} was so swag that ${target} died due to it. #Swag`,
    `${author}, are you sure you want to kill ${target}? They seem nice to me.`,
    `${target} accidentally clicked on a popup ad that reads \`Doctors hate us, see the one best trick for dying today!\``,
    `${target} accidentally tripped and died while getting up to write their suicide note.`,
    `${target} ate a piece of exotic butter. It was so amazing that it killed them.`,
    `${target} ate an apple and turned out it was made out of wax. Someone died from wax poisoning later that day.`,
    `${target} ate too many laxatives and drowned in their own shit. Ew.`,
    `${target} bleeds out after trying to get on \`Dumbest hillbilly moments\`.`,
    `${target} bought a fidget spinner and drowned in pussy.`,
    `${target} can't be killed, as they are a ghost.`,
    `${target} chokes in a trash can.`,
    `${target} chokes on a chicken bone.`,
    `${target} chokes on cheerios and dies. What an idiot...`,
    `${target} cranks up the music system only to realize the volume was at max and the song playing was Baby by Justin Beiber...`,
    `${target} cums in eye, goes blind, runs for help but ran straight onto train tracks and gets plowed by a train.`,
    `${target} decided it was a good idea to fight a tiger while smelling like meat. It did not end well.`,
    `${target} did not make a meme dank enough and was stoned.`,
    `${target} died after fapping 50 times in a row with no break.`,
    `${target} died after gaming for 90 hours straight without moving or eating.`,
    `${target} died after playing with an edgy razor blade fidget spinner.`,
    `${target} died after realizing how shitty their grammar was`,
    `${target} died after trying to out-meme Dank Memer.`,
    `${target} died an honorable death. Death by snoo snoo.`,
    `${target} died because RemindMeBot forgot to remind them to breathe`,
    `${target} died because they started playing with a fidget spinner but they realise its 2016 so you start fapping to the old witch in snow white and obama starts mowing their lawn and they jump out of the window and get ripped to pieces by Obama's lawn mower`,
    `${target} died due to ${author} being so stupid`,
    `${target} died due to eating WAY too many hotdogs in preparation for their date Friday night.`,
    `${target} died eating expired and infected raw fish with the filthiest rice in the world as sushi while being constantly stabbed in the scrotum with a 9inch nail sharp enough to stab through kevlar. The soy sauce was cat piss.`,
    `${target} died from a high salt intake`,
    `${target} died from a swift kick to the brain.`,
    `${target} died from a tragic amount of bad succ`,
    `${target} died from doing the ice bucket challenge.`,
    `${target} died from drinking too much water Huh, I guess it IS possible!.`,
    `${target} died from eating cactus needles.`,
    `${target} died from eating too much ass.`,
    `${target} died from eating too much bread :/`,
    `${target} died from ebola.`,
    `${target} died from meme underdose :/`,
    `${target} died from not eating enough ass.`,
    `${target} died from not whacking it enough. (There's a healthy balance, boys)`,
    `${target} died from reposting in the wrong neighborhood`,
    `${target} died from shitting for 36 hours straight.`,
    `${target} died from swallowing rocks too fast`,
    `${target} died from too many sunburns.`,
    `${target} died from whacking it too much. (There's a healthy balance, boys)`,
    `${target} died of oversucc`,
    `${target} died when testing a hydrogen bomb. There is nothing left to bury.`,
    `${target} died while listening to 'It's every day bro'`,
    `${target} died while playing hopscotch on *seemingly* deactivated land mines.`,
    `${target} died while trying to find the city of England`,
    `${target} died. OOF`,
    `${target} dies after swallowing a toothpick.`,
    `${target} dies at the hands of ${author}.`,
    `${target} dies because they used a bobby pin to lift their eyelashes`,
    `${target} dies because they were just too angry.`,
    `${target} dies by swearing on a Christian Minecraft server`,
    `${target} dies due to lack of friends.`,
    `${target} dies from bad succ.`,
    `${target} dies from dabbing too hard.`,
    `${target} dies from dabbing too hard`,
    `${target} dies from disrespecting wahmen.`,
    `${target} dies from just being a bad, un-likeable dude.`,
    `${target} dies from posting normie memes.`,
    `${target} dies from severe dislike of sand. It's coarse and rough and irritating it gets everywhere`,
    `${target} dies from watching the emoji movie and enjoying it.`,
    `${target} dies in a horrible accident, and it was engineered by ${author}.`,
    `${target} dies north of the wall and transforms into a white walker`,
    `${target} dies of AIDS.`,
    `${target} dies of dysentery.`,
    `${target} dies of natural causes.`,
    `${target} dies of starvation.`,
    `${target} dies on death row via lethal injection after murdering ${author} and their family.`,
    `${target} dies, but don't let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer’s table`,
    `${target} dies.`,
    `After a struggle, ${target} kills ${author}`,
    `${target} disappeared from the universe.`,
    `${target} drank some toxic soda before it was recalled.`,
    `${target} dropped a Nokia phone on their face and split their skull.`,
    `${target} drowned in their own tears.`,
    `${target} eats too much copypasta and explodes`,
    `${target} fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. :iphone:`,
    `${target} fell into a pit of angry feminists.`,
    `${target} gets hit by a car.`,
    `${target} gets stabbed by ${author}`,
    `${target} gets struck by lightning.`,
    `${target} goes genocide and Sans totally dunks ${target}!`,
    `${target} got into a knife fight with the pope. One of them is in hell now.`,
    `${target} got stepped on by an elephant.`,
    `${target} died from eating too much ass.`,
    `${target} has a stroke after a sad miserable existence. They are then devoured by their ample cats.`,
    `${target} has been found guilty, time for their execution!`,
    `${target} has some bad chinese food, and pays the ultimate price.`,
    `${target} is abducted by aliens, and the government kills them to cover it up.`,
    `${target} is dead at the hands of ${author}.`,
    `${target} is injected with chocolate syrup, which mutates them into a person made out of chocolate. While doing a part-time job at the Daycare, they are devoured by the hungry babies. :chocolate_bar:`,
    `${target} is killed by a rabbit with a vicious streak a mile wide`,
    `${target} is killed by their own stupidity.`,
    `${target} is killed in a robbery gone wrong.`,
    `${target} is not able to be killed. Oh, wait, no, ${author} kills them anyway.`,
    `${target} is so dumb that they choked on oxygen.`,
    `${target} is stuffed into a suit by Freddy on their night guard duty. Oh, not those animatronics again!`,
    `${target} is sucked into Minecraft. ${target}, being a noob at the so called Real-Life Minecraft faces the Game Over screen.`,
    `${target} killed themselves after seeing the normie memes that ${author} posts.`,
    `${target} kills themselves after realizing how dumb ${author} is.`,
    `${target} lives, despite ${author}'s murder attempt.`,
    `${target} loses the will to live`,
    `${target} presses a random button and is teleported to the height of 100m, allowing them to fall to their inevitable death. Moral of the story: Don't go around pressing random buttons.`,
    `${target} reads memes till they die.`,
    `${target} ripped his heart out..`,
    `${target} ripped their own heart out to show their love for ${author}.`,
    `${target} screams in terror as they accidentally spawn in the cthulhu while uttering random latin words. Cthulhu grabs ${target} by the right leg and takes them to his dimension yelling, \`Honey, Dinner's ready!\``,
    `${target} slipped in the bathroom and choked on the shower curtain.`,
    `${target} slips on a banana peel and falls down the stairs.`,
    `${target} spins a fidget spinner and when it stops he dies...`,
    `${target} steps on a george foreman and dies of waffle foot.`,
    `${target} takes an arrow to the knee. And everywhere else.`,
    `${target} talked back to mods and got destroyed by the ban hammer.`,
    `${target} tips his fedora too far and falls onto the tracks of an oncoming subway.`,
    `${target} tried to get crafty, but they accidentally cut themselves with the scissors.:scissors:`,
    `${target} tried to get famous on YouTube by live-streaming something dumb. Skydiving while chained to a fridge.`,
    `${target} tried to outrun a train, the train won.`,
    `${target} tried to pick out the holy grail. He chose... poorly.`,
    `${target} tried to play in the street...`,
    `${target} trips over his own shoe laces and dies.`,
    `${target} vocally opposed the Clintons and then suddenly disappeared.`,
    `${target} was a resident of Alderaan before Darth Vader destroyed the planet...`,
    `${target} was accused of stealing Neptune's crown...`,
    `${target} was charging their Samsung Galaxy Note 7...`,
    `${target} was eaten alive by ants`,
    `${target} was given a chance to synthesize element 119 (Ununennium) and have it named after them, but they messed up. R.I.P.`,
    `${target} was killed by ${author} with baby wipes.`,
    `${target} was murdered by ${author} and everyone knows it, but there is no proof.`,
    `${target} was scooped by ${author} and their innards are now Ennard.`,
    `${target} was teleported to the timeline where Jurassic World was real and they were eaten alive by the Indominus Rex.`,
    `${target} was thrown in the crusher of a trash truck by ${author}.`,
    `${target} was walking normally when out of the corner of their eye they saw someone do a bottle flip and dab causing ${target} to have a stroke.`,
    `${target} watched the Emoji Movie and died of sheer cringe.`,
    `${target} went on a ride with a lead balloon.`,
    `After getting pushed into the ocean by ${author}, ${target} is eaten by a shark.`,
    `After raid of roblox kids entered the server, ${target} died of cancer.`,
    `Aids, ${target} died from aids.`,
    `Calling upon the divine powers, ${author} smites ${target} and their heathen ways`,
    `In a sudden turn of events, I **don't** kill ${target}.`,
    `no u`,
    `Our lord and savior Gaben strikes ${target} with a lighting bolt.`,
    `Sorry, ${author}, I don't like killing people.`,
    `The bullet missed Harambe and hit ${target} instead. Yay for Harambe!`,
    `While performing colonoscopy on an elephant, ${target} gets their head stuck in the elephants rectum and chokes.`
    ];  
     await message.channel.send(kills[Math.floor(Math.random()*kills.length)]);
      },
}