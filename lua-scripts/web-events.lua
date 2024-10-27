-- RegisterBGEvent
local BG_EVENT_ON_START       = 1 -- (event, bg, bgId, instanceId)
local BG_EVENT_ON_END         = 2 -- (event, bg, bgId, instanceId, winner)
local BG_EVENT_ON_CREATE      = 3 -- (event, bg, bgId, instanceId)
local BG_EVENT_ON_PRE_DESTROY = 4 -- (event, bg, bgId, instanceId)

-- RegisterPlayerEvent
local PLAYER_EVENT_ON_CHARACTER_CREATE       = 1 -- (event, player)
local PLAYER_EVENT_ON_CHARACTER_DELETE       = 2 -- (event, guid)
local PLAYER_EVENT_ON_LOGIN                  = 3 -- (event, player)
local PLAYER_EVENT_ON_LOGOUT                 = 4 -- (event, player)
local PLAYER_EVENT_ON_SPELL_CAST             = 5 -- (event, player, spell, skipCheck)
local PLAYER_EVENT_ON_KILL_PLAYER            = 6 -- (event, killer, killed)
local PLAYER_EVENT_ON_KILL_CREATURE          = 7 -- (event, killer, killed)
local PLAYER_EVENT_ON_KILLED_BY_CREATURE     = 8 -- (event, killer, killed)
local PLAYER_EVENT_ON_DUEL_REQUEST           = 9 -- (event, target, challenger)
local PLAYER_EVENT_ON_DUEL_START             = 10 -- (event, player1, player2)
local PLAYER_EVENT_ON_DUEL_END               = 11 -- (event, winner, loser, type)
local PLAYER_EVENT_ON_GIVE_XP                = 12 -- (event, player, amount, victim, source) - Can return new XP amount
local PLAYER_EVENT_ON_LEVEL_CHANGE           = 13 -- (event, player, oldLevel)
local PLAYER_EVENT_ON_MONEY_CHANGE           = 14 -- (event, player, amount) - Can return new money amount
local PLAYER_EVENT_ON_REPUTATION_CHANGE      = 15 -- (event, player, factionId, standing, incremental) - Can return new standing -> if standing == -1, it will prevent default action (rep gain)
local PLAYER_EVENT_ON_TALENTS_CHANGE         = 16 -- (event, player, points)
local PLAYER_EVENT_ON_TALENTS_RESET          = 17 -- (event, player, noCost)
local PLAYER_EVENT_ON_CHAT                   = 18 -- (event, player, msg, Type, lang) - Can return false, newMessage
local PLAYER_EVENT_ON_WHISPER                = 19 -- (event, player, msg, Type, lang, receiver) - Can return false, newMessage
local PLAYER_EVENT_ON_GROUP_CHAT             = 20 -- (event, player, msg, Type, lang, group) - Can return false, newMessage
local PLAYER_EVENT_ON_GUILD_CHAT             = 21 -- (event, player, msg, Type, lang, guild) - Can return false, newMessage
local PLAYER_EVENT_ON_CHANNEL_CHAT           = 22 -- (event, player, msg, Type, lang, channel) - channel is negative for custom channels. Can return false, newMessage
local PLAYER_EVENT_ON_EMOTE                  = 23 -- (event, player, emote) - Not triggered on any known emote
local PLAYER_EVENT_ON_TEXT_EMOTE             = 24 -- (event, player, textEmote, emoteNum, guid)
local PLAYER_EVENT_ON_SAVE                   = 25 -- (event, player)
local PLAYER_EVENT_ON_BIND_TO_INSTANCE       = 26 -- (event, player, difficulty, mapid, permanent)
local PLAYER_EVENT_ON_UPDATE_ZONE            = 27 -- (event, player, newZone, newArea)
local PLAYER_EVENT_ON_MAP_CHANGE             = 28 -- (event, player)
local PLAYER_EVENT_ON_EQUIP                  = 29 -- (event, player, item, bag, slot)
local PLAYER_EVENT_ON_FIRST_LOGIN            = 30 -- (event, player)
local PLAYER_EVENT_ON_CAN_USE_ITEM           = 31 -- (event, player, itemEntry) - Can return InventoryResult enum value
local PLAYER_EVENT_ON_LOOT_ITEM              = 32 -- (event, player, item, count)
local PLAYER_EVENT_ON_ENTER_COMBAT           = 33 -- (event, player, enemy)
local PLAYER_EVENT_ON_LEAVE_COMBAT           = 34 -- (event, player)
local PLAYER_EVENT_ON_REPOP                  = 35 -- (event, player)
local PLAYER_EVENT_ON_RESURRECT              = 36 -- (event, player)
local PLAYER_EVENT_ON_LOOT_MONEY             = 37 -- (event, player, amount)
local PLAYER_EVENT_ON_QUEST_ABANDON          = 38 -- (event, player, questId)
local PLAYER_EVENT_ON_LEARN_TALENTS          = 39 -- (event, player, talentId, talentRank, spellid)
local PLAYER_EVENT_ON_COMMAND                = 42 -- (event, player, command, chatHandler) - player is nil if command used from console. Can return false
local PLAYER_EVENT_ON_PET_ADDED_TO_WORLD     = 43 -- (event, player, pet)
local PLAYER_EVENT_ON_LEARN_SPELL            = 44 -- (event, player, spellId)
local PLAYER_EVENT_ON_ACHIEVEMENT_COMPLETE   = 45 -- (event, player, achievement)
local PLAYER_EVENT_ON_FFAPVP_CHANGE          = 46 -- (event, player, hasFfaPvp)
local PLAYER_EVENT_ON_UPDATE_AREA            = 47 -- (event, player, oldArea, newArea)
local PLAYER_EVENT_ON_CAN_INIT_TRADE         = 48 -- (event, player, target) - Can return false to prevent the trade
local PLAYER_EVENT_ON_CAN_SEND_MAIL          = 49 -- (event, player, receiverGuid, mailbox, subject, body, money, cod, item) - Can return false to prevent sending the mail
local PLAYER_EVENT_ON_CAN_JOIN_LFG           = 50 -- (event, player, roles, dungeons, comment) - Can return false to prevent queueing
local PLAYER_EVENT_ON_QUEST_REWARD_ITEM      = 51 -- (event, player, item, count)
local PLAYER_EVENT_ON_CREATE_ITEM            = 52 -- (event, player, item, count)
local PLAYER_EVENT_ON_STORE_NEW_ITEM         = 53 -- (event, player, item, count)
local PLAYER_EVENT_ON_COMPLETE_QUEST         = 54 -- (event, player, quest)
local PLAYER_EVENT_ON_CAN_GROUP_INVITE       = 55 -- (event, player, memberName) - Can return false to prevent inviting
local PLAYER_EVENT_ON_GROUP_ROLL_REWARD_ITEM = 56 -- (event, player, item, count, voteType, roll)
local PLAYER_EVENT_ON_BG_DESERTION           = 57 -- (event, player, type)

