const proteinIcon = "protein.png"; // Use your local image file

// Static protein database (grams per 100g)
const proteinData = {
  "egg": 13,
  "chicken": 27,
  "chicken breast": 31,
  "beef": 26,
  "fish": 22,
  "salmon": 20,
  "tuna": 29,
  "pork": 27,
  "lamb": 25,
  "tofu": 8,
  "paneer": 18,
  "cheese": 25,
  "milk": 3.4,
  "yogurt": 10,
  "almonds": 21,
  "peanut butter": 25,
  "lentils": 9,
  "beans": 8,
  "peas": 5,
  "soybeans": 36,
  "shrimp": 24,
  "turkey": 29,
  "duck": 27,
  "quinoa": 4,
  "oats": 13,
  "rice": 2.7,
  "wheat": 13,
  "cashews": 18,
  "walnuts": 15,
  "hazelnuts": 15,
  "pumpkin seeds": 19,
  "chia seeds": 17,
  "sunflower seeds": 21,
  "broccoli": 2.8,
  "spinach": 2.9,
  "potato": 2,
  "sweet potato": 1.6,
  "carrot": 0.9,
  "apple": 0.3,
  "banana": 1.1,
  "orange": 0.9,
  "grapes": 0.6,
  "meat": 26 // generic value
};

function getProtein(food) {
  let key = food.toLowerCase().trim();
  if (!(key in proteinData) && key.endsWith('s')) {
    key = key.slice(0, -1);
  }
  return proteinData[key] ?? 0;
}

function renderIcons(foodArr) {
  const iconsDiv = document.getElementById('icons');
  iconsDiv.innerHTML = '';
  foodArr.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'food-item';
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', `${item.name}, ${item.protein} grams of protein per 100g`);
    div.innerHTML = `<img src="${proteinIcon}" alt="protein icon"><div class="food-label">${item.name}<br>${item.protein}g</div><div class="tooltip">${item.name}: ${item.protein}g protein/100g</div>`;
    iconsDiv.appendChild(div);
    setTimeout(() => {
      div.classList.add('animated');
      setTimeout(() => div.classList.remove('animated'), 700);
    }, idx * 60);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(arr, render) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = await mergeSort(arr.slice(0, mid), render);
  const right = await mergeSort(arr.slice(mid), render);
  return await merge(left, right, render);
}

async function merge(left, right, render) {
  let result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i].protein > right[j].protein) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
    render(result.concat(left.slice(i)).concat(right.slice(j)));
    await sleep(700);
  }
  result = result.concat(left.slice(i)).concat(right.slice(j));
  render(result);
  await sleep(700);
  return result;
}

function showError(msg) {
  document.getElementById('error-msg').textContent = msg;
}

function clearError() {
  document.getElementById('error-msg').textContent = '';
}

window.startSort = async function() {
  clearError();
  const input = document.getElementById('food-input').value;
  if (!input.trim()) {
    showError('Please enter at least one food item.');
    return;
  }
  const foods = input.split(',').map(f => f.trim()).filter(f => f);
  if (foods.length === 0) {
    showError('Please enter valid food items.');
    return;
  }
  const foodArr = foods.map(name => ({
    name,
    protein: getProtein(name)
  }));
  renderIcons(foodArr);
  const sorted = await mergeSort(foodArr, renderIcons);
  document.getElementById('sorted-list').innerText =
    "Sorted: " + sorted.map(f => f.name).join(', ');
};

document.getElementById('food-form').onsubmit = function(e) {
  e.preventDefault();
  window.startSort();
};

document.getElementById('theme-toggle').onclick = function() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  this.textContent = isDark ? '🌙' : '☀️';
}; 