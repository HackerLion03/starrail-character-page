
// 全局变量：当前选中的角色，当前技能等级
let currentCharacter = null;
// 存储每个技能的独立等级（key：技能索引，value：当前等级），切换角色自动重置
let skillIndependentLevels = {};
// 全局筛选状态
let currentFilter = {
  type: "all", // 当前选中的属性
  path: "all"   // 当前选中的命途
};
let filteredCharacters = [...characters];

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  bindFilterEvents();
  bindDetailEvents(); // 绑定详情页事件
});

// 绑定按钮筛选事件
function bindFilterEvents() {
  // 绑定属性筛选按钮
  const typeBtns = document.querySelectorAll(".type-btn");
  typeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // 移除所有属性按钮的选中态
      typeBtns.forEach(b => b.classList.remove("active"));
      // 给当前按钮加选中态
      btn.classList.add("active");
      // 更新筛选状态
      currentFilter.type = btn.dataset.type;
      // 重新筛选并渲染
      filterCharacters();
    });
  });

  // 绑定命途筛选按钮
  const pathBtns = document.querySelectorAll(".path-btn");
  pathBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // 移除所有职业按钮的选中态
      pathBtns.forEach(b => b.classList.remove("active"));
      // 给当前按钮加选中态
      btn.classList.add("active");
      // 更新筛选状态
      currentFilter.path = btn.dataset.path;
      // 重新筛选并渲染
      filterCharacters();
    });
  });

  // 绑定重置筛选按钮
  document.getElementById("reset-filter").addEventListener("click", () => {
    // 重置筛选状态
    currentFilter = { type: "all", path: "all" };
    // 恢复所有按钮选中态（全部按钮）
    document.querySelector(".type-btn[data-type='all']").classList.add("active");
    document.querySelector(".path-btn[data-path='all']").classList.add("active");
    // 移除其他按钮选中态
    document.querySelectorAll(".type-btn:not([data-type='all'])").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".path-btn:not([data-path='all'])").forEach(b => b.classList.remove("active"));
    // 重新渲染
    filterCharacters();
  });
}

// 绑定详情页事件（返回按钮）
function bindDetailEvents() {
  // 返回列表按钮
  document.getElementById("back-btn").addEventListener("click", () => {
    // 隐藏详情页，显示列表
    document.getElementById("character-detail").classList.add("hidden");
    document.getElementById("character-list").classList.remove("hidden");
    skillIndependentLevels = {};  
});
}

// 筛选角色逻辑
function filterCharacters() {
  filteredCharacters = characters.filter(char => {
    // 属性筛选：all则匹配所有，否则匹配对应属性
    const matchtype = currentFilter.type === "all" || char.type === currentFilter.type;
    // 职业筛选：all则匹配所有，否则匹配对应职业
    const matchpath = currentFilter.path === "all" || char.path === currentFilter.path;
    // 同时满足属性和职业条件
    return matchtype && matchpath;
  });
  // 重新渲染
  renderCharacters();
}

// 渲染角色列表
function renderCharacters() {
  const list = document.getElementById("character-list");
  list.innerHTML = "";

  // 无数据提示
  if (filteredCharacters.length === 0) {
    list.innerHTML = '暂无符合条件的角色';
    return;
  }

  // 渲染角色卡片
  filteredCharacters.forEach(char => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.setAttribute("data-id", char.id);

    // 标签样式类
    const typeTagClass = `tag type-${char.type === "物理" ? "physical" : char.type === "火" ? "fire" 
            : char.type === "风" ? "wind" : char.type === "雷" ? "lightning" : char.type === "冰" ? "ice" 
            : char.type === "量子" ? "quantum": "imaginary"}`;
    const pathTagClass = `tag path-${char.path === "毁灭" ? "destruction" : char.path === "巡猎" ? "the-hunt" 
            : char.path === "智识" ? "erudition" : char.path === "同谐" ? "harmony" : char.path === "虚无" ? "nihility" 
            : char.path === "存护" ? "preservation": char.path === "丰饶" ? "abundance": char.path === "记忆" ? "remembrance": "elation"}`;

    // 卡片内容 展示角色图片，名字，属性，命途
    card.innerHTML = `
      <div class="character-img">
        <img src="${char.img}" alt="${char.name}">
      </div>
      <h3 class="character-name">${char.name}</h3>
      <div class="character-tags">
        <span class="${typeTagClass}">${char.type}</span>
        <span class="${pathTagClass}">${char.path}</span>
      </div>
    `;

    // 点击卡片查看详情（可选）
    card.addEventListener("click", () => {
         // 重置技能独立等级：每个技能默认1级，存入对象（key为技能索引）
        skillIndependentLevels = char.skills.reduce((obj, _, index) => {
          obj[index] = 1;
          return obj;
        }, {});
        showCharacterDetail(char);
    });
    list.appendChild(card);
  });
}

