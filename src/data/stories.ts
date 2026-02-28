
export interface StoryStage {
  year: number;
  title: string;
  description: string;
  prompt: string;
  caption?: string; // For TikTok style
}

export interface StoryTemplate {
  id: string;
  title: string;
  description: string;
  icon: string;
  stages: StoryStage[];
}

const MASTER_PROMPT = `Ultra realistic Google Street View style photo, camera mounted on top of mapping car, elevated perspective about 2.5 meters above ground, slight fisheye wide angle lens distortion, identical camera position across years, front view from middle of road, vertical composition 9:16 story format, documentary photography, photorealistic textures, natural lighting.

SINGLE IMAGE ONLY, NO SPLIT SCREEN, NO COLLAGE, NO BEFORE/AFTER COMPARISON, ONE SINGLE VIEW.

luxury American suburban house with large front porch, big front lawn, driveway, wooden fence, mailbox near road, garage, quiet suburban neighborhood, consistent house structure and environment across years.

Include street view interface overlay elements: navigation arrows on road.

same camera position, same house structure, gradual realistic changes over time, documentary realism, strong emotional storytelling.`;

const CONTRAST_BOOSTER = `dramatic decline, cinematic lighting, realistic aging progression`;

export const STORIES: StoryTemplate[] = [
  {
    id: 'standard-decay',
    title: 'The American Dream Decay',
    description: 'A luxury suburban home slowly transforming into an abandoned ruin.',
    icon: '🏚️',
    stages: [
      {
        year: 2000,
        title: 'Peak Luxury',
        description: 'The golden era of the American Dream.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, beautiful luxury suburban house, perfect clean exterior, fresh paint, perfect green lawn, luxury cars in driveway (black SUV and white sports car), large happy family gathering outside, children playing, barbecue party on porch, expensive lifestyle atmosphere, bright sunny day, vibrant colors, house looks rich and successful. ${CONTRAST_BOOSTER}`,
        caption: "2000: Life was perfect. We had it all. 🏡✨"
      },
      {
        year: 2005,
        title: 'Subtle Changes',
        description: 'Still wealthy, but the cracks are starting to show.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, same luxury house slightly aging, lawn still maintained but less perfect, one luxury car replaced with older sedan, fewer people outside, quieter atmosphere, early signs of lifestyle decline, still comfortable upper middle class feeling. ${CONTRAST_BOOSTER}`,
        caption: "2005: Things got a bit quieter, but we were still happy. 🚗"
      },
      {
        year: 2010,
        title: 'Financial Pressure',
        description: 'The recession hits. Maintenance stops.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, house visibly aging, peeling paint starting, lawn uneven, only one car remaining in driveway, clutter on porch, no children outside, tense quiet atmosphere, subtle economic struggle feeling. ${CONTRAST_BOOSTER}`,
        caption: "2010: Dad lost his job. The gardeners stopped coming. 📉"
      },
      {
        year: 2015,
        title: 'Major Decline',
        description: 'Signs of neglect become obvious.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, house poorly maintained, cracked walls, overgrown lawn, rusty old car in driveway, broken porch furniture, windows dirty, NO PEOPLE, NO CROWD, DESERTED, no activity outside, tired neglected feeling, lower class atmosphere, gloomy sky. ${CONTRAST_BOOSTER}`,
        caption: "2015: We had to sell the cars. The house felt heavy. 🥀"
      },
      {
        year: 2020,
        title: 'Near Abandonment',
        description: 'The house is barely recognizable.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, house severely deteriorated, broken windows, damaged roof, heavily overgrown yard, rusty abandoned vehicle, driveway cracked, trash and debris outside, dark gloomy mood, no residents visible, completely deserted. ${CONTRAST_BOOSTER}`,
        caption: "2020: Everyone left. Just memories and dust now. 🕸️"
      },
      {
        year: 2025,
        title: 'Completely Abandoned',
        description: 'Nature takes back what was hers.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, completely abandoned luxury house, structure collapsing, boarded windows, graffiti on walls, vegetation taking over property, empty driveway, rusted vehicle destroyed, haunting melancholic atmosphere, cinematic realism, sense of loneliness, post-apocalyptic feel. ${CONTRAST_BOOSTER}`,
        caption: "2025: If walls could talk, they'd scream. ☠️💔"
      }
    ]
  },
  {
    id: 'beverly-hills',
    title: 'Beverly Hills Collapse',
    description: 'A multi-million dollar mansion falling into ruin.',
    icon: '🌴',
    stages: [
      {
        year: 2000,
        title: 'Hollywood Glamour',
        description: 'A massive mansion with palm trees and fountains.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, massive Beverly Hills mansion, white marble columns, palm trees, expensive fountain, red ferrari in driveway, paparazzi in distance, golden hour lighting, symbol of ultimate wealth. ${CONTRAST_BOOSTER}`,
        caption: "2000: The peak of stardom. Everyone wanted to be us. 🌟"
      },
      {
        year: 2005,
        title: 'Fading Shine',
        description: 'The parties are getting smaller.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, mansion still grand but fountain is off, one palm tree dying, ferrari replaced by suv, slightly overcast, less vibrant. ${CONTRAST_BOOSTER}`,
        caption: "2005: The offers stopped coming in. 📉"
      },
      {
        year: 2010,
        title: 'The Scandal',
        description: 'Post-scandal, the money dried up.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, mansion looking slightly dated, fountain dry and dirty, palm trees untrimmed, gate slightly rusted, no cars, overcast sky, feeling of emptiness after the party is over. ${CONTRAST_BOOSTER}`,
        caption: "2010: The parties stopped. The silence was loud. ☁️"
      },
      {
        year: 2015,
        title: 'Foreclosure',
        description: 'Bank seized property.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, foreclosure sign on gate, lawn brown and dead, windows dusty, pool green (visible), sense of abandonment, gloomy atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2015: The bank took the keys. 🏦🚫"
      },
      {
        year: 2020,
        title: 'Vandalism',
        description: 'Squatters and graffiti.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, mansion vandalized, graffiti on marble columns, windows smashed, wild vegetation, trash everywhere, dark and scary. ${CONTRAST_BOOSTER}`,
        caption: "2020: It belongs to the streets now. 🎨🏚️"
      },
      {
        year: 2025,
        title: 'The Ruins',
        description: 'A modern ruin in the hills.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, Beverly Hills ruins, marble columns fallen, pool filled with green sludge and debris, graffiti tags on expensive walls, palm trees dead, apocalyptic luxury atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2025: Paradise lost. 🥀🏛️"
      }
    ]
  },
  {
    id: 'emotional-loss',
    title: 'The Empty Nest',
    description: 'A family home that grows quiet as life fades away.',
    icon: '🧸',
    stages: [
      {
        year: 2000,
        title: 'Full House',
        description: 'Bicycles, toys, and life everywhere.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, cozy family home, bicycles on lawn, swing set, toys scattered, warm window light, parents and grandparents on porch, feeling of safety and love. ${CONTRAST_BOOSTER}`,
        caption: "2000: Grandma was still here. The house was never quiet. ❤️"
      },
      {
        year: 2005,
        title: 'College Years',
        description: 'Kids are leaving.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, swing set looks unused, fewer bikes, parents waving goodbye, slightly quieter atmosphere, lawn perfect. ${CONTRAST_BOOSTER}`,
        caption: "2005: The kids went to college. It's quieter now. 🎓"
      },
      {
        year: 2010,
        title: 'Retirement',
        description: 'Just the couple.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, swing set removed, flower garden expanded, elderly couple sitting on porch, peaceful, slow pace of life. ${CONTRAST_BOOSTER}`,
        caption: "2010: Just us two and the garden. 🌹"
      },
      {
        year: 2015,
        title: 'Growing Old',
        description: 'Just the elderly couple remains.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, same house but very quiet, lawn perfectly manicured but empty, ramp installed for accessibility, one small car, autumn leaves, melancholic peacefulness. ${CONTRAST_BOOSTER}`,
        caption: "2015: It's getting harder to maintain the yard. 🍂"
      },
      {
        year: 2020,
        title: 'The Loss',
        description: 'One remains.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, house blinds closed, garden slightly overgrown, one chair on porch, ambulance in distance (subtle), sad atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2020: The house feels too big for one person. 💔"
      },
      {
        year: 2025,
        title: 'The End',
        description: 'The "For Sale" sign.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, empty house, 'FOR SALE' sign in front, windows dark, leaves piled up on porch, moving boxes visible through window, sense of finality and goodbye. ${CONTRAST_BOOSTER}`,
        caption: "2025: Goodbye, old friend. Thanks for the memories. 📦👋"
      }
    ]
  },
  {
    id: 'family-farm',
    title: 'The Family Farm',
    description: 'A thriving farm succumbs to time and nature.',
    icon: '🚜',
    stages: [
      {
        year: 2000,
        title: 'Harvest Season',
        description: 'Bountiful crops and red barn.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, classic red barn, green tractor, golden wheat fields, farmer working, blue sky, thriving agriculture. ${CONTRAST_BOOSTER}`,
        caption: "2000: The harvest was good this year. 🌾"
      },
      {
        year: 2005,
        title: 'Hard Work',
        description: 'Equipment aging.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, barn paint fading slightly, tractor muddy, clouds gathering, still active but harder work. ${CONTRAST_BOOSTER}`,
        caption: "2005: Prices are dropping, but we keep going. 🚜"
      },
      {
        year: 2010,
        title: 'The Drought',
        description: 'Crops failing.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, fields brown and dry, barn roof missing shingles, tractor rusted, dust bowl atmosphere, worry. ${CONTRAST_BOOSTER}`,
        caption: "2010: No rain for months. The earth is cracking. ☀️"
      },
      {
        year: 2015,
        title: 'Foreclosure',
        description: 'Auction day.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, auction sign, equipment lined up for sale, barn door hanging off, empty fields, sad atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2015: We lost the farm. 🔨"
      },
      {
        year: 2020,
        title: 'Abandonment',
        description: 'Nature returns.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, barn collapsing, silo rusted through, tall weeds everywhere, fences down, wild animals visible. ${CONTRAST_BOOSTER}`,
        caption: "2020: The coyotes run this place now. 🐺"
      },
      {
        year: 2025,
        title: 'Reclaimed',
        description: 'Forest takes over.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, barn is a pile of wood, young trees growing through the ruins, nature reclaimed everything, beautiful decay. ${CONTRAST_BOOSTER}`,
        caption: "2025: Earth takes back what is hers. 🌲"
      }
    ]
  },
  {
    id: 'route-66',
    title: 'Route 66 Motel',
    description: 'A roadside motel bypassed by the highway.',
    icon: '⛽',
    stages: [
      {
        year: 2000,
        title: 'Neon Nights',
        description: 'Busy roadside stop.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, retro motel, neon sign buzzing 'VACANCY', classic cars, tourists, desert sunset, vibrant Americana. ${CONTRAST_BOOSTER}`,
        caption: "2000: Best milkshakes on the highway! 🥤"
      },
      {
        year: 2005,
        title: 'The Bypass',
        description: 'Traffic slows down.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, neon sign flickering, fewer cars, paint peeling, road looks emptier, slightly dusty. ${CONTRAST_BOOSTER}`,
        caption: "2005: They built the new interstate. Nobody stops anymore. 🛣️"
      },
      {
        year: 2010,
        title: 'No Vacancy',
        description: 'Closing down.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, 'NO VACANCY' permanent sign, pool empty, weeds in parking lot, cheap used car, sketchy atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2010: Closed for renovations. (We never reopened). 🔒"
      },
      {
        year: 2015,
        title: 'Derelict',
        description: 'Boarded up.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, windows boarded up, sign broken, tumbleweeds, graffiti, fence around pool, abandoned. ${CONTRAST_BOOSTER}`,
        caption: "2015: Just a ghost town now. 👻"
      },
      {
        year: 2020,
        title: 'Vandalized',
        description: 'Stripped for parts.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, roof caved in, doors missing, copper stripped, fire damage marks, desolate. ${CONTRAST_BOOSTER}`,
        caption: "2020: Picked clean by scavengers. 🦅"
      },
      {
        year: 2025,
        title: 'Desert Dust',
        description: 'Fading into sand.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, almost gone, walls crumbled to sand, cactus growing in lobby, sun bleached ruins, silence. ${CONTRAST_BOOSTER}`,
        caption: "2025: Just another memory in the dust. 🌵"
      }
    ]
  },
  {
    id: 'corner-store',
    title: 'The Corner Store',
    description: 'A beloved local shop vs big box competition.',
    icon: '🏪',
    stages: [
      {
        year: 2000,
        title: 'Grand Opening',
        description: 'Neighborhood hub.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, cute corner store, fresh produce outside, kids buying candy, bright awning, friendly owner waving, community feel. ${CONTRAST_BOOSTER}`,
        caption: "2000: Everyone knew your name here. 🍬"
      },
      {
        year: 2005,
        title: 'Competition',
        description: 'Walmart opened nearby.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, awning faded, sale signs in window, fewer customers, slightly cluttered, worried atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2005: The Supercenter opened down the road. 🏪"
      },
      {
        year: 2010,
        title: 'Struggling',
        description: 'Empty shelves.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, neon sign broken, shelves visible empty through window, 'CASH ONLY' sign, exterior dirty, graffiti tag. ${CONTRAST_BOOSTER}`,
        caption: "2010: We're trying to stay afloat. 💸"
      },
      {
        year: 2015,
        title: 'Closed',
        description: 'Out of business.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, boarded up windows, 'FOR LEASE' sign faded, trash piling up, homeless person sleeping nearby, sad. ${CONTRAST_BOOSTER}`,
        caption: "2015: End of an era. 🔒"
      },
      {
        year: 2020,
        title: 'Decay',
        description: 'Rotting away.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, roof collapsing, awning tattered, posters peeling, rats visible, urban decay. ${CONTRAST_BOOSTER}`,
        caption: "2020: An eyesore for the neighborhood. 🐀"
      },
      {
        year: 2025,
        title: 'Demolition',
        description: 'Gone.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, pile of rubble, bulldozer nearby, dust in air, empty lot, memory erased. ${CONTRAST_BOOSTER}`,
        caption: "2025: Paved paradise. 🚧"
      }
    ]
  },
  {
    id: 'seaside-villa',
    title: 'The Seaside Villa',
    description: 'A beach house claimed by the rising ocean.',
    icon: '🌊',
    stages: [
      {
        year: 2000,
        title: 'Summer Paradise',
        description: 'Perfect beach vacation.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, stunning beach house on stilts, white sand, blue ocean, beach umbrella, happy family, sunny, paradise. ${CONTRAST_BOOSTER}`,
        caption: "2000: Best summer ever! 🏖️"
      },
      {
        year: 2005,
        title: 'High Tide',
        description: 'Water getting closer.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, sand dunes eroded, water line closer to house, storm shutters installed, grey sky, windy. ${CONTRAST_BOOSTER}`,
        caption: "2005: The storms are getting worse. 🌬️"
      },
      {
        year: 2010,
        title: 'Storm Damage',
        description: 'Hurricane aftermath.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, stairs washed away, siding missing, debris on beach, house looks tilted, dangerous. ${CONTRAST_BOOSTER}`,
        caption: "2010: We can't get insurance anymore. 🌊"
      },
      {
        year: 2015,
        title: 'Abandoned',
        description: 'Too dangerous to live.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, house condemned, windows broken, stilts exposed and rotting, ocean waves hitting underneath, scary. ${CONTRAST_BOOSTER}`,
        caption: "2015: Nature is winning. ⚠️"
      },
      {
        year: 2020,
        title: 'Collapse',
        description: 'Falling into the sea.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, half the house collapsed into water, roof in sand, waves crashing over ruins, dramatic destruction. ${CONTRAST_BOOSTER}`,
        caption: "2020: Going... going... 📉"
      },
      {
        year: 2025,
        title: 'Gone',
        description: 'Just ocean.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, just ocean and a few wooden pylons sticking out, house is gone, melancholic sunset, power of nature. ${CONTRAST_BOOSTER}`,
        caption: "2025: Washed away. 🌊👋"
      }
    ]
  },
  {
    id: 'tech-startup',
    title: 'The Tech Startup',
    description: 'From unicorn status to abandoned glass shell.',
    icon: '💻',
    stages: [
      {
        year: 2000,
        title: 'The Boom',
        description: 'Futuristic HQ.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, modern glass office building, tech logo, ping pong tables visible, young people working, tesla in driveway, optimistic future. ${CONTRAST_BOOSTER}`,
        caption: "2000: We're going to change the world! 🚀"
      },
      {
        year: 2005,
        title: 'The Bubble Burst',
        description: 'Layoffs.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, office looks emptier, logo faded, no fancy cars, grey sky, stressed atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2005: The investors pulled out. 📉"
      },
      {
        year: 2010,
        title: 'Empty Offices',
        description: 'For lease.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, building empty, 'SPACE FOR RENT' banner, glass dirty, weeds in landscaping, corporate ghost town. ${CONTRAST_BOOSTER}`,
        caption: "2010: It's a ghost town in here. 👻"
      },
      {
        year: 2015,
        title: 'Vandalism',
        description: 'Smashed glass.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, glass panels smashed, graffiti on modern walls, squatters inside, servers dumped outside, chaotic. ${CONTRAST_BOOSTER}`,
        caption: "2015: They took the copper wiring. 🔌"
      },
      {
        year: 2020,
        title: 'Overgrown',
        description: 'Cyberpunk decay.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, vines growing up glass walls, trees inside lobby, futuristic ruin, nature vs tech, cinematic. ${CONTRAST_BOOSTER}`,
        caption: "2020: Nature is the new CEO. 🌿"
      },
      {
        year: 2025,
        title: 'Skeleton',
        description: 'Steel frame remains.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, rusted steel frame, all glass gone, concrete crumbling, apocalyptic tech ruin, silence. ${CONTRAST_BOOSTER}`,
        caption: "2025: 404 Not Found. 🚫"
      }
    ]
  },
  {
    id: 'victorian-manor',
    title: 'The Haunted Manor',
    description: 'A beautiful Victorian lady turns into a nightmare.',
    icon: '👻',
    stages: [
      {
        year: 2000,
        title: 'Painted Lady',
        description: 'Restored beauty.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, colorful Victorian mansion, perfect garden, gazebo, pride of the neighborhood, sunny and cheerful. ${CONTRAST_BOOSTER}`,
        caption: "2000: The jewel of the street. 💎"
      },
      {
        year: 2005,
        title: 'Peeling Paint',
        description: 'Maintenance is expensive.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, paint chipping, garden slightly overgrown, one shutter hanging, cloudy sky, less vibrant. ${CONTRAST_BOOSTER}`,
        caption: "2005: It costs a fortune to heat this place. 💸"
      },
      {
        year: 2010,
        title: 'Neglect',
        description: 'Spooky vibes.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, grey wood exposed, windows dirty, iron fence rusted, looks uninviting, dark shadows. ${CONTRAST_BOOSTER}`,
        caption: "2010: Kids cross the street to avoid us. 🕸️"
      },
      {
        year: 2015,
        title: 'Haunted',
        description: 'Abandoned.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, boarded windows, roof hole, dead trees, crow flying, classic haunted house look, scary. ${CONTRAST_BOOSTER}`,
        caption: "2015: Did you hear that noise? 👻"
      },
      {
        year: 2020,
        title: 'Fire',
        description: 'Arson.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, half burned down, charred wood, smoke marks, yellow police tape, tragedy. ${CONTRAST_BOOSTER}`,
        caption: "2020: It went up in flames last night. 🔥"
      },
      {
        year: 2025,
        title: 'The Shell',
        description: 'Burnt ruins.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, chimney standing alone, basement exposed, blackened debris, moonlit (if possible) or dark gloom, horror ending. ${CONTRAST_BOOSTER}`,
        caption: "2025: Only ghosts live here now. ⚰️"
      },
    ]
  },
  {
    id: 'log-cabin',
    title: 'The Forest Cabin',
    description: 'A cozy retreat reclaimed by the deep woods.',
    icon: '🌲',
    stages: [
      {
        year: 2000,
        title: 'Cozy Retreat',
        description: 'Weekend getaway.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, beautiful log cabin in woods, smoke from chimney, firewood stacked, jeep in driveway, cozy warm light. ${CONTRAST_BOOSTER}`,
        caption: "2000: Our little slice of heaven. ☕"
      },
      {
        year: 2005,
        title: 'Less Visited',
        description: 'Busy lives.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, leaves on roof, wood pile rotting, no smoke, car missing, slightly lonely. ${CONTRAST_BOOSTER}`,
        caption: "2005: We haven't been up since last summer. 📅"
      },
      {
        year: 2010,
        title: 'Storm Damage',
        description: 'Tree fall.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, tree branch on roof, window cracked, porch sagging, moss growing on logs, damp atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2010: The roof is leaking. 🌧️"
      },
      {
        year: 2015,
        title: 'Abandoned',
        description: 'Door open.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, door hanging open, dark inside, porch collapsed, ferns growing on steps, wild. ${CONTRAST_BOOSTER}`,
        caption: "2015: Left to the elements. 🍃"
      },
      {
        year: 2020,
        title: 'Rotting',
        description: 'Collapsing.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, roof caved in, logs rotting and turning to mulch, bear scratching marks, forest floor taking over. ${CONTRAST_BOOSTER}`,
        caption: "2020: Returning to the earth. 🍄"
      },
      {
        year: 2025,
        title: 'Moss Pile',
        description: 'Barely visible.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, green mound of moss and wood, chimney only recognizable part, deep forest atmosphere, ancient feel. ${CONTRAST_BOOSTER}`,
        caption: "2025: Was there ever a house here? 🌿"
      }
    ]
  },
  {
    id: 'school',
    title: 'The Old School',
    description: 'A place of learning becomes a silent hall.',
    icon: '🏫',
    stages: [
      {
        year: 2000,
        title: 'Recess',
        description: 'Full of life.',
        prompt: `${MASTER_PROMPT} year 2000, watermark text 'Google Street View 2000' bottom left, classic brick school building, kids playing on playground, yellow school buses, flag flying, bright and happy. ${CONTRAST_BOOSTER}`,
        caption: "2000: Best years of our lives. 📚"
      },
      {
        year: 2005,
        title: 'Budget Cuts',
        description: 'Fewer students.',
        prompt: `${MASTER_PROMPT} year 2005, watermark text 'Google Street View 2005' bottom left, paint peeling on playground, fewer buses, grass slightly long, overcast sky, serious atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2005: They cut the art program. 🎨"
      },
      {
        year: 2010,
        title: 'Closed',
        description: 'Consolidation.',
        prompt: `${MASTER_PROMPT} year 2010, watermark text 'Google Street View 2010' bottom left, 'SCHOOL CLOSED' sign, chain link fence locked, empty playground, silence, windows dark. ${CONTRAST_BOOSTER}`,
        caption: "2010: The last bell rang today. 🔔"
      },
      {
        year: 2015,
        title: 'Vandalized',
        description: 'Broken windows.',
        prompt: `${MASTER_PROMPT} year 2015, watermark text 'Google Street View 2015' bottom left, windows smashed, graffiti on brick walls, playground equipment rusted and dangerous, weeds on basketball court. ${CONTRAST_BOOSTER}`,
        caption: "2015: No trespassing. 🚫"
      },
      {
        year: 2020,
        title: 'Ruins',
        description: 'Roof collapse.',
        prompt: `${MASTER_PROMPT} year 2020, watermark text 'Google Street View 2020' bottom left, roof caved in, trees growing inside classrooms, nature taking over, spooky atmosphere. ${CONTRAST_BOOSTER}`,
        caption: "2020: Class dismissed... forever. 🕸️"
      },
      {
        year: 2025,
        title: 'Demolition',
        description: 'History erased.',
        prompt: `${MASTER_PROMPT} year 2025, watermark text 'Google Street View 2025' bottom left, pile of red bricks, bulldozer, only the archway remains, dust, memory gone. ${CONTRAST_BOOSTER}`,
        caption: "2025: Just a pile of bricks now. 🧱"
      }
    ]
  }
];
