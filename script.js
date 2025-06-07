// Configuração do tsParticles
document.addEventListener("DOMContentLoaded", function() {
    tsParticles.load("tsparticles", {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#8a5fb9", "#c4a5e5", "#ffd700", "#5a3a7e"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 5,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true,
        background: {
            color: "#1e1a2b",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        }
    });
});

// Dados dos baús
const chestData = {
    "Crystal": [
        "Aura's Tear", "Protolupus Shard", "Rudolf Shard", "Seal of Morra", "Hand of Light", 
        "Phantom", "Barbarian Costume", "Kitty Costume", "Slimmy (Pet)", "Croaker (Pet)", 
        "VE-Droid (Pet)", "Tyrex", "Carcaron", "Vulture", "Royal Blessing x3", 
        "Royal Blessing x7", "Royal Blessing x14", "Black Philosopher's Stone", 
        "White Philosopher's Stone", "Red Philosopher's Stone", "Rune of Preservation", 
        "Arkonite Wax", "Fish Oil", "Infanta's Ticket", "Summoning Stone", 
        "Large Trading Spot", "Four-Leaf Clover", "Mount Feed", "Festive Cake", 
        "Herbal Tea", "Sparkling Wine", "Soda", "Cotton Candy", "Pumpkin Pie", 
        "Pumpkin Lemonade", "Elixir of Might", "Elixir of the Pale Moon", 
        "Elixir of Luck", "Elixir of the Angry Dragon", "Elixir of Vitality",
        "Elixir of the Treasure Seeker", "Elixir of the Royal Guard", 
        "Elixir of the Wise Dragon", "Elixir of Blind Fury", "Red Coral", 
        "Black Coral", "Diamond", "White Pearl", "Emerald", "Morion", 
        "Sapphire", "Black Pearl", "Seal of Terror", "Seal of the Wanderer", 
        "Seal of the Druid", "Seal of the Devourer", "Seal of the Pharaoh", 
        "Seal of the Dead", "Troll Potion", "Curare", "Herbal Chewing Gum"
    ],
    "Golden": [
        "Aura's Tear", "Protolupus Shard", "Rudolf Shard", "Slimmy (Pet)", 
        "Croaker (Pet)", "VE-Droid (Pet)", "Royal Blessing x3", "Royal Blessing x7", 
        "Black Philosopher's Stone", "White Philosopher's Stone", "Red Philosopher's Stone", 
        "Rune of Preservation", "Arkonite Wax", "Fish Oil", "Infanta's Ticket", 
        "Summoning Stone", "Large Trading Spot", "Four-Leaf Clover", "Mount Feed", 
        "Festive Cake", "Herbal Tea", "Sparkling Wine", "Soda", "Cotton Candy", 
        "Pumpkin Pie", "Pumpkin Lemonade", "Elixir of Might", "Elixir of the Pale Moon", 
        "Elixir of Luck", "Elixir of the Angry Dragon", "Elixir of Vitality",
        "Elixir of the Treasure Seeker", "Elixir of the Royal Guard", 
        "Elixir of the Wise Dragon", "Elixir of Blind Fury", "Red Coral", 
        "Black Coral", "Diamond", "White Pearl", "Emerald", "Morion", 
        "Sapphire", "Black Pearl", "Seal of Terror", "Seal of the Wanderer", 
        "Seal of the Druid", "Seal of the Devourer", "Seal of the Pharaoh", 
        "Seal of the Dead", "Troll Potion", "Curare", "Herbal Chewing Gum"
    ],
    "Iron": [
        "Aura's Tear", "Protolupus Shard", "Rudolf Shard", "Slimmy (Pet)", 
        "Croaker (Pet)", "Royal Blessing x3", "Black Philosopher's Stone", 
        "Rune of Preservation", "Arkonite Wax", "Fish Oil", "Infanta's Ticket", 
        "Summoning Stone", "Large Trading Spot", "Four-Leaf Clover", "Mount Feed", 
        "Festive Cake", "Herbal Tea", "Sparkling Wine", "Soda", "Cotton Candy", 
        "Pumpkin Pie", "Pumpkin Lemonade", "Elixir of Might", "Elixir of the Pale Moon", 
        "Elixir of Luck", "Elixir of the Angry Dragon", "Elixir of Vitality",
        "Elixir of the Treasure Seeker", "Elixir of the Royal Guard", 
        "Elixir of the Wise Dragon", "Elixir of Blind Fury", "Red Coral", 
        "Black Coral", "Diamond", "White Pearl", "Emerald", "Morion", 
        "Sapphire", "Black Pearl", "Seal of Terror", "Seal of the Wanderer", 
        "Seal of the Druid", "Seal of the Devourer", "Seal of the Pharaoh", 
        "Seal of the Dead", "Troll Potion", "Curare", "Herbal Chewing Gum"
    ]
};