// 显示角色详情页
function showCharacterDetail(char) {

  // 隐藏列表，显示详情页
  document.getElementById("character-list").classList.add("hidden");
  document.getElementById("character-detail").classList.remove("hidden");

  currentCharacter = char;
  // 填充详情页内容
  document.getElementById("detail-name").textContent = char.name;
  document.getElementById("detail-img").src = char.img;
  document.getElementById("detail-img").alt = char.name;
  document.getElementById("detail-desc-text").textContent = char.desc;

  // 填充属性/命途标签
  const typeTag = document.getElementById("detail-type");
  typeTag.className = `tag type-${char.type === "物理" ? "physical" : char.type === "火" ? "fire" 
            : char.type === "风" ? "wind" : char.type === "雷" ? "lightning" : char.type === "冰" ? "ice" 
            : char.type === "量子" ? "quantum": "imaginary"}`;
  typeTag.textContent = `${char.type}`;
  
  const pathTag = document.getElementById("detail-path");
  pathTag.className = `tag path-${char.path === "毁灭" ? "destruction" : char.path === "巡猎" ? "the-hunt" 
            : char.path === "智识" ? "erudition" : char.path === "虚无" ? "nihility" : char.path === "存护" ? "preservation"
            : char.path === "丰饶" ? "abundance": char.path === "记忆" ? "remembrance": "elation"}`;
  pathTag.textContent = `${char.path}`;

  // 填充固定80级属性数值（取消角色等级条，直接显示最终值）
  document.getElementById("attack-value").textContent = char.stats.attack;
  document.getElementById("defense-value").textContent = char.stats.defense;
  document.getElementById("hp-value").textContent = char.stats.hp;
  document.getElementById("speed-value").textContent = char.stats.speed;

  
  // 渲染技能列表（带成长数值，适配不同等级范围）
  renderSkills(char);
}

// 渲染技能列表（核心：根据当前技能等级+技能自身等级范围，计算并替换成长数值）
function renderSkills(char) {
  const skillsList = document.getElementById("detail-skills-list");
  skillsList.innerHTML = "";

 // 遍历每个技能，单独渲染：技能名称、等级范围、独立滑块、技能描述
  char.skills.forEach((skill, skillIndex) => {
    const li = document.createElement("li");
    li.className = "skill-item"; // 给技能项添加类名，方便样式控制
    const [minLevel, maxLevel] = skill.levelRange; // 当前技能的等级范围
    const currentLevel = skillIndependentLevels[skillIndex]; // 当前技能的独立等级
    // 计算当前技能等级对应的成长数值
    const growthValues = calculateSkillGrowth(skill.growth, skill.levelRange, currentLevel);
    // 替换技能描述中的占位符
    let skillDesc = skill.desc;
    for (const [key, value] of Object.entries(growthValues)) {
      skillDesc = skillDesc.replace(`{${key}}`, value);
    }
    // 等级范围提示文本
    const levelRangeTip = `（${minLevel}-${maxLevel}级）`;

    // 技能项内容：包含独立滑块、等级显示、技能名称和描述（适配原始风格）
    li.innerHTML = `
    <div class="skill-header">
    <strong class="skill-name">${skill.name}</strong>
    <span class="skill-level-range">${levelRangeTip}</span>
    </div>    
    <div class="skill-level-control">
    <span class="skill-current-level">当前等级：${currentLevel}</span>
    <input type="range" class="skill-slider" data-skill-index="${skillIndex}" 
           min="${minLevel}" max="${maxLevel}" value="${currentLevel}" step="1">
  </div>
  <div class="skill-desc">${skillDesc}</div>
`;
skillsList.appendChild(li);
  });
    // 确保DOM渲染完成后再绑定事件
  setTimeout(() =>{
    // 绑定所有技能滑块的事件（每个滑块独立控制对应技能的等级）
  bindSkillSlidersEvent();
},0);  
}

