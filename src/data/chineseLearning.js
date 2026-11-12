// src/data/chineseLearning.js
// Static data for Tarun Dayma's Mandarin / Chinese Learning Journal.
// Strictly avoids invented HSK certifications, fake test scores, or inflated fluency claims.

export const CHINESE_LEARNING_OVERVIEW = {
    title: "Chinese Learning Journey",
    subtitle: "Learning a language, one sentence at a time.",
    currentFocus: "Pinyin initials & finals, four tones, tone sandhi, foundational radicals, and elementary SVO sentence patterns.",
    methodology: "Phonetic accuracy first, comprehensible input, active recall via spaced repetition, and handwriting character mechanics.",
    statusBadge: "Foundational Phase / Daily Practice",
};

export const LEARNING_MILESTONES = [
    {
        id: "m-pinyin-chart",
        title: "Pinyin Chart & Four Tones",
        status: "Completed",
        date: "Phase 1",
        description: "Mapped all 21 initials and 36 finals using reference charts. Drilled standard pitch contours for tone 1 (high level), tone 2 (rising), tone 3 (dipping), and tone 4 (falling).",
    },
    {
        id: "m-tone-sandhi",
        title: "Tone Sandhi & Pronunciation Rules",
        status: "Completed",
        date: "Phase 1",
        description: "Studied essential tone sandhi rules, including third-tone transformations (3rd + 3rd -> 2nd + 3rd, e.g., 你好) and tone variations for '一' (yī) and '不' (bù).",
    },
    {
        id: "m-foundational-vocab",
        title: "Core Everyday Vocabulary & Greetings",
        status: "In Progress",
        date: "Phase 2",
        description: "Building an active vocabulary bank of high-frequency words: greetings, pronouns, common verbs, numbers, and basic courtesy expressions.",
    },
    {
        id: "m-sentence-patterns",
        title: "Elementary SVO & Question Structures",
        status: "In Progress",
        date: "Phase 2",
        description: "Forming simple declarative sentences (Subject + Verb + Object) and practicing yes/no question formation using the sentence-final particle '吗' (ma).",
    },
    {
        id: "m-radicals",
        title: "Character Radicals & Stroke Order",
        status: "Upcoming",
        date: "Planned",
        description: "Focusing on identifying the top 50 high-frequency semantic radicals (e.g., 氵 water, 亻 person, 口 mouth, 木 tree) to decode character meaning and memorize stroke sequences.",
    },
    {
        id: "m-graded-reading",
        title: "Graded Sentence & Paragraph Reading",
        status: "Upcoming",
        date: "Planned",
        description: "Advancing to short graded reader passages and contextual listening without relying entirely on Pinyin transcripts.",
    },
];

