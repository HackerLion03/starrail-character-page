const characters3_1 = [  
  {
    id: 68,
    name: "白厄",
    type: "物理",
    path: "毁灭",
    img: "images/白厄立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
    }
  ]
  },
  {
    id: 67,
    name: "赛飞儿",
    type: "量子",
    path: "虚无",
    img: "images/赛飞儿立绘.jpg",
    stats: {
      attack: Math.round(465.7), // 80级攻击力
      defense: Math.round(654.88), // 80级防御力
      hp: Math.round(1242) // 80级生命值
    },
    desc: "",
    skills: [
      { name: "普攻 - 雀翎鸣镝，过招有喜", 
        levelRange:[1,10],
        growth:{
            mainDamage:[45,126],
            adjacentDamage:[15,42]
        },
        desc: ""
       },
      { name: "战技 - 十方光映，万法皆明", levelRange:[1,15],
        growth: {
            joyBoost: [10, 25]      // 欢愉度提高比例（1级10%，15级30%）
        },
        desc: ""
       },
      { name: "终结技 - 霓裳铁羽，六爻皆吉", levelRange:[1,15], 
        growth: {
            penetration: [10, 25]   // 全属性抗性穿透（1级10%，15级25%）
        },
        desc: ""
       },
       {name: "天赋 - 屏开千光，遍观自在", levelRange:[1,15],
        growth:{
        joydamage: [10, 25] //欢愉伤害倍率 1级 10，15级25
        },
        desc:""
       }
    ],
    traces: [
        { name:"",
            desc:""
        },
        { name: "",
            desc: "",
        },
        { name:"",
            desc:""
        }
    ],

    growStats: [
        { name: "", value: "%" },
        { name: "", value: "%" },
        { name: "", value: "%" }
    ],

    constellation: [
    {
      img: "images/星魂1.webp", 
      name: "",
      desc: ""
    },
    {
      img: "images/星魂2.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂3.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂4.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂5.webp",
      name: "",
      desc: ""
    },
    {
      img: "images/星魂6.webp",
      name: "",
      desc: ""
    }
  ]
  },
]