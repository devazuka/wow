local NPCS = {
  [12345] = {
    ["Option 1: Say Hello"] = {
      -- icon = 0, Chat Bubble (default)
      --        1 Vendor
      --        2 Taxi
      --        3 Trainer
      --        4 Interact Book
      --        5 Bind Stone
      --        6 Battle
      --        7 Mailbox
      --        8 Gossip Note
      --        9 Quest (Yellow Exclamation)
      --       10 Quest (Yellow Question)
      --       11 Quest (Blue Question)
      --       12 Quest (Blue Exclamation)
      -- code = false, -- prompt an input to the player to enter a code
      -- popup = nil,  -- message to show
      -- money = 0,    -- amount to pay
      handler = function (player)
        player:SendBroadcastMessage("Hello, Adventurer!")
      end
    }
    ["Option 2: Get a Buff"] = {
      handler = function (player) player:AddAura(467, player) end
    }
    ["Option 3: Teleport Me"] = {
      handler = function (player)
        player:Teleport(0, -8913.23, -132.47, 83.53, 0)
      end
    }
    ["Option 4: more options"] = {
      ["Option 1: Say Hello again"] = {
        handler = function (player)
          player:SendBroadcastMessage("Hello, Adventurer!")
        end
      }
      ["Option 2: Get another Buff"] = {
        handler = function (player) player:AddAura(467, player) end
      }
      ["Option 3: Teleport Me more"] = {
        handler = function (player)
          player:Teleport(0, -8913.23, -132.47, 83.53, 0)
        end
      }
    }
  }
}
-- local BgEvents
-- ON_START = 1,
-- ON_END = 2,
-- ON_CREATE = 3,
-- ON_PRE_DESTROY = 4,

-- CreatureGossipEvents
local ON_HELLO = 1
local ON_SELECT = 2

local function ShowGossipMenu(player, creature, menu, sender)
  player:GossipClearMenu()
  for _, options in pairs(menu) do
    if type(options) == 'table' and options.intid then
      player:GossipMenuAddItem(
        options.icon or 0,
        options.msg,
        sender,
        options.intid,
        options.code or false,
        options.popup or nil,
        options.money or 0
      )
    end
  end
  player:GossipSendMenu(sender, creature)
end

local function BuildMenu(accumulator, menus)
  for key, options in pairs(menus) do
    if type(options) == 'table' then
      menus.menu = true
      options.intid = #accumulator + 1
      accumulator[options.intid] = options
      BuildMenu(accumulator, options)
    end
  end
end

for npc_id, gossips in pairs(NPCS) do
  local menu = BuildMenu({}, gossips)
  RegisterCreatureGossipEvent(npc_id, ON_HELLO, function (event, player, creature)
    ShowGossipMenu(player, creature, menu, 1)
  end)
  RegisterCreatureGossipEvent(npc_id, ON_SELECT, function (event, player, creature, sender, intid, code, menu_id)
    local options = menu[intid]
    if options.menu then
      ShowGossipMenu(player, creature, options, intid)
    end
    if options.hander then
      options.handler(player, creature, code, menu_id)
    end
  end)
end