export const traitPresets = {
    "0": {
        "label": "Attributes (Classic RPG)",
        "hasDescription": true,
        "decription": "Attribute set for a classic fantasy RPG",
        "settings": {
            "hasDescription": true,
            "hasLabel": false,
            "hasDescriptors": false,
            "hasSfx": false,
            "hasSubTraits": false,
            "hasDice": true,
            "diceConsumable": false
        },
        "traits": {
            "0": { "name": "Agility", "description":"Speed, reaction time, andhand-eye coordination.", "dice": { "value": { "0": "8" } } },
            "1": { "name": "Alertness", "description":"Mental acuity, perception,and awareness of your surroundings.", "dice": { "value": { "0": "8" } } },
            "2": { "name": "Intelligence", "description":"Reason, logic, and abilityto use what you've learned.", "dice": { "value": { "0": "8" } } },
            "3": { "name": "Strength", "description":"Physical power, muscle,and athleticism.", "dice": { "value": { "0": "8" } } },
            "4": { "name": "Vitality", "description":"Physical endurance, stamina, and ability to survive in hostile surroundings.", "dice": { "value": { "0": "8" } } },
            "5": { "name": "Willpower", "description":"Mental resolve, concentration, focus, and force of wil", "dice": { "value": { "0": "8" } } },
        }
    },
    "1":{
        "label": "Attributes (Lite)",
        "hasDescription": true,
        "decription": "a simple attribute set",
        "settings": {
            "hasDescription": false,
            "hasLabel": false,
            "hasDescriptors": false,
            "hasSfx": false,
            "hasSubTraits": false,
            "hasDice": true,
            "diceConsumable": false
        },
        "traits": {
            "0": { "name": "Mental", "dice": { "value": { "0": "8" } } },
            "1": { "name": "Physical", "dice": { "value": { "0": "8" } } },
            "2": { "name": "Social", "dice": { "value": { "0": "8" } } },
        }
    }
  }