// Definir raridades dos itens
const itemRarity = {
    "common": {
        "items": [
            "Fish Oil", "Infanta's Ticket", "Summoning Stone", "Large Trading Spot", 
            "Four-Leaf Clover", "Mount Feed", "Festive Cake", "Herbal Tea", 
            "Sparkling Wine", "Soda", "Cotton Candy", "Pumpkin Pie", 
            "Pumpkin Lemonade", "Troll Potion", "Curare", "Herbal Chewing Gum"
        ],
        "weight": 60,
        "maxQuantity": 6
    },
    "uncommon": {
        "items": [
            "Black Philosopher's Stone", "White Philosopher's Stone", 
            "Red Philosopher's Stone", "Rune of Preservation", "Arkonite Wax"
        ],
        "weight": 25,
        "maxQuantity": 4
    },
    "rare": {
        "items": [
            "Royal Blessing x3", "Royal Blessing x7", "Royal Blessing x14"
        ],
        "weight": 10,
        "maxQuantity": 3
    },
    "epic": {
        "items": [
            "Seal of Morra", "Hand of Light", "Phantom",
            "Barbarian Costume", "Kitty Costume", "Slimmy (Pet)", 
            "Croaker (Pet)", "VE-Droid (Pet)", "Tyrex", 
            "Carcaron", "Vulture"
        ],
        "weight": 4,
        "maxQuantity": 2
    },
    "legendary": {
        "items": [
            "Aura's Tear", "Protolupus Shard", "Rudolf Shard"
        ],
        "weight": 1,
        "maxQuantity": 1
    }
};

// Preços padrão por raridade
const defaultPrices = {
    "common": 50,
    "uncommon": 200,
    "rare": 500,
    "epic": 2000,
    "legendary": 10000
};

// Variáveis globais
let itemPrices = {};
let currentSave = null;
const saveModal = new bootstrap.Modal(document.getElementById('saveModal'));
const loadModal = new bootstrap.Modal(document.getElementById('loadModal'));

// Inicializar a aplicação
document.addEventListener("DOMContentLoaded", function() {
    initializeItems();
    setupEventListeners();
    loadSavedPrices();
    
    // Adicionar efeito de magia nos cartões
    setTimeout(addMagicEffects, 1000);
});

// Efeito de magia nos cartões
function addMagicEffects() {
    const cards = document.querySelectorAll(".chest-card, .results-card");
    cards.forEach(card => {
        card.classList.add("magic-glow");
    });
}

