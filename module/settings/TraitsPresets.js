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
    },
    "2":{
        "label": "Skills (Classic RPG)",
        "hasDescription": true,
        "description": "Skill set for a classic fantasy RPG",
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
          "0": {
            "name": "Acrobatics",
            "description": "The ability to perform feats of agility and coordination, such as tumbling, jumping, and balancing.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "1": {
            "name": "Athletics",
            "description": "The ability to run, jump, swim, climb, and perform other physical feats of strength and endurance.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "2": {
            "name": "Combat",
            "description": "The ability to fight with weapons or bare-handed, and to understand tactics and strategy in battle.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "3": {
            "name": "Crafts",
            "description": "The ability to create and repair items using tools and raw materials, such as woodworking, metalworking, and leatherworking.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "4": {
            "name": "Influence",
            "description": "The ability to persuade, deceive, and intimidate others, and to gather information through social interaction.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "5": {
            "name": "Knowledge",
            "description": "The ability to recall information and make deductions based on that information, such as history, magic, and lore.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "6": {
            "name": "Perception",
            "description": "The ability to notice details and perceive hidden dangers, such as traps, ambushes, and secret doors.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "7": {
            "name": "Stealth",
            "description": "The ability to move silently, hide in shadows, and pick locks or pockets.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          },
          "8": {
            "name": "Survival",
            "description": "The ability to live off the land, track animals and people, and navigate in wilderness environments.",
            "dice": {
              "value": {
                "0": "6"
              }
            }
          }
        }
      }
    }      
