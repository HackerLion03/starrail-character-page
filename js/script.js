const characters = [...characters4, ...characters3];
let currentCharacter = null;
let skillIndependentLevels = {};

let currentFilter = {
  type: "all",
  path: "all"
};
let filteredCharacters = [...characters];

document.addEventListener("DOMContentLoaded", () => {
  renderCharacters();
  bindFilterEvents();
  bindDetailEvents();
});

function bindFilterEvents() {
  const typeBtns = document.querySelectorAll(".type-btn");
  typeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      typeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter.type = btn.dataset.type;
      filterCharacters();
    });
  });

  const pathBtns = document.querySelectorAll(".path-btn");
  pathBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      pathBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter.path = btn.dataset.path;
      filterCharacters();
    });
  });

  document.getElementById("reset-filter").addEventListener("click", () => {
    currentFilter = { type: "all", path: "all" };
    document.querySelector(".type-btn[data-type='all']").classList.add("active");
    document.querySelector(".path-btn[data-path='all']").classList.add("active");
    filterCharacters();
  });
}

function bindDetailEvents() {
  document.getElementById("back-btn").addEventListener("click", () => {
    document.getElementById("character-detail").classList.add("hidden");
    document.getElementById("character-list").classList.remove("hidden");
    skillIndependentLevels = {};
  });
}

function filterCharacters() {
  filteredCharacters = characters.filter(char => {
    const matchType = currentFilter.type === "all" || char.type === currentFilter.type;
    const matchPath = currentFilter.path === "all" || char.path === currentFilter.path;
    return matchType && matchPath;
  });
  renderCharacters();
}

function renderCharacters() {
  const list = document.getElementById("character-list");
  list.innerHTML = "";

  if (filteredCharacters.length === 0) {
    list.innerHTML = '<div class="empty-tip">暂无符合条件的角色</div>';
    return;
  }

  filteredCharacters.forEach(char => {
    const card = document.createElement("div");
    card.className = "character-card";

    const typeTagClass = `tag type-${char.type === "物理" ? "physical" : char.type === "火" ? "fire"
      : char.type === "风" ? "wind" : char.type === "雷" ? "lightning" : char.type === "冰" ? "ice"
        : char.type === "量子" ? "quantum" : "imaginary"}`;

    const pathTagClass = `tag path-${char.path === "毁灭" ? "destruction" : char.path === "巡猎" ? "the-hunt"
      : char.path === "智识" ? "erudition" : char.path === "同谐" ? "harmony" : char.path === "虚无" ? "nihility"
        : char.path === "存护" ? "preservation" : char.path === "丰饶" ? "abundance" : char.path === "记忆" ? "remembrance" : "elation"}`;

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

    card.addEventListener("click", () => {
      skillIndependentLevels = char.skills.reduce((obj, _, i) => (obj[i] = 1, obj), {});
      showCharacterDetail(char);
    });
    list.appendChild(card);
  });
}

function showCharacterDetail(char) {
  document.getElementById("character-list").classList.add("hidden");
  document.getElementById("character-detail").classList.remove("hidden");
  currentCharacter = char;

  document.getElementById("detail-name").textContent = char.name;
  document.getElementById("detail-img").src = char.img;
  document.getElementById("detail-desc-text").textContent = char.desc;

  const typeTag = document.getElementById("detail-type");
  typeTag.className = `tag type-${char.type === "物理" ? "physical" : char.type === "火" ? "fire"
    : char.type === "风" ? "wind" : char.type === "雷" ? "lightning" : char.type === "冰" ? "ice"
      : char.type === "量子" ? "quantum" : "imaginary"}`;
  typeTag.textContent = char.type;

  const pathTag = document.getElementById("detail-path");
  pathTag.className = `tag path-${char.path === "毁灭" ? "destruction" : char.path === "巡猎" ? "the-hunt"
    : char.path === "智识" ? "erudition" : char.path === "同谐" ? "harmony" : char.path === "虚无" ? "nihility"
      : char.path === "存护" ? "preservation" : char.path === "丰饶" ? "abundance" : char.path === "记忆" ? "remembrance" : "elation"}`;
  pathTag.textContent = char.path;

  document.getElementById("attack-value").textContent = char.stats.attack;
  document.getElementById("defense-value").textContent = char.stats.defense;
  document.getElementById("hp-value").textContent = char.stats.hp;
  document.getElementById("speed-value").textContent = char.stats.speed;
  document.getElementById("energy-value").textContent = char.stats.energy;


  renderSkills(char);

  const detailRight = document.querySelector(".detail-right");
  detailRight.classList.remove("color-fire", "color-ice", "color-lightning", "color-wind", "color-physical", "color-quantum", "color-imaginary");

  switch (char.type) {
    case "火": detailRight.classList.add("color-fire"); break;
    case "冰": detailRight.classList.add("color-ice"); break;
    case "雷": detailRight.classList.add("color-lightning"); break;
    case "风": detailRight.classList.add("color-wind"); break;
    case "物理": detailRight.classList.add("color-physical"); break;
    case "量子": detailRight.classList.add("color-quantum"); break;
    case "虚数": detailRight.classList.add("color-imaginary"); break;
  }
}