-- RegisterMapEvent
local INSTANCE_EVENT_ON_INITIALIZE                  = 1 -- (event, instance_data, map)
local INSTANCE_EVENT_ON_LOAD                        = 2 -- (event, instance_data, map)
local INSTANCE_EVENT_ON_UPDATE                      = 3 -- (event, instance_data, map, diff)
local INSTANCE_EVENT_ON_PLAYER_ENTER                = 4 -- (event, instance_data, map, player)
local INSTANCE_EVENT_ON_CREATURE_CREATE             = 5 -- (event, instance_data, map, creature)
local INSTANCE_EVENT_ON_GAMEOBJECT_CREATE           = 6 -- (event, instance_data, map, go)
local INSTANCE_EVENT_ON_CHECK_ENCOUNTER_IN_PROGRESS = 7 -- (event, instance_data, map)

-- RegisterItemEvent
local ITEM_EVENT_ON_DUMMY_EFFECT = 1 -- (event, caster, spellid, effindex, item)
local ITEM_EVENT_ON_USE          = 2 -- (event, player, item, target) - Can return false to stop the spell casting
local ITEM_EVENT_ON_QUEST_ACCEPT = 3 -- (event, player, item, quest) - Can return true
local ITEM_EVENT_ON_EXPIRE       = 4 -- (event, player, itemid) - Can return true
local ITEM_EVENT_ON_REMOVE       = 5 -- (event, player, item) - Can return true

