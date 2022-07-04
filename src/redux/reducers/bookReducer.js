import { createSlice, current } from "@reduxjs/toolkit";

let lastId = 13;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const bookSlice = createSlice({
  name: "BOOKS",
  initialState: {
    books: [
      {
        id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/515iYKfqlrL.jpg",
        title: "Perpetua’s Journey",
        author: "Jennifer A. Rea",
        description:
          "Examining issues of power, gender, and religion in the ancient world, Perpetua's Journey: Faith, Gender, and Power in the Roman Empire is a graphic history set in Roman Africa in 203 CE that tells the story of the Christian martyr Perpetua. The Passio Sanctarum Perpetuae et Felicitatis, also known as The Passion of Saints Perpetua and Felicity, is the first extant diary authored by a Christian woman. Vibia Perpetua was a young mother who lived in Roman Africa and, at the age of twenty-two, chose to publicly proclaim her Christian faith. She died as a result of her actions, though she did not die alone; she was part of a group of Christian martyrs, including several slaves, who were placed in prison and then executed in Carthage during the birthday celebrations of Emperor Septimius Severus's son in 203 CE. Perpetua's diary contains her account of the days leading up to her martyrdom.Perpetua's Journey occupies a space between the many works designed primarily for specialists and advanced scholars, who already know a great deal about Perpetua and the history of the Roman Empire, and lives of saints that are intended for general readers. Perpetua's Journey is unique because it combines both sequential art and historical and social commentary, and it places Perpetua's diary in the context of life in Roman North Africa in 203 CE",
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 29.99,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 29.99,
        category: "Roman",
        isSold: false,
        isAdded: true,
      },
      {
        id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/A12HiOIG5bL.jpg",
        title: "The Darkening Age",
        author: "Catherine Nixey",
        description:
          "In Harran, the locals refused to convert. They were dismembered, their limbs hung along the town’s main street. In Alexandria, zealots pulled the elderly philosopher-mathematician Hypatia from her chariot and flayed her to death with shards of broken pottery. Not long before, their fellow Christians had invaded the city’s greatest temple and razed it—smashing its world-famous statues and destroying all that was left of Alexandria’s Great Library. Today, we refer to Christianity’s conquest of the West as a “triumph.” But this victory entailed an orgy of destruction in which Jesus’s followers attacked and suppressed classical culture, helping to pitch Western civilization into a thousand-year-long decline. Just one percent of Latin literature would survive the purge; countless antiquities, artworks, and ancient traditions were lost forever. As Catherine Nixey reveals, evidence of early Christians’ campaign of terror has been hiding in plain sight: in the palimpsests and shattered statues proudly displayed in churches and museums the world over. In The Darkening Age, Nixey resurrects this lost history, offering a wrenching account of the rise of Christianity and its terrible cost.",
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 17.99,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 17.99,
        category: "Roman",
        isSold: false,
        isAdded: true,
      },
      {
        id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/I/81BewDEGuNL.jpg",
        title: "The Fate of Rome",
        author: "Kyle Harper",
        description:
          "Here is the monumental retelling of one of the most consequential chapters of human history: the fall of the Roman Empire. The Fate of Rome is the first book to examine the catastrophic role that climate change and infectious diseases played in the collapse of Rome’s power―a story of nature’s triumph over human ambition.Interweaving a grand historical narrative with cutting-edge climate science and genetic discoveries, Kyle Harper traces how the fate of Rome was decided not just by emperors, soldiers, and barbarians but also by volcanic eruptions, solar cycles, climate instability, and devastating viruses and bacteria. He takes readers from Rome’s pinnacle in the second century, when the empire seemed an invincible superpower, to its unraveling by the seventh century, when Rome was politically fragmented and materially depleted. Harper describes how the Romans were resilient in the face of enormous environmental stress, until the besieged empire could no longer withstand the combined challenges of a “little ice age” and recurrent outbreaks of bubonic plague.A poignant reflection on humanity’s intimate relationship with the environment, The Fate of Rome provides a sweeping account of how one of history’s greatest civilizations encountered and endured, yet ultimately succumbed to the cumulative burden of nature’s violence. The example of Rome is a timely reminder that climate change and germ evolution have shaped the world we inhabit―in ways that are surprising and profound.",
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 18.95,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 18.95,
        category: "Roman",
        isSold: false,
        isAdded: true,
      },
      {
        id: 4,
        img: "https://images-na.ssl-images-amazon.com/images/I/71jJcPTGd3L.jpg",
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        description: `“I just love the world of Patrick Rothfuss.” (Lin-Manuel Miranda) “He’s bloody good, this Rothfuss guy.” (George R. R. Martin) “Rothfuss has real talent.” (Terry Brooks) Over 1 Million Copies Sold!   Day One: The Name of the Wind My name is Kvothe.I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.You may have heard of me.So begins a tale unequaled in fantasy literature - the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend.Praise for The Kingkiller Chronicle:“The best epic fantasy I read last year.... He’s bloody good, this Rothfuss guy.” (George R. R. Martin, New York Times bestselling author of A Song of Ice and Fire) “Rothfuss has real talent, and his tale of Kvothe is deep and intricate and wondrous.” (Terry Brooks, New York Times bestselling author of Shannara) "It is a rare and great pleasure to find a fantasist writing...with true music in the words." (Ursula K. Le Guin, award-winning author of Earthsea) "The characters are real and the magic is true.” (Robin Hobb, New York Times bestselling author of Assassin’s Apprentice) "Masterful.... There is a beauty to Pat's writing that defies description." (Brandon Sanderson, New York Times bestselling author of Mistborn)`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 29.99,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 29.99,
        category: "Fantasy",
        isSold: false,
        isAdded: true,
      },
      {
        id: 5,
        img: "https://images-na.ssl-images-amazon.com/images/I/91KzZWpgmyL.jpg",
        title: "He Way of Kings",
        author: "Brandon Sanderson",
        description:
          "From number one New York Times best-selling author Brandon Sanderson, The Way of Kings, book one of the Stormlight Archive, begins an incredible new saga of epic proportion. Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain so frequently that they have shaped ecology and civilization alike. Animals hide in shells, trees pull in branches, and grass retracts into the soilless ground. Cities are built only where the topography offers shelter.It has been centuries since the fall of the 10 consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them and won by them.One such war rages on a ruined landscape called the Shattered Plains. There, Kaladin, who traded his medical apprenticeship for a spear to protect his little brother, has been reduced to slavery. In a war that makes no sense, where 10 armies fight separately against a single foe, he struggles to save his men and to fathom the leaders who consider them expendable..",
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 63.93,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 63.93,
        category: "Fantasy",
        isSold: false,
        isAdded: true,
      },
      {
        id: 6,
        img: "https://images-na.ssl-images-amazon.com/images/I/81VxGPk9YFL.jpg",
        title: "A Wizard of Earthsea",
        author: "Ursula Leguin",
        description: `"The shapeless mass of darkness split apart. It sundered, and a pale spindle of light gleamed between his open arms. In the oval of light there moved a human shape: a tall woman...beautiful, and sorrowful, and full of fear." - from A Wizard of Earthsea, first in a tetralogy that includes The Tombs of Atuan and The Farthest Shore, introduces the listener to Ged, the greatest sorcerer in all Earthsea, known also as Sparrowhawk. When Sparrowhawk casts a spell that saves his village from destruction at the hands of the invading Kargs, Ogion, the Mage of Re Albi, encourages the boy to apprentice himself in the art of wizardry. So, at the age of 13, the boy receives his true name - Ged - and gives himself over to the gentle tutelage of the Master Ogion. But impatient with the slowness of his studies and infatuated with glory, Ged embarks for the Island of Roke, where the highest arts of wizardry are taught. There, Ged's natural talents enable him to surpass his classmates in little time. But when his vanity prompts him to summon Elfarran, the fair lady of the Deed of Enlad, he unleashes a shapeless mass of darkness - the shadow.`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 20.99,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 20.99,
        category: "Fantasy",
        isSold: false,
        isAdded: true,
      },
      {
        id: 7,
        img: "https://upload.wikimedia.org/wikipedia/en/b/be/The_Color_Purple_poster.jpg",
        title: "The Color Purple",
        author: "Alice Walker",
        description: `Celie has grown up poor in rural Georgia, despised by the society around her and abused by her own family. She strives to protect her sister, Nettie, from a similar fate, and while Nettie escapes to a new life as a missionary in Africa, Celie is left behind without her best friend and confidante, married off to an older suitor, and sentenced to a life alone with a harsh and brutal husband.In an attempt to transcend a life that often seems too much to bear, Celie begins writing letters directly to God. The letters, spanning 20 years, record a journey of self-discovery and empowerment guided by the light of a few strong women. She meets Shug Avery, her husband’s mistress and a jazz singer with a zest for life, and her stepson’s wife, Sophia, who challenges her to fight for independence. And though the many letters from Celie’s sister are hidden by her husband, Nettie’s unwavering support will prove to be the most breathtaking of all The Color Purple has sold more than five million copies, inspired an Academy Award-nominated film starring Whoopi Goldberg and Oprah Winfrey and directed by Steven Spielberg, and been adapted into a Tony-nominated Broadway musical. Lauded as a literary masterpiece, this is the groundbreaking novel that placed Walker “in the company of Faulkner” (The Nation) and remains a wrenching - yet intensely uplifting - experience for new generations of listeners.`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 17,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 17,
        category: "Classic",
        isSold: false,
        isAdded: true,
      },
      {
        id: 8,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg/800px-The_Great_Gatsby_cover_1925_%281%29.jpg",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: `F. Scott Fitzgerald’s classic American novel of the Roaring Twenties is beloved by generations of readers and stands as his crowning work. This new audio edition, authorized by the Fitzgerald estate, is narrated by Oscar-nominated actor Jake Gyllenhaal (Brokeback Mountain). Gyllenhaal's performance is a faithful delivery in the voice of Nick Carraway, the Midwesterner turned New York bond salesman, who rents a small house next door to the mysterious millionaire Jay Gatsby. There, he has a firsthand view of Gatsby’s lavish West Egg parties - and of his undying love for the beautiful Daisy Buchanan.After meeting and losing Daisy during the war, Gatsby has made himself fabulously wealthy. Now, he believes that his only way to true happiness is to find his way back into Daisy’s life, and he uses Nick to try to reach her. What happens when the characters’ fantasies are confronted with reality makes for a startling conclusion to this iconic masterpiece.This special audio edition joins the recent film - as well as many other movie, radio, theater, and even video-game adaptations - as a fitting tribute to the cultural significance of Fitzgerald’s Jazz Age classic, widely regarded as one of the greatest stories ever told.`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 14.95,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 14.95,
        category: "Classic",
        isSold: false,
        isAdded: true,
      },
      {
        id: 9,
        img: "https://images-na.ssl-images-amazon.com/images/I/91qvx7zE7YL.jpg",
        title: "Their Eyes Were Watching God",
        author: "Zora Neale Hurston",
        description: `Their Eyes Were Watching God, an American classic, is the luminous and haunting novel about Janie Crawford, a Southern Black woman in the 1930s, whose journey from a free-spirited girl to a woman of independence and substance has inspired writers and readers for close to 70 years.This poetic, graceful love story, rooted in Black folk traditions and steeped in mythic realism, celebrates boldly and brilliantly African-American culture and heritage. And in a powerful, mesmerizing narrative, it pays quiet tribute to a Black woman who, though constricted by the times, still demanded to be heard.Originally published in 1937 and long out of print, the book was reissued in 1975 and nearly three decades later Their Eyes Were Watching God is considered a seminal novel in American fiction.`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 17.99,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 17.99,
        category: "Classic",
        isSold: false,
        isAdded: true,
      },
      {
        id: 10,
        img: "https://images-na.ssl-images-amazon.com/images/I/A1xFKYxBhiL.jpg",
        title: "SPQR",
        author: " Mary Beard",
        description: `A sweeping, revisionist history of the Roman Empire from one of our foremost classicists.Ancient Rome was an imposing city even by modern standards, a sprawling imperial metropolis of more than a million inhabitants, a "mixture of luxury and filth, liberty and exploitation, civic pride and murderous civil war" that served as the seat of power for an empire that spanned from Spain to Syria. Yet how did all this emerge from what was once an insignificant village in central Italy? In SPQR, world-renowned classicist Mary Beard narrates the unprecedented rise of a civilization that even 2,000 years later still shapes many of our most fundamental assumptions about power, citizenship, responsibility, political violence, empire, luxury, and beauty. From the foundational myth of Romulus and Remus to 212 CE, nearly a thousand years later, when the emperor Caracalla gave Roman citizenship to every free inhabitant of the empire, SPQR (the abbreviation of "The Senate and People of Rome") not just examines how we think of ancient Rome but challenges the comfortable historical perspectives that have existed for centuries by exploring how the Romans thought of themselves: how they challenged the idea of imperial rule, how they responded to terrorism and revolution, and how they invented a new idea of citizenship and nation.Opening the audiobook in 63 BCE with the famous clash between the populist aristocrat Catiline and Cicero, the renowned politician and orator, Beard animates this "terrorist conspiracy", which was aimed at the very heart of the republic, demonstrating how this singular event would presage the struggle between democracy and autocracy that would come to define much of Rome's subsequent history. Illustrating how a classical democracy yielded to a self-confident and self-critical empire, SPQR reintroduces us, though in a wholly different way, to famous and familiar characters.`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 17.95,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 17.95,
        category: "Roman",
        isSold: false,
        isAdded: true,
      },

      {
        id: 11,
        img: "https://images-na.ssl-images-amazon.com/images/I/91pbvnDj5FL.jpg",
        title: "The Lies of Locke Lamora",
        author: "Scott Lynch",
        description: `“Remarkable...Scott Lynch’s first novel, The Lies of Locke Lamora, exports the suspense and wit of a cleverly constructed crime caper into an exotic realm of fantasy, and the result is engagingly entertaining.” (The Times, London) An orphan’s life is harsh - and often short - in the mysterious island city of Camorr. But young Locke Lamora dodges death and slavery, becoming a thief under the tutelage of a gifted con artist. As leader of the band of light-fingered brothers known as the Gentleman Bastards, Locke is soon infamous, fooling even the underworld’s most feared ruler. But in the shadows lurks someone still more ambitious and deadly. Faced with a bloody coup that threatens to destroy everyone and everything that holds meaning in his mercenary life, Locke vows to beat the enemy at his own brutal game - or die trying.Praise for The Lies of Locke Lamora “Fresh, original, and engrossing...gorgeously realized.” (George R. R. Martin) “Right now, in the full flush of a second reading, I think The Lies of Locke Lamora is probably in my top ten favorite books ever. Maybe my top five. If you haven’t read it, you should. If you have read it, you should probably read it again.” (Patrick Rothfuss, New York Times best-selling author of The Name of the Wind) “High-octane fantasy...a great swashbuckling yarn of a novel.” (Richard Morgan)`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 42,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 42,
        category: "Fantasy",
        isSold: false,
        isAdded: true,
      },

      {
        id: 12,
        img: "https://images-na.ssl-images-amazon.com/images/I/91mftQtgAkL.jpg",
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        description: `One of the twentieth century’s enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world and the ultimate achievement in a Nobel Prize–winning career.The novel tells the story of the rise and fall of the mythical town of Macondo through the history of the Buendía family. Rich and brilliant, it is a chronicle of life, death, and the tragicomedy of humankind. In the beautiful, ridiculous, and tawdry story of the Buendía family, one sees all of humanity, just as in the history, myths, growth, and decay of Macondo, one sees all of Latin America.Love and lust, war and revolution, riches and poverty, youth and senility, the variety of life, the endlessness of death, the search for peace and truth—these universal themes dominate the novel. Alternately reverential and comical, One Hundred Years of Solitude weaves the political, personal, and spiritual to bring a new consciousness to storytelling. Translated into dozens of languages, this stunning work is no less than an account of the history of the human race.`,
        isbn: getRandomInt(999999999999, 9999999999999),
        price: 31.92,
        piece: 1,
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: 31.92,
        category: "Fantasy",
        isSold: false,
        isAdded: true,
      },
    ],
  },

  reducers: {
    bookAdded: (state, action) => {
      state.books.push({
        id: lastId++,
        img: action.payload.image,
        title: action.payload.title,
        author: action.payload.author,
        description: action.payload.description,
        price: JSON.parse(action.payload.price),
        piece: 1,
        isbn: getRandomInt(999999999999, 9999999999999),
        code: Math.floor(Math.random() * 9999),
        saveTotalPrice: JSON.parse(action.payload.price),
        category: action.payload.category,
        isSold: false,
        isAdded: true,
      });
    },

    increment: (state, action) => {
      let book = state.books.find((v) => v.id === action.payload.id);

      book.piece += 1;

      book.saveTotalPrice += JSON.parse(action.payload.price);

      book.piece > 1 ? (book.isAdded = false) : (book.isAdded = true);
    },

    decrement: (state, action) => {
      let book = state.books.find((v) => v.id === action.payload.id);

      book.piece -= 1;
      book.saveTotalPrice -= JSON.parse(action.payload.price);

      book.piece === 1 ? (book.isAdded = true) : (book.isAdded = false);
    },
  },
});

export const { bookAdded, increment, decrement } = bookSlice.actions;
export default bookSlice.reducer;