// Inicializar itens para cada tipo de baú
function initializeItems() {
    for (const [chestType, items] of Object.entries(chestData)) {
        const container = document.getElementById(`${chestType.toLowerCase()}Items`);
        
        // Agrupar itens por raridade
        const itemsByRarity = {};
        for (const rarity in itemRarity) {
            itemsByRarity[rarity] = [];
            for (const item of items) {
                if (itemRarity[rarity].items.includes(item)) {
                    itemsByRarity[rarity].push(item);
                }
            }
        }
        
        // Criar elementos para cada raridade
        for (const [rarity, rarityItems] of Object.entries(itemsByRarity)) {
            if (rarityItems.length === 0) continue;
            
            // Cabeçalho de raridade
            const rarityHeader = document.createElement("div");
            rarityHeader.className = "rarity-header";
            rarityHeader.innerHTML = `<h5 class="${rarity}">${rarity.toUpperCase()} ITEMS (Max Qty: ${itemRarity[rarity].maxQuantity})</h5>`;
            container.appendChild(rarityHeader);
            
            // Itens desta raridade
            for (const item of rarityItems) {
                const itemRow = document.createElement("div");
                itemRow.className = "item-row";
                
                const itemName = document.createElement("div");
                itemName.className = `item-name ${rarity}`;
                itemName.textContent = item;
                
                const itemPrice = document.createElement("div");
                itemPrice.className = "item-price";
                
                const priceInput = document.createElement("input");
                priceInput.type = "number";
                priceInput.className = "form-control form-control-sm";
                priceInput.placeholder = "0.00";
                priceInput.step = "0.01";
                priceInput.min = "0";
                priceInput.dataset.item = item;
                priceInput.dataset.chest = chestType;
                
                // Definir preço padrão baseado na raridade
                const defaultPrice = defaultPrices[rarity];
                priceInput.value = defaultPrice;
                itemPrices[item] = defaultPrice;
                
                priceInput.addEventListener("input", function() {
                    itemPrices[item] = parseFloat(this.value) || 0;
                });
                
                itemPrice.appendChild(priceInput);
                itemRow.appendChild(itemName);
                itemRow.appendChild(itemPrice);
                container.appendChild(itemRow);
            }
        }
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Botão de simulação
    document.getElementById("runSimulationBtn").addEventListener("click", runSimulation);
    
    // Botão de salvar preços
    document.getElementById("savePricesBtn").addEventListener("click", function() {
        saveModal.show();
    });
    
    // Botão de confirmar salvamento
    document.getElementById("confirmSaveBtn").addEventListener("click", function() {
        const saveName = document.getElementById("saveNameInput").value.trim();
        if (saveName) {
            savePrices(saveName);
            saveModal.hide();
        }
    });
    
    // Botão de resetar preços
    document.getElementById("resetPricesBtn").addEventListener("click", resetPrices);
    
    // Adicionar efeito de magia ao passar o mouse sobre os botões
    const buttons = document.querySelectorAll(".btn-rpg");
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", createMagicParticles);
    });
}

// Efeito de partículas mágicas ao passar o mouse sobre botões
function createMagicParticles(e) {
    // Criar um efeito de partículas temporário ao redor do botão
    const btn = e.target.closest(".btn-rpg");
    const rect = btn.getBoundingClientRect();
    
    // Criar 5 partículas mágicas
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.width = "8px";
        particle.style.height = "8px";
        particle.style.borderRadius = "50%";
        particle.style.backgroundColor = getRandomColor();
        particle.style.left = `${rect.left + Math.random() * rect.width}px`;
        particle.style.top = `${rect.top + Math.random() * rect.height}px`;
        particle.style.zIndex = "9999";
        particle.style.pointerEvents = "none";
        document.body.appendChild(particle);
        
        // Animar a partícula
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        const distance = 30 + Math.random() * 50;
        const opacity = 1;
        
        let currentDistance = 0;
        
        const animate = () => {
            if (currentDistance >= distance) {
                document.body.removeChild(particle);
                return;
            }
            
            currentDistance += speed;
            const x = parseFloat(particle.style.left) + Math.cos(angle) * speed;
            const y = parseFloat(particle.style.top) + Math.sin(angle) * speed;
            const newOpacity = opacity * (1 - currentDistance / distance);
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = newOpacity;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }
}