export const VOCABULARY_COLLECTION = [
    {
        id: "v-nihao",
        hanzi: "你好",
        pinyin: "nǐ hǎo",
        english: "Hello",
        category: "Greetings",
        tones: "3rd + 3rd (Sandhi: 2nd + 3rd)",
        usageNote: "The foundational greeting. When spoken, 'nǐ' shifts from 3rd to 2nd tone before 'hǎo'.",
        example: {
            hanzi: "你好，很高兴认识你！",
            pinyin: "Nǐ hǎo, hěn gāoxìng rènshí nǐ!",
            english: "Hello, very glad to meet you!",
        },
    },
    {
        id: "v-xiexie",
        hanzi: "谢谢",
        pinyin: "xièxie",
        english: "Thank you",
        category: "Courtesy",
        tones: "4th + neutral",
        usageNote: "The second character is pronounced with a light, neutral tone without sharp falling pitch.",
        example: {
            hanzi: "谢谢你的帮助。",
            pinyin: "Xièxie nǐ de bāngzhù.",
            english: "Thank you for your help.",
        },
    },
    {
        id: "v-wo",
        hanzi: "我",
        pinyin: "wǒ",
        english: "I / me",
        category: "Pronouns",
        tones: "3rd tone",
        usageNote: "Fundamental first-person pronoun. Pluralized by adding '们' (wǒmen = we / us).",
        example: {
            hanzi: "我是学生。",
            pinyin: "Wǒ shì xuésheng.",
            english: "I am a student.",
        },
    },
    {
        id: "v-ni",
        hanzi: "你",
        pinyin: "nǐ",
        english: "You",
        category: "Pronouns",
        tones: "3rd tone",
        usageNote: "Second-person singular pronoun. Respectful polite form is '您' (nín).",
        example: {
            hanzi: "你叫什么名字？",
            pinyin: "Nǐ jiào shénme míngzì?",
            english: "What is your name?",
        },
    },
    {
        id: "v-shi",
        hanzi: "是",
        pinyin: "shì",
        english: "To be (am/is/are)",
        category: "Verbs",
        tones: "4th tone",
        usageNote: "Links equational nouns (A is B). Does not link an adjective directly (use '很' instead of '是' for predicates).",
        example: {
            hanzi: "这是我的电脑。",
            pinyin: "Zhè shì wǒ de diànnǎo.",
            english: "This is my computer.",
        },
    },
    {
        id: "v-xuexi",
        hanzi: "学习",
        pinyin: "xuéxí",
        english: "To study / to learn",
        category: "Verbs",
        tones: "2nd + 2nd",
        usageNote: "Often abbreviated to '学' (xué) in casual speech, e.g., 学中文 (learn Chinese).",
        example: {
            hanzi: "我每天学习中文。",
            pinyin: "Wǒ měitiān xuéxí zhōngwén.",
            english: "I study Chinese every day.",
        },
    },
    {
        id: "v-zhongwen",
        hanzi: "中文",
        pinyin: "zhōngwén",
        english: "Chinese language",
        category: "Language",
        tones: "1st + 2nd",
        usageNote: "'Zhōng' (middle/center) + 'wén' (script/language). Often used interchangeably with 汉语 (Hànyǔ).",
        example: {
            hanzi: "中文很有意思。",
            pinyin: "Zhōngwén hěn yǒu yìsi.",
            english: "Chinese is very interesting.",
        },
    },
    {
        id: "v-bu",
        hanzi: "不",
        pinyin: "bù",
        english: "Not / no",
        category: "Adverbs",
        tones: "4th tone (Sandhi: 2nd before 4th)",
        usageNote: "Changes to 2nd tone (bú) when followed by another 4th tone (e.g., 不是 = bú shì).",
        example: {
            hanzi: "我不是老师。",
            pinyin: "Wǒ bú shì lǎoshī.",
            english: "I am not a teacher.",
        },
    },
    {
        id: "v-ma",
        hanzi: "吗",
        pinyin: "ma",
        english: "Question particle",
        category: "Particles",
        tones: "Neutral tone",
        usageNote: "Appended to the end of a statement to turn it into a yes/no question without rearranging word order.",
        example: {
            hanzi: "你忙吗？",
            pinyin: "Nǐ máng ma?",
            english: "Are you busy?",
        },
    },
    {
        id: "v-de",
        hanzi: "的",
        pinyin: "de",
        english: "Possessive / modifier particle",
        category: "Particles",
        tones: "Neutral tone",
        usageNote: "Indicates possession (我的 = my/mine) or links an attribute to a noun (好喝的茶 = delicious tea).",
        example: {
            hanzi: "这是我的书。",
            pinyin: "Zhè shì wǒ de shū.",
            english: "This is my book.",
        },
    },
];

export const GRAMMAR_NOTEBOOK = [
    {
        id: "g-svo",
        title: "Basic Sentence Structure: S + V + O",
        pattern: "Subject + Verb + Object",
        level: "Foundations",
        explanation: "Chinese sentence structure fundamentally mirrors English Subject-Verb-Object order for simple statements. Unlike languages with case inflections or grammatical gender, Chinese verbs do not conjugate based on person or tense.",
        formula: "S (我) + V (学) + O (中文) = 我学中文 (I study Chinese)",
        breakdown: [
            { segment: "我 (wǒ)", role: "Subject (I)" },
            { segment: "学 (xué)", role: "Verb (study)" },
            { segment: "中文 (zhōngwén)", role: "Object (Chinese)" },
        ],
        tip: "Time and place words generally come BEFORE the verb or at the very start of the sentence, never at the very end.",
    },
    {
        id: "g-ma-questions",
        title: "Yes / No Questions with '吗' (ma)",
        pattern: "Statement + 吗？",
        level: "Foundations",
        explanation: "To turn any declarative statement into a yes/no question in Chinese, do not invert subject and auxiliary verb (no 'Do you...?'). Simply attach the neutral particle '吗' to the end of the sentence.",
        formula: "Statement (你好) + 吗？ = 你好吗？ (Are you good / How are you?)",
        breakdown: [
            { segment: "你 (nǐ)", role: "Subject (you)" },
            { segment: "好 (hǎo)", role: "Adjective/Predicate (good)" },
            { segment: "吗 (ma)", role: "Question Particle (?)" },
        ],
        tip: "Never use '吗' when a question already contains an interrogative pronoun like 什么 (what) or 谁 (who).",
    },
    {
        id: "g-de-possession",
        title: "Possession & Modification with '的' (de)",
        pattern: "Noun/Pronoun + 的 + Noun",
        level: "Foundations",
        explanation: "The particle '的' functions like the apostrophe-s ('s) in English. It links a possessor to an object, or an adjective/descriptive phrase to a noun.",
        formula: "我 (I) + 的 + 老师 (teacher) = 我的老师 (My teacher)",
        breakdown: [
            { segment: "我 (wǒ)", role: "Pronoun" },
            { segment: "的 (de)", role: "Structural Particle" },
            { segment: "老师 (lǎoshī)", role: "Noun" },
        ],
        tip: "For close personal relationships (e.g., 我妈妈 my mom, 我家 my home), '的' can be omitted informally.",
    },
    {
        id: "g-bu-negation",
        title: "Negation with '不' (bù)",
        pattern: "Subject + 不 + Verb / Adjective",
        level: "Foundations",
        explanation: "'不' is used to negate present habitual actions, future intentions, and adjectives. For past events or possession of '有' (to have), Chinese uses '没' (méi) instead of '不'.",
        formula: "我 (I) + 不 (not) + 去 (go) = 我不去 (I am not going)",
        breakdown: [
            { segment: "我 (wǒ)", role: "Subject" },
            { segment: "不 (bù)", role: "Negation Adverb" },
            { segment: "去 (qù)", role: "Verb" },
        ],
        tip: "Pronunciation rule: '不' changes to second tone (bú) when followed by a fourth-tone word (e.g., 不是 bú shì, 不要 bú yào).",
    },
];