-- RegisterGuildEvent
local GUILD_EVENT_ON_ADD_MEMBER     = 1 -- (event, guild, player, rank)
local GUILD_EVENT_ON_REMOVE_MEMBER  = 2 -- (event, guild, player, isDisbanding)
local GUILD_EVENT_ON_MOTD_CHANGE    = 3 -- (event, guild, newMotd)
local GUILD_EVENT_ON_INFO_CHANGE    = 4 -- (event, guild, newInfo)
local GUILD_EVENT_ON_CREATE         = 5 -- (event, guild, leader, name)  // Not on TC
local GUILD_EVENT_ON_DISBAND        = 6 -- (event, guild)
local GUILD_EVENT_ON_MONEY_WITHDRAW = 7 -- (event, guild, player, amount, isRepair) - Can return new money amount
local GUILD_EVENT_ON_MONEY_DEPOSIT  = 8 -- (event, guild, player, amount) - Can return new money amount
local GUILD_EVENT_ON_ITEM_MOVE      = 9 -- (event, guild, player, item, isSrcBank, srcContainer, srcSlotId, isDestBank, destContainer, destSlotId)   // TODO
local GUILD_EVENT_ON_EVENT          = 10 -- (event, guild, eventType, plrGUIDLow1, plrGUIDLow2, newRank)  // TODO
local GUILD_EVENT_ON_BANK_EVENT     = 11 -- (event, guild, eventType, tabId, playerGUIDLow, itemOrMoney, itemStackCount, destTabId)