// 绑定所有技能独立滑块的事件（核心：每个滑块仅控制对应技能的等级，实时更新）
function bindSkillSlidersEvent() {
  const skillSliders = document.querySelectorAll(".skill-slider");
  skillSliders.forEach(slider => {
    slider.addEventListener("input", () => {
      const skillIndex = parseInt(slider.dataset.skillIndex); // 获取当前滑块对应的技能索引
      const newLevel = parseInt(slider.value); // 新的技能等级
      // 更新该技能的独立等级
      skillIndependentLevels[skillIndex] = newLevel;
      // 更新当前滑块旁边的等级显示
      slider.parentElement.querySelector(".skill-current-level").textContent = `当前等级：${newLevel}`;
      // 重新渲染当前技能的描述（仅更新当前技能，提升性能）
      updateSingleSkillDesc(skillIndex);
    });
  });
}

// 单独更新单个技能的描述（避免重新渲染所有技能，优化交互）
function updateSingleSkillDesc(skillIndex) {
  const char = currentCharacter;
  const skill = char.skills[skillIndex];
  const skillItem = document.querySelectorAll(".skill-item")[skillIndex];
  const currentLevel = skillIndependentLevels[skillIndex];
  // 重新计算当前等级的成长数值
  const growthValues = calculateSkillGrowth(skill.growth, skill.levelRange, currentLevel);
  // 重新替换占位符
  let skillDesc = skill.desc;
  for (const [key, value] of Object.entries(growthValues)) {
    skillDesc = skillDesc.replace(`{${key}}`, value);
  }
  // 关键：技能描述用innerHTML，解析<br/>换行，确保拉动进度条后换行正常显示
  skillItem.querySelector(".skill-desc").innerHTML = skillDesc;
}

// 计算技能成长数值（修改：支持传入单个技能的当前等级，适配独立滑块）
// levelRange：技能等级范围，currentLevel：该技能的当前独立等级
function calculateSkillGrowth(growth, levelRange, currentLevel) {
  const growthValues = {};
  const [minLevel, maxLevel] = levelRange;
  // 限制当前等级在技能的范围内（防止异常）
  const clampedLevel = Math.max(minLevel, Math.min(currentLevel, maxLevel));

  for (const [key, [min, max]] of Object.entries(growth)) {
    let value;
    // 仅对15级范围技能（levelRange[1,15]）应用三段线性梯度，10级技能维持原有逻辑
    if (minLevel === 1 && maxLevel === 15) {
      // 三段线性公式：1-6级10→15、6-10级15→20、10-15级20→25
      if (clampedLevel >= 1 && clampedLevel <= 6) {
        value = min + ((min*1.5)-min) * (clampedLevel - 1)/5; // 1-6级，每级递增1
      } else if (clampedLevel > 6 && clampedLevel <= 10) {
        value = (min*1.5) + ((min*2)-(min*1.5)) * (clampedLevel - 6)/4; // 6-10级，每级递增1.25
      } else {
        value = (min*2) + (max-(min*2)) * (clampedLevel - 10)/5; // 10-15级，每级递增1
      }
    } else {
      // 10级范围技能，维持原有线性计算逻辑
      const levelDifference = maxLevel - minLevel;
      value = min + (max - min) * (clampedLevel - minLevel) / levelDifference;
    }
    // 数值取整，贴合游戏显示习惯
    growthValues[key] = value;
  }
  return growthValues;
}