export const SENTENCE_PRACTICE = [
    {
        id: "s1",
        target: "I am learning Chinese.",
        hanzi: "我在学习中文。",
        pinyin: "Wǒ zài xuéxí zhōngwén.",
        breakdown: [
            { char: "我", pinyin: "wǒ", meaning: "I" },
            { char: "在", pinyin: "zài", meaning: "in the process of (progressive)" },
            { char: "学习", pinyin: "xuéxí", meaning: "to study / learn" },
            { char: "中文", pinyin: "zhōngwén", meaning: "Chinese language" },
        ],
        notes: "'在' acts as an aspect marker indicating an ongoing continuous action, analogous to '-ing' in English.",
    },
    {
        id: "s2",
        target: "What is your name?",
        hanzi: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzì?",
        breakdown: [
            { char: "你", pinyin: "nǐ", meaning: "you" },
            { char: "叫", pinyin: "jiào", meaning: "to be called" },
            { char: "什么", pinyin: "shénme", meaning: "what" },
            { char: "名字", pinyin: "míngzì", meaning: "name" },
        ],
        notes: "Notice question word '什么' stays in the natural object position—no question inversion is required.",
    },
    {
        id: "s3",
        target: "I am a computer applications student.",
        hanzi: "我是计算机系的学生。",
        pinyin: "Wǒ shì jìsuànjī xì de xuésheng.",
        breakdown: [
            { char: "我", pinyin: "wǒ", meaning: "I" },
            { char: "是", pinyin: "shì", meaning: "am" },
            { char: "计算机", pinyin: "jìsuànjī", meaning: "computer" },
            { char: "系", pinyin: "xì", meaning: "department / program" },
            { char: "的", pinyin: "de", meaning: "modifier marker" },
            { char: "学生", pinyin: "xuésheng", meaning: "student" },
        ],
        notes: "Relates directly to Tarun's actual BCA studies (Computer Applications).",
    },
];

export const LISTENING_SPEAKING_PROGRESS = {
    routine: "15-20 minutes daily of audio shadowing, tone pair drills, and pinyin chart repetition.",
    toneDrills: [
        { pair: "1st + 1st", pinyin: "jīntiān (今天)", meaning: "today", tip: "Maintain high, steady pitch across both syllables." },
        { pair: "2nd + 4th", pinyin: "xuéxí (学习) / míngzì (名字)", meaning: "study / name", tip: "Rise smoothly on the first, snap sharply down on the second." },
        { pair: "3rd + 3rd (Sandhi)", pinyin: "nǐ hǎo (你好)", meaning: "hello", tip: "First syllable automatically pronounced in 2nd tone (rising)." },
        { pair: "4th + 1st", pinyin: "diànnǎo (电脑)", meaning: "computer", tip: "Sharp drop followed by steady high tone." },
    ],
    speakingNotes: [
        "Focusing on distinguishing retroflex initials (zh, ch, sh, r) with curled tongue tip from dental sibilants (z, c, s).",
        "Palatal sounds (j, q, x) require tongue flat against the hard palate, keeping lips spread.",
        "Treating tones as an integral part of the word rather than an ornament: wrong tone = different word.",
    ],
};

export const LEARNING_RESOURCES = [
    {
        id: "res-pinyin-chart",
        name: "Desk Pinyin Chart Reference",
        type: "Phonetics Chart",
        description: "Comprehensive initials and finals reference grid for systematic daily pronunciation drills.",
        status: "Active Daily Tool",
    },
    {
        id: "res-pleco",
        name: "Pleco Chinese Dictionary",
        type: "Software / Dictionary",
        description: "Essential offline character lookup, radical breakdown, stroke order diagrams, and audio examples.",
        status: "Primary Reference",
    },
    {
        id: "res-anki",
        name: "Anki Spaced Repetition (SRS)",
        type: "Memory System",
        description: "Custom flashcards reinforcing character recall, Pinyin spelling, and audio recognition intervals.",
        status: "Active Daily Tool",
    },
    {
        id: "res-podcasts",
        name: "Slow Chinese Audio & Pronunciation Guides",
        type: "Audio Guides",
        description: "Listening practice focusing on clean, native speaker articulation at manageable speeds.",
        status: "Supplementary",
    },
];