function renderSkills(char) {
  const list = document.getElementById("detail-skills-list");
  list.innerHTML = "";

  char.skills.forEach((skill, i) => {
    const li = document.createElement("li");
    li.className = "skill-item";
    const [min, max] = skill.levelRange;
    const level = skillIndependentLevels[i];
    const values = calculateSkillGrowth(skill.growth, skill.levelRange, level, skill);

    function format(t) {
      if (!t) return "";
      Object.entries(values).forEach(([k, v]) => t = t.replaceAll(`{${k}}`, `<span class="skill-value">${v.toFixed(2)}</span>`));
      return t;
    }

    // ========== 自动隐藏秘技等级条 ==========
    const showLevelBar = min !== max;
    const levelText = showLevelBar ? `（${min}-${max}级）` : "";

    li.innerHTML = `
      <div class="skill-header">
        <strong class="skill-name">${skill.name}</strong>
        <span class="skill-level-range">${levelText}</span>
      </div>

      ${showLevelBar ? `
      <div class="skill-level-control">
        <span class="skill-current-level">当前等级：${level}</span>
        <input type="range" class="skill-slider" data-skill-index="${i}" min="${min}" max="${max}" value="${level}">
      </div>
      ` : ""}

      <div class="skill-desc">
        <div class="desc-short">${format(skill.simpleDesc || skill.desc)}</div>
        <div class="desc-detail">${format(skill.desc)}</div>
        <button class="toggle-btn">查看详情</button>
      </div>
    `;
    list.appendChild(li);
  });

  setTimeout(bindSkillSlidersEvent, 0);

  // 行迹
  if (char.traces) {
    document.getElementById("trace1").innerHTML = `<div class="trace-name">${char.traces[0].name}</div><div class="trace-desc">${char.traces[0].desc}</div>`;
    document.getElementById("trace2").innerHTML = `<div class="trace-name">${char.traces[1].name}</div><div class="trace-desc">${char.traces[1].desc}</div>`;
    document.getElementById("trace3").innerHTML = `<div class="trace-name">${char.traces[2].name}</div><div class="trace-desc">${char.traces[2].desc}</div>`;
  }

  // 成长属性
  const growGrid = document.getElementById("grow-stats-grid");
  growGrid.innerHTML = "";

  if (char.growStats && char.growStats.length > 0) {
    char.growStats.forEach(item => {
      const div = document.createElement("div");
      div.className = "trace-card";
      div.innerHTML = `
        <div class="trace-name">${item.name}</div>
        <div class="trace-desc">${item.value}</div>
      `;
      growGrid.appendChild(div);
    });
  }

  // 星魂
  const consSection = document.querySelector(".constellation-section");
  const consList = document.getElementById("constellation-list");
  consList.innerHTML = "";

  if (char.constellation?.length > 0) {
    consSection.style.display = "block";
    char.constellation.forEach((c, idx) => {
      const item = document.createElement("li");
      item.className = "constellation-item";
      item.innerHTML = `
        <div class="constellation-img"><img src="${c.img}" alt=""></div>
        <div class="constellation-content">
          <div class="constellation-name">${c.name}</div>
          <div class="constellation-desc">${c.desc}</div>
        </div>
      `;
      consList.appendChild(item);
    });
  } else {
    consSection.style.display = "none";
  }
}

function bindSkillSlidersEvent() {
  document.querySelectorAll(".skill-slider").forEach(s => {
    s.addEventListener("input", e => {
      const i = +e.target.dataset.skillIndex;
      skillIndependentLevels[i] = +e.target.value;
      e.target.parentElement.querySelector(".skill-current-level").textContent = `当前等级：${e.target.value}`;
      updateSingleSkillDesc(i);
    });
  });
}

function updateSingleSkillDesc(i) {
  const skill = currentCharacter.skills[i];
  const item = document.querySelectorAll(".skill-item")[i];
  const level = skillIndependentLevels[i];
  const values = calculateSkillGrowth(skill.growth, skill.levelRange, level, skill);

  function format(t) {
    if (!t) return "";
    Object.entries(values).forEach(([k, v]) => t = t.replaceAll(`{${k}}`, `<span class="skill-value">${v.toFixed(2)}</span>`));
    return t;
  }

  item.querySelector(".desc-short").innerHTML = format(skill.simpleDesc || skill.desc);
  item.querySelector(".desc-detail").innerHTML = format(skill.desc);
}

function calculateSkillGrowth(growth, range, level, skill) {
  const res = {};
  const [minL, maxL] = range;
  const curr = Math.max(minL, Math.min(maxL, level));
  if (!growth) return res;

  if (skill && skill.customCalc) {
    return skill.customCalc(level, curr);
  }

  for (const [k, [min, max]] of Object.entries(growth)) {
    let val;
    if (minL === 1 && maxL === 15) {
      if (curr <= 6) val = min + (min * 0.5) * (curr - 1) / 5;
      else if (curr <= 10) val = min * 1.5 + (min * 0.5) * (curr - 6) / 4;
      else val = min * 2 + (max - min * 2) * (curr - 10) / 5;
    } else {
      val = min + (max - min) * (curr - minL) / (maxL - minL);
    }
    res[k] = val;
  }
  return res;
}

document.addEventListener("click", e => {
  if (!e.target.classList.contains("toggle-btn")) return;
  const btn = e.target;
  const short = btn.parentElement.querySelector(".desc-short");
  const detail = btn.parentElement.querySelector(".desc-detail");

  if (detail.style.display !== "block") {
    short.style.display = "none";
    detail.style.display = "block";
    btn.textContent = "收起详情";
  } else {
    short.style.display = "block";
    detail.style.display = "none";
    btn.textContent = "查看详情";
  }
});