// Obter uma cor aleatória para as partículas mágicas
function getRandomColor() {
    const colors = ["#8a5fb9", "#c4a5e5", "#ffd700", "#5a3a7e"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Executar simulação
function runSimulation() {
    const numSimulations = parseInt(document.getElementById("simulationsInput").value) || 1000;
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "<p class='text-center'>Running simulation...</p>";
    
    // Simular com um pequeno atraso para mostrar o efeito de carregamento
    setTimeout(() => {
        const results = {};
        
        for (const chestType of ["Crystal", "Golden", "Iron"]) {
            const keyPrice = parseFloat(document.getElementById(`${chestType.toLowerCase()}KeyPrice`).value) || 0;
            results[chestType] = calculateProfitProbability(chestType, keyPrice, numSimulations);
        }
        
        displayResults(results, numSimulations);
    }, 500);
}

// Calcular probabilidade de lucro
function calculateProfitProbability(chestType, keyPrice, numSimulations) {
    const items = chestData[chestType];
    let profitableOutcomes = 0;
    let totalValue = 0;
    let minValue = Infinity;
    let maxValue = -Infinity;
    
    for (let i = 0; i < numSimulations; i++) {
        const selectedItems = selectItemsWithRarity(chestType);
        const grossValue = selectedItems.reduce((sum, [item, qty]) => sum + (itemPrices[item] || 0) * qty, 0);
        const netValue = grossValue * 0.95; // Considera 5% de taxa
        
        totalValue += netValue;
        minValue = Math.min(minValue, netValue);
        maxValue = Math.max(maxValue, netValue);
        
        if (netValue > keyPrice) {
            profitableOutcomes++;
        }
    }
    
    const avgValue = totalValue / numSimulations;
    const probability = (profitableOutcomes / numSimulations) * 100;
    const expectedValue = avgValue - keyPrice;
    
    return {
        probability,
        avgValue,
        minValue,
        maxValue,
        expectedValue
    };
}

// Selecionar itens com base nas raridades
function selectItemsWithRarity(chestType) {
    const items = chestData[chestType];
    const selectedItems = [];
    const totalWeight = Object.values(itemRarity).reduce((sum, r) => sum + r.weight, 0);
    
    // Selecionar raridade baseado nos pesos
    const rarityRoll = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    let selectedRarity = null;
    
    for (const [rarity, data] of Object.entries(itemRarity)) {
        cumulativeWeight += data.weight;
        if (rarityRoll <= cumulativeWeight) {
            selectedRarity = rarity;
            break;
        }
    }
    
    // Filtrar itens desta raridade que estão no baú
    const rarityItems = itemRarity[selectedRarity].items.filter(item => items.includes(item));
    
    if (rarityItems.length === 0) {
        return selectedItems;
    }
    
    // Selecionar quantidade aleatória de itens desta raridade
    const maxQty = itemRarity[selectedRarity].maxQuantity;
    const quantity = Math.floor(Math.random() * maxQty) + 1;
    
    // Selecionar itens aleatórios
    for (let i = 0; i < quantity; i++) {
        const randomIndex = Math.floor(Math.random() * rarityItems.length);
        const selectedItem = rarityItems[randomIndex];
        
        // Verificar se o item já foi selecionado
        const existingItem = selectedItems.find(([item]) => item === selectedItem);
        if (existingItem) {
            existingItem[1]++; // Incrementar quantidade
        } else {
            selectedItems.push([selectedItem, 1]);
        }
    }
    
    return selectedItems;
}

// Exibir resultados
function displayResults(results, numSimulations) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";
    
    const resultHeader = document.createElement("div");
    resultHeader.className = "mb-4";
    resultHeader.innerHTML = `<h5>Simulation Results (${numSimulations.toLocaleString()} runs)</h5>`;
    resultsContainer.appendChild(resultHeader);
    
    for (const [chestType, result] of Object.entries(results)) {
        const chestResult = document.createElement("div");
        chestResult.className = "mb-4";
        
        const keyPrice = parseFloat(document.getElementById(`${chestType.toLowerCase()}KeyPrice`).value) || 0;
        const profitClass = result.expectedValue > 0 ? "profit-stat" : "loss-stat";
        
        chestResult.innerHTML = `
            <h6>${chestType} Chest Results:</h6>
            <div class="row">
                <div class="col-md-6">
                    <p><strong>Key Price:</strong> ${keyPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p><strong>Profit Chance:</strong> <span class="${profitClass}">${result.probability.toFixed(2)}%</span></p>
                    <p><strong>Expected Value:</strong> <span class="${profitClass}">${result.expectedValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p>
                </div>
                <div class="col-md-6">
                    <p><strong>Average Value:</strong> ${result.avgValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p><strong>Min Value:</strong> ${result.minValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p><strong>Max Value:</strong> ${result.maxValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                </div>
            </div>
            <hr>
        `;
        
        resultsContainer.appendChild(chestResult);
    }
    
    // Adicionar efeito de magia ao resultado
    resultsContainer.classList.add("magic-glow");
}

// Salvar preços
function savePrices(saveName) {
    const saveData = {
        keyPrices: {
            Crystal: document.getElementById("crystalKeyPrice").value,
            Golden: document.getElementById("goldenKeyPrice").value,
            Iron: document.getElementById("ironKeyPrice").value
        },
        itemPrices: {...itemPrices}
    };
    
    // Salvar no localStorage
    const savedPrices = JSON.parse(localStorage.getItem("chestSimulatorSaves") || "{}");
    savedPrices[saveName] = saveData;
    localStorage.setItem("chestSimulatorSaves", JSON.stringify(savedPrices));
    
    currentSave = saveName;
    showToast(`Prices saved as "${saveName}"`);
}

// Carregar preços salvos
function loadSavedPrices() {
    const savedPrices = JSON.parse(localStorage.getItem("chestSimulatorSaves") || "{}");
    const savedPricesList = document.getElementById("savedPricesList");
    
    if (Object.keys(savedPrices).length === 0) {
        savedPricesList.innerHTML = "<p class='text-center text-muted'>No saved prices found</p>";
        return;
    }
    
    savedPricesList.innerHTML = "";
    
    for (const saveName in savedPrices) {
        const listItem = document.createElement("button");
        listItem.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
        listItem.textContent = saveName;
        
        const deleteBtn = document.createElement("span");
        deleteBtn.className = "badge bg-danger rounded-pill";
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            deleteSavedPrice(saveName);
        });
        
        listItem.appendChild(deleteBtn);
        listItem.addEventListener("click", function() {
            loadPrices(saveName);
            loadModal.hide();
        });
        
        savedPricesList.appendChild(listItem);
    }
}

// Carregar preços
function loadPrices(saveName) {
    const savedPrices = JSON.parse(localStorage.getItem("chestSimulatorSaves") || "{}");
    const saveData = savedPrices[saveName];
    
    if (!saveData) return;
    
    // Carregar preços das chaves
    document.getElementById("crystalKeyPrice").value = saveData.keyPrices.Crystal;
    document.getElementById("goldenKeyPrice").value = saveData.keyPrices.Golden;
    document.getElementById("ironKeyPrice").value = saveData.keyPrices.Iron;
    
    // Carregar preços dos itens
    itemPrices = {...saveData.itemPrices};
    
    // Atualizar inputs
    document.querySelectorAll("input[data-item]").forEach(input => {
        const item = input.dataset.item;
        if (itemPrices[item] !== undefined) {
            input.value = itemPrices[item];
        }
    });
    
    currentSave = saveName;
    showToast(`Loaded prices from "${saveName}"`);
}

// Excluir preço salvo
function deleteSavedPrice(saveName) {
    const savedPrices = JSON.parse(localStorage.getItem("chestSimulatorSaves") || "{}");
    delete savedPrices[saveName];
    localStorage.setItem("chestSimulatorSaves", JSON.stringify(savedPrices));
    
    if (currentSave === saveName) {
        currentSave = null;
    }
    
    loadSavedPrices();
    showToast(`Deleted save "${saveName}"`);
}

// Resetar preços
function resetPrices() {
    // Resetar preços das chaves
    document.getElementById("crystalKeyPrice").value = 1000;
    document.getElementById("goldenKeyPrice").value = 500;
    document.getElementById("ironKeyPrice").value = 200;
    
    // Resetar preços dos itens
    document.querySelectorAll("input[data-item]").forEach(input => {
        const item = input.dataset.item;
        let defaultPrice = 50; // Valor padrão para common
        
        // Encontrar raridade do item
        for (const [rarity, data] of Object.entries(itemRarity)) {
            if (data.items.includes(item)) {
                defaultPrice = defaultPrices[rarity];
                break;
            }
        }
        
        input.value = defaultPrice;
        itemPrices[item] = defaultPrice;
    });
    
    showToast("All prices have been reset to default values");
}

// Mostrar toast
function showToast(message) {
    const toastContainer = document.createElement("div");
    toastContainer.className = "position-fixed bottom-0 end-0 p-3";
    toastContainer.style.zIndex = "5";
    
    const toastElement = document.createElement("div");
    toastElement.className = "toast align-items-center text-white bg-primary border-0";
    toastElement.setAttribute("role", "alert");
    toastElement.setAttribute("aria-live", "assertive");
    toastElement.setAttribute("aria-atomic", "true");
    
    toastElement.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    toastContainer.appendChild(toastElement);
    document.body.appendChild(toastContainer);
    
    const toast = new bootstrap.Toast(toastElement, {
        delay: 3000
    });
    
    toast.show();
    
    toastElement.addEventListener('hidden.bs.toast', function () {
        document.body.removeChild(toastContainer);
    });
}