-- RegisterServerEvent
local SERVER_EVENT_ON_NETWORK_START           = 1 -- Not Implemented
local SERVER_EVENT_ON_NETWORK_STOP            = 2 -- Not Implemented
local SERVER_EVENT_ON_SOCKET_OPEN             = 3 -- Not Implemented
local SERVER_EVENT_ON_SOCKET_CLOSE            = 4 -- Not Implemented
local SERVER_EVENT_ON_PACKET_RECEIVE          = 5 -- (event, packet, player) - Player only if accessible. Can return false, newPacket
local SERVER_EVENT_ON_PACKET_RECEIVE_UNKNOWN  = 6 -- Not Implemented
local SERVER_EVENT_ON_PACKET_SEND             = 7 -- (event, packet, player) - Player only if accessible. Can return false, newPacket
local WORLD_EVENT_ON_OPEN_STATE_CHANGE        = 8 -- (event, open) - Needs core support on Mangos
local WORLD_EVENT_ON_CONFIG_LOAD              = 9 -- (event, reload)
local WORLD_EVENT_ON_SHUTDOWN_INIT            = 11 -- (event, code, mask)
local WORLD_EVENT_ON_SHUTDOWN_CANCEL          = 12 -- (event)
local WORLD_EVENT_ON_UPDATE                   = 13 -- (event, diff)
local WORLD_EVENT_ON_STARTUP                  = 14 -- (event)
local WORLD_EVENT_ON_SHUTDOWN                 = 15 -- (event)
local MAP_EVENT_ON_CREATE                     = 17 -- (event, map)
local MAP_EVENT_ON_DESTROY                    = 18 -- (event, map)
local MAP_EVENT_ON_GRID_LOAD                  = 19 -- Not Implemented
local MAP_EVENT_ON_GRID_UNLOAD                = 20 -- Not Implemented
local MAP_EVENT_ON_PLAYER_ENTER               = 21 -- (event, map, player)
local MAP_EVENT_ON_PLAYER_LEAVE               = 22 -- (event, map, player)
local MAP_EVENT_ON_UPDATE                     = 23 -- (event, map, diff)
local TRIGGER_EVENT_ON_TRIGGER                = 24 -- (event, player, triggerId) - Can return true
local WEATHER_EVENT_ON_CHANGE                 = 25 -- (event, zoneId, state, grade)
local AUCTION_EVENT_ON_ADD                    = 26 -- (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
local AUCTION_EVENT_ON_REMOVE                 = 27 -- (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
local AUCTION_EVENT_ON_SUCCESSFUL             = 28 -- (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
local AUCTION_EVENT_ON_EXPIRE                 = 29 -- (event, auctionId, owner, item, expireTime, buyout, startBid, currentBid, bidderGUIDLow)
local ADDON_EVENT_ON_MESSAGE                  = 30 -- (event, sender, type, prefix, msg, target) - target can be nil/whisper_target/guild/group/channel. Can return false
local WORLD_EVENT_ON_DELETE_CREATURE          = 31 -- (event, creature)
local WORLD_EVENT_ON_DELETE_GAMEOBJECT        = 32 -- (event, gameobject)
local ELUNA_EVENT_ON_LUA_STATE_CLOSE          = 16 -- (event) - triggers just before shutting down eluna (on shutdown and restart)
local ELUNA_EVENT_ON_LUA_STATE_OPEN           = 33 -- (event) - triggers after all scripts are loaded
local GAME_EVENT_START                        = 34 -- (event, gameeventid)
local GAME_EVENT_STOP                         = 35 -- (event, gameeventid)

-- RegisterCreatureEvent
-- RegisterUniqueCreatureEvent
local CREATURE_EVENT_ON_ENTER_COMBAT              = 1 -- (event, creature, target) - Can return true to stop normal action
local CREATURE_EVENT_ON_LEAVE_COMBAT              = 2 -- (event, creature) - Can return true to stop normal action
local CREATURE_EVENT_ON_TARGET_DIED               = 3 -- (event, creature, victim) - Can return true to stop normal action
local CREATURE_EVENT_ON_DIED                      = 4 -- (event, creature, killer) - Can return true to stop normal action
local CREATURE_EVENT_ON_SPAWN                     = 5 -- (event, creature) - Can return true to stop normal action
local CREATURE_EVENT_ON_REACH_WP                  = 6 -- (event, creature, type, id) - Can return true to stop normal action
local CREATURE_EVENT_ON_AIUPDATE                  = 7 -- (event, creature, diff) - Can return true to stop normal action
local CREATURE_EVENT_ON_RECEIVE_EMOTE             = 8 -- (event, creature, player, emoteid) - Can return true to stop normal action
local CREATURE_EVENT_ON_DAMAGE_TAKEN              = 9 -- (event, creature, attacker, damage) - Can return true to stop normal action, can return new damage as second return value.
local CREATURE_EVENT_ON_PRE_COMBAT                = 10 -- (event, creature, target) - Can return true to stop normal action
local CREATURE_EVENT_ON_OWNER_ATTACKED            = 12 -- (event, creature, target) - Can return true to stop normal action
local CREATURE_EVENT_ON_OWNER_ATTACKED_AT         = 13 -- (event, creature, attacker) - Can return true to stop normal action
local CREATURE_EVENT_ON_HIT_BY_SPELL              = 14 -- (event, creature, caster, spellid) - Can return true to stop normal action
local CREATURE_EVENT_ON_SPELL_HIT_TARGET          = 15 -- (event, creature, target, spellid) - Can return true to stop normal action
local CREATURE_EVENT_ON_JUST_SUMMONED_CREATURE    = 19 -- (event, creature, summon) - Can return true to stop normal action
local CREATURE_EVENT_ON_SUMMONED_CREATURE_DESPAWN = 20 -- (event, creature, summon) - Can return true to stop normal action
local CREATURE_EVENT_ON_SUMMONED_CREATURE_DIED    = 21 -- (event, creature, summon, killer) - Can return true to stop normal action
local CREATURE_EVENT_ON_SUMMONED                  = 22 -- (event, creature, summoner) - Can return true to stop normal action
local CREATURE_EVENT_ON_RESET                     = 23 -- (event, creature)
local CREATURE_EVENT_ON_REACH_HOME                = 24 -- (event, creature) - Can return true to stop normal action
local CREATURE_EVENT_ON_CORPSE_REMOVED            = 26 -- (event, creature, respawndelay) - Can return true to stop normal action, can return new respawndelay as second return value
local CREATURE_EVENT_ON_MOVE_IN_LOS               = 27 -- (event, creature, unit) - Can return true to stop normal action. Does not actually check LOS, just uses the sight range
local CREATURE_EVENT_ON_DUMMY_EFFECT              = 30 -- (event, caster, spellid, effindex, creature)
local CREATURE_EVENT_ON_QUEST_ACCEPT              = 31 -- (event, player, creature, quest) - Can return true
local CREATURE_EVENT_ON_QUEST_REWARD              = 34 -- (event, player, creature, quest, opt) - Can return true
local CREATURE_EVENT_ON_DIALOG_STATUS             = 35 -- (event, player, creature)
local CREATURE_EVENT_ON_ADD                       = 36 -- (event, creature)
local CREATURE_EVENT_ON_REMOVE                    = 37 -- (event, creature)

function EncodeValue(value)
  if type(value) == 'table' then
    local json = 'JSON_OBJECT('
    local first = true
    for key, v in pairs(value) do
      if first then
        first = false
        json = json.."'"..key.."', "..EncodeValue(v)
      else
        json = json..", ".."'"..key.."', "..EncodeValue(v)
      end
    end
    return json .. ")"
  end
  if type(value) == 'number' then
    return tostring(value)
  end
  if type(value) == 'string' then
    return "'"..value:gsub("\\", "\\\\"):gsub("'", "''").."'"
  end
  if type(value) == 'boolean' then
    return value and "TRUE" or "FALSE"
  end
  return 'NULL'
end

function SendWebEvent(type, player, data)
  if player then
    data = data or {}
    data.player = data.player or {}
    data.player.id = player:GetGUIDLow()
    data.player.name = player:GetName()
    data.player.account = player:GetAccountName()
    data.player.class = player:GetClass()
    data.player.race = player:GetRace()
  end
  WorldDBExecute("INSERT INTO web.event (type, data) VALUES ('"..type.."', "..EncodeValue(data)..")")
end

RegisterPlayerEvent(PLAYER_EVENT_ON_CHANNEL_CHAT, function(event, player, msg, Type, lang, channel)
  if channel == 1 then
    -- Send message to players of both factions in the channel
    for _, targetPlayer in pairs(GetPlayersInWorld()) do
      targetPlayer:SendBroadcastMessage("[|cFFFFA500General|r]|cFFFFF5DE |TInterface\\FriendsFrame\\PlusManz-Horde:16|t" .. "[|Hplayer:" .. player:GetName() .. "|h" .. player:GetName() .. "|h]: " .. msg)
    end
    SendWebEvent('GENERAL_CHANNEL_MESSAGE', player, { message = msg:gsub("|c%x%x%x%x%x%x%x%x", ""):gsub("|r", "") })
    return false -- Prevents the message from duplicating in the original chat
  end
  --]]
end)

local elapsed = 500
RegisterServerEvent(WORLD_EVENT_ON_UPDATE, function (event, diff)
  elapsed = elapsed + diff
  if elapsed < 500 then return end
  elapsed = 0
  -- 
end)
