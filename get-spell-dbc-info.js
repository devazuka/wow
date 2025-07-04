import * as DBC from './dbc.ts'

const openDBC = async (dbcName) => {
  const bytes = await Deno.readFile(`data/dbc/${dbcName}`)
  return DBC.fromBytes(dbcName, bytes.buffer)
}

const spells = await openDBC('Spell.dbc')
const durations = await openDBC('SpellDuration.dbc')
const attributes = [
  ['Attributes', 0x00000001n, `SPELL_ATTR0_PROC_FAILURE_BURNS_CHARGE: Unknown attribute 0@Attr0`],
  ['Attributes', 0x00000002n, `SPELL_ATTR0_USES_RANGED_SLOT: Treat as ranged attack DESCRIPTION Use ammo, ranged attack range modifiers, ranged haste, etc.`],
  ['Attributes', 0x00000004n, `SPELL_ATTR0_ON_NEXT_SWING_NO_DAMAGE: On next melee (type 1) DESCRIPTION Both "on next swing" attributes have identical handling in server & client`],
  ['Attributes', 0x00000008n, `SPELL_ATTR0_DO_NOT_LOG_IMMUNE_MISSES: Replenishment (client only)`],
  ['Attributes', 0x00000010n, `SPELL_ATTR0_IS_ABILITY: Treat as ability DESCRIPTION Cannot be reflected, not affected by cast speed modifiers, etc.`],
  ['Attributes', 0x00000020n, `SPELL_ATTR0_IS_TRADESKILL: Trade skill recipe DESCRIPTION Displayed in recipe list, not affected by cast speed modifiers`],
  ['Attributes', 0x00000040n, `SPELL_ATTR0_PASSIVE: Passive spell DESCRIPTION Spell is automatically cast on self by core`],
  ['Attributes', 0x00000080n, `SPELL_ATTR0_DO_NOT_DISPLAY: Hidden in UI (client only) DESCRIPTION Not visible in spellbook or aura bar (Spellbook, Aura Icon, Combat Log)`],
  ['Attributes', 0x00000100n, `SPELL_ATTR0_DO_NOT_LOG: Hidden in combat log (client only) DESCRIPTION Spell will not appear in combat logs`],
  ['Attributes', 0x00000200n, `SPELL_ATTR0_HELD_ITEM_ONLY: Auto-target mainhand item (client only) DESCRIPTION Client will automatically select main-hand item as cast target`],
  ['Attributes', 0x00000400n, `SPELL_ATTR0_ON_NEXT_SWING: On next melee (type 2) DESCRIPTION Both "on next swing" attributes have identical handling in server & client`],
  ['Attributes', 0x00000800n, `SPELL_ATTR0_WEARER_CASTS_PROC_TRIGGER: Unknown attribute 11@Attr0`],
  ['Attributes', 0x00001000n, `SPELL_ATTR0_SERVER_ONLY: Only usable during daytime (unused)`],
  ['Attributes', 0x00002000n, `SPELL_ATTR0_ALLOW_ITEM_SPELL_IN_PVP: Only usable during nighttime (unused)`],
  ['Attributes', 0x00004000n, `SPELL_ATTR0_ONLY_INDOORS: Only usable indoors`],
  ['Attributes', 0x00008000n, `SPELL_ATTR0_ONLY_OUTDOORS: Only usable outdoors`],
  ['Attributes', 0x00010000n, `SPELL_ATTR0_NOT_SHAPESHIFTED: Not usable while shapeshifted`],
  ['Attributes', 0x00020000n, `SPELL_ATTR0_ONLY_STEALTHED: Only usable in stealth`],
  ['Attributes', 0x00040000n, `SPELL_ATTR0_DO_NOT_SHEATH: Don't shealthe weapons (client only)`],
  ['Attributes', 0x00080000n, `SPELL_ATTR0_SCALES_WITH_CREATURE_LEVEL: Scale with caster level DESCRIPTION For non-player casts, scale impact and power cost with caster's level`],
  ['Attributes', 0x00100000n, `SPELL_ATTR0_CANCELS_AUTO_ATTACK_COMBAT: Stop attacking after cast DESCRIPTION After casting this, the current auto-attack will be interrupted`],
  ['Attributes', 0x00200000n, `SPELL_ATTR0_NO_ACTIVE_DEFENSE: Prevent physical avoidance DESCRIPTION Spell cannot be dodged, parried or blocked`],
  ['Attributes', 0x00400000n, `SPELL_ATTR0_TRACK_TARGET_IN_CAST_PLAYER_ONLY: Automatically face target during cast (client only)`],
  ['Attributes', 0x00800000n, `SPELL_ATTR0_ALLOW_CAST_WHILE_DEAD: Can be cast while dead DESCRIPTION Spells without this flag cannot be cast by dead units in non-triggered contexts`],
  ['Attributes', 0x01000000n, `SPELL_ATTR0_ALLOW_WHILE_MOUNTED: Can be cast while mounted`],
  ['Attributes', 0x02000000n, `SPELL_ATTR0_COOLDOWN_ON_EVENT: Cooldown starts on expiry DESCRIPTION Spell is unusable while already active, and cooldown does not begin until the effects have worn off`],
  ['Attributes', 0x04000000n, `SPELL_ATTR0_AURA_IS_DEBUFF: Is negative spell DESCRIPTION Forces the spell to be treated as a negative spell`],
  ['Attributes', 0x08000000n, `SPELL_ATTR0_ALLOW_WHILE_SITTING: Can be cast while sitting`],
  ['Attributes', 0x10000000n, `SPELL_ATTR0_NOT_IN_COMBAT_ONLY_PEACEFUL: Cannot be used in combat`],
  ['Attributes', 0x20000000n, `SPELL_ATTR0_NO_IMMUNITIES: Pierce invulnerability DESCRIPTION Allows spell to pierce invulnerability, unless the invulnerability spell also has this attribute`],
  ['Attributes', 0x40000000n, `SPELL_ATTR0_HEARTBEAT_RESIST: Periodic resistance checks DESCRIPTION Periodically re-rolls against resistance to potentially expire aura early`],
  ['Attributes', 0x80000000n, `SPELL_ATTR0_NO_AURA_CANCEL: Aura cannot be cancelled DESCRIPTION Prevents the player from voluntarily canceling a positive aura`],
  ['AttributesEx', 0x00000001n, `SPELL_ATTR1_DISMISS_PET_FIRST: Dismiss Pet on cast DESCRIPTION Without this attribute, summoning spells will fail if caster already has a pet`],
  ['AttributesEx', 0x00000002n, `SPELL_ATTR1_USE_ALL_MANA: Drain all power DESCRIPTION Ignores listed power cost and drains entire pool instead`],
  ['AttributesEx', 0x00000004n, `SPELL_ATTR1_IS_CHANNELED: Channeled (type 1) DESCRIPTION Both "channeled" attributes have identical handling in server & client`],
  ['AttributesEx', 0x00000008n, `SPELL_ATTR1_NO_REDIRECTION: Ignore redirection effects DESCRIPTION Spell will not be attracted by SPELL_MAGNET auras (Grounding Totem)`],
  ['AttributesEx', 0x00000010n, `SPELL_ATTR1_NO_SKILL_INCREASE: Unknown attribute 4@Attr1 DESCRIPTION stealth and whirlwind`],
  ['AttributesEx', 0x00000020n, `SPELL_ATTR1_ALLOW_WHILE_STEALTHED: Does not break stealth`],
  ['AttributesEx', 0x00000040n, `SPELL_ATTR1_IS_SELF_CHANNELED: Channeled (type 2) DESCRIPTION Both "channeled" attributes have identical handling in server & client`],
  ['AttributesEx', 0x00000080n, `SPELL_ATTR1_NO_REFLECTION: Ignore reflection effects DESCRIPTION Spell will pierce through Spell Reflection and similar`],
  ['AttributesEx', 0x00000100n, `SPELL_ATTR1_ONLY_PEACEFUL_TARGETS: Target cannot be in combat`],
  ['AttributesEx', 0x00000200n, `SPELL_ATTR1_INITIATE_COMBAT: Enables Auto-Attack (client only) DESCRIPTION Caster will begin auto-attacking the target on cast`],
  ['AttributesEx', 0x00000400n, `SPELL_ATTR1_NO_THREAT: Does not generate threat DESCRIPTION Also does not cause target to engage`],
  ['AttributesEx', 0x00000800n, `SPELL_ATTR1_AURA_UNIQUE: Aura will not refresh its duration when recast`],
  ['AttributesEx', 0x00001000n, `SPELL_ATTR1_FAILURE_BREAKS_STEALTH: Pickpocket (client only)`],
  ['AttributesEx', 0x00002000n, `SPELL_ATTR1_TOGGLE_FAR_SIGHT: Farsight aura (client only)`],
  ['AttributesEx', 0x00004000n, `SPELL_ATTR1_TRACK_TARGET_IN_CHANNEL: Track target while channeling DESCRIPTION While channeling, adjust facing to face target`],
  ['AttributesEx', 0x00008000n, `SPELL_ATTR1_IMMUNITY_PURGES_EFFECT: Immunity cancels preapplied auras DESCRIPTION For immunity spells, cancel all auras that this spell would make you immune to when the spell is applied`],
  ['AttributesEx', 0x00010000n, `SPELL_ATTR1_IMMUNITY_TO_HOSTILE_AND_FRIENDLY_EFFECTS: Unaffected by school immunities DESCRIPTION Will not pierce Divine Shield, Ice Block and other full invulnerabilities`],
  ['AttributesEx', 0x00020000n, `SPELL_ATTR1_NO_AUTOCAST_AI: Cannot be autocast by pet DESCRIPTION (AI)`],
  ['AttributesEx', 0x00040000n, `SPELL_ATTR1_PREVENTS_ANIM: NYI, auras apply UNIT_FLAG_PREVENT_EMOTES_FROM_CHAT_TEXT`],
  ['AttributesEx', 0x00080000n, `SPELL_ATTR1_EXCLUDE_CASTER: Cannot be self-cast`],
  ['AttributesEx', 0x00100000n, `SPELL_ATTR1_FINISHING_MOVE_DAMAGE: Requires combo points (type 1)`],
  ['AttributesEx', 0x00200000n, `SPELL_ATTR1_THREAT_ONLY_ON_MISS: Unknown attribute 21@Attr1`],
  ['AttributesEx', 0x00400000n, `SPELL_ATTR1_FINISHING_MOVE_DURATION: Requires combo points (type 2)`],
  ['AttributesEx', 0x00800000n, `SPELL_ATTR1_IGNORE_OWNERS_DEATH: Unknwon attribute 23@Attr1`],
  ['AttributesEx', 0x01000000n, `SPELL_ATTR1_SPECIAL_SKILLUP: Fishing (client only)`],
  ['AttributesEx', 0x02000000n, `SPELL_ATTR1_AURA_STAYS_AFTER_COMBAT: Aura stays after combat DESCRIPTION Aura will not be removed when the unit leaves combat`],
  ['AttributesEx', 0x04000000n, `SPELL_ATTR1_REQUIRE_ALL_TARGETS: Unknown attribute 26@Attr1 DESCRIPTION Related to [target=focus] and [target=mouseover] macros?`],
  ['AttributesEx', 0x08000000n, `SPELL_ATTR1_DISCOUNT_POWER_ON_MISS: Unknown attribute 27@Attr1 DESCRIPTION Melee spell?`],
  ['AttributesEx', 0x10000000n, `SPELL_ATTR1_NO_AURA_ICON: Hide in aura bar (client only)`],
  ['AttributesEx', 0x20000000n, `SPELL_ATTR1_NAME_IN_CHANNEL_BAR: Show spell name during channel (client only)`],
  ['AttributesEx', 0x40000000n, `SPELL_ATTR1_COMBO_ON_BLOCK: Enable at dodge DESCRIPTION (Mainline: Dispel All Stacks)`],
  ['AttributesEx', 0x80000000n, `SPELL_ATTR1_CAST_WHEN_LEARNED: Unknown attribute 31@Attr1`],
  ['AttributesEx2', 0x00000001n, `SPELL_ATTR2_ALLOW_DEAD_TARGET: Can target dead players or corpses`],
  ['AttributesEx2', 0x00000002n, `SPELL_ATTR2_NO_SHAPESHIFT_UI: Unknown attribute 1@Attr2 DESCRIPTION vanish, shadowform, Ghost Wolf and other`],
  ['AttributesEx2', 0x00000004n, `SPELL_ATTR2_IGNORE_LINE_OF_SIGHT: Ignore Line of Sight`],
  ['AttributesEx2', 0x00000008n, `SPELL_ATTR2_ALLOW_LOW_LEVEL_BUFF: Ignore aura scaling`],
  ['AttributesEx2', 0x00000010n, `SPELL_ATTR2_USE_SHAPESHIFT_BAR: Show in stance bar (client only)`],
  ['AttributesEx2', 0x00000020n, `SPELL_ATTR2_AUTO_REPEAT: Ranged auto-attack spell`],
  ['AttributesEx2', 0x00000040n, `SPELL_ATTR2_CANNOT_CAST_ON_TAPPED: Cannot target others' tapped units DESCRIPTION Can only target untapped units, or those tapped by caster`],
  ['AttributesEx2', 0x00000080n, `SPELL_ATTR2_DO_NOT_REPORT_SPELL_FAILURE: Unknown attribute 7@Attr2`],
  ['AttributesEx2', 0x00000100n, `SPELL_ATTR2_INCLUDE_IN_ADVANCED_COMBAT_LOG: Unknown attribute 8@Attr2 DESCRIPTION not set in 3.0.3`],
  ['AttributesEx2', 0x00000200n, `SPELL_ATTR2_ALWAYS_CAST_AS_UNIT: Unknown attribute 9@Attr2`],
  ['AttributesEx2', 0x00000400n, `SPELL_ATTR2_SPECIAL_TAMING_FLAG: Unknown attribute 10@Attr2 DESCRIPTION Related to taming?`],
  ['AttributesEx2', 0x00000800n, `SPELL_ATTR2_NO_TARGET_PER_SECOND_COST: Health Funnel`],
  ['AttributesEx2', 0x00001000n, `SPELL_ATTR2_CHAIN_FROM_CASTER: Unknown attribute 12@Attr2 DESCRIPTION Cleave, Heart Strike, Maul, Sunder Armor, Swipe`],
  ['AttributesEx2', 0x00002000n, `SPELL_ATTR2_ENCHANT_OWN_ITEM_ONLY: Enchant persists when entering arena`],
  ['AttributesEx2', 0x00004000n, `SPELL_ATTR2_ALLOW_WHILE_INVISIBLE: Unknown attribute 14@Attr2`],
  ['AttributesEx2', 0x00008000n, `SPELL_ATTR2_DO_NOT_CONSUME_IF_GAINED_DURING_CAST: Unknown attribute 15@Attr2 DESCRIPTION not set in 3.0.3`],
  ['AttributesEx2', 0x00010000n, `SPELL_ATTR2_NO_ACTIVE_PETS: Tame Beast`],
  ['AttributesEx2', 0x00020000n, `SPELL_ATTR2_DO_NOT_RESET_COMBAT_TIMERS: Don't reset swing timer DESCRIPTION Does not reset melee/ranged autoattack timer on cast`],
  ['AttributesEx2', 0x00040000n, `SPELL_ATTR2_NO_JUMP_WHILE_CAST_PENDING: Requires dead pet`],
  ['AttributesEx2', 0x00080000n, `SPELL_ATTR2_ALLOW_WHILE_NOT_SHAPESHIFTED: Also allow outside shapeshift (caster form) DESCRIPTION Even if Stances are nonzero, allow spell to be cast outside of shapeshift (though not in a different shapeshift)`],
  ['AttributesEx2', 0x00100000n, `SPELL_ATTR2_INITIATE_COMBAT_POST_CAST: (Enables Auto-Attack)`],
  ['AttributesEx2', 0x00200000n, `SPELL_ATTR2_FAIL_ON_ALL_TARGETS_IMMUNE: Damage reduction ability DESCRIPTION Causes BG flags to be dropped if combined with ATTR1_DISPEL_AURAS_ON_IMMUNITY`],
  ['AttributesEx2', 0x00400000n, `SPELL_ATTR2_NO_INITIAL_THREAD: Unknown attribute 22@Attr2 DESCRIPTION Ambush, Backstab, Cheap Shot, Death Grip, Garrote, Judgements, Mutilate, Pounce, Ravage, Shiv, Shred`],
  ['AttributesEx2', 0x00800000n, `SPELL_ATTR2_PROC_COOLDOWN_ON_FAILURE: Arcane Concentration`],
  ['AttributesEx2', 0x01000000n, `SPELL_ATTR2_ITEM_CAST_WITH_OWNER_SKILL: Unknown attribute 24@Attr2`],
  ['AttributesEx2', 0x02000000n, `SPELL_ATTR2_DONT_BLOCK_MANA_REGEN: Unknown attribute 25@Attr2`],
  ['AttributesEx2', 0x04000000n, `SPELL_ATTR2_NO_SCHOOL_IMMUNITIES: Pierce aura application immunities DESCRIPTION Allow aura to be applied despite target being immune to new aura applications`],
  ['AttributesEx2', 0x08000000n, `SPELL_ATTR2_IGNORE_WEAPONSKILL: Unknown attribute 27@Attr2`],
  ['AttributesEx2', 0x10000000n, `SPELL_ATTR2_NOT_AN_ACTION: Unknown attribute 28@Attr2`],
  ['AttributesEx2', 0x20000000n, `SPELL_ATTR2_CANT_CRIT: Cannot critically strike`],
  ['AttributesEx2', 0x40000000n, `SPELL_ATTR2_ACTIVE_THREAT: Allow triggered spell to trigger (type 1) DESCRIPTION Without this attribute, any triggered spell will be unable to trigger other auras' procs`],
  ['AttributesEx2', 0x80000000n, `SPELL_ATTR2_RETAIN_ITEM_CAST: Food buff (client only)`],
  ['AttributesEx3', 0x00000001n, `SPELL_ATTR3_PVP_ENABLING: Unknown attribute 0@Attr3`],
  ['AttributesEx3', 0x00000002n, `SPELL_ATTR3_NO_PROC_EQUIP_REQUIREMENT: 1 Ignores subclass mask check when checking proc`],
  ['AttributesEx3', 0x00000004n, `SPELL_ATTR3_NO_CASTING_BAR_TEXT: Unknown attribute 2@Attr3`],
  ['AttributesEx3', 0x00000008n, `SPELL_ATTR3_COMPLETELY_BLOCKED: Blockable spell`],
  ['AttributesEx3', 0x00000010n, `SPELL_ATTR3_NO_RES_TIMER: Ignore resurrection timer`],
  ['AttributesEx3', 0x00000020n, `SPELL_ATTR3_NO_DURABILITY_LOSS: Unknown attribute 5@Attr3`],
  ['AttributesEx3', 0x00000040n, `SPELL_ATTR3_NO_AVOIDANCE: Unknown attribute 6@Attr3`],
  ['AttributesEx3', 0x00000080n, `SPELL_ATTR3_DOT_STACKING_RULE: Stack separately for each caster`],
  ['AttributesEx3', 0x00000100n, `SPELL_ATTR3_ONLY_ON_PLAYER: Can only target players`],
  ['AttributesEx3', 0x00000200n, `SPELL_ATTR3_NOT_A_PROC: Allow triggered spell to trigger (type 2) DESCRIPTION Without this attribute, any triggered spell will be unable to trigger other auras' procs`],
  ['AttributesEx3', 0x00000400n, `SPELL_ATTR3_REQUIRES_MAIN_HAND_WEAPON: Require main hand weapon`],
  ['AttributesEx3', 0x00000800n, `SPELL_ATTR3_ONLY_BATTLEGROUNDS: Can only be cast in battleground`],
  ['AttributesEx3', 0x00001000n, `SPELL_ATTR3_ONLY_ON_GHOSTS: Can only target ghost players`],
  ['AttributesEx3', 0x00002000n, `SPELL_ATTR3_HIDE_CHANNEL_BAR: Do not display channel bar (client only)`],
  ['AttributesEx3', 0x00004000n, `SPELL_ATTR3_HIDE_IN_RAID_FILTER: Honorless Target`],
  ['AttributesEx3', 0x00008000n, `SPELL_ATTR3_NORMAL_RANGED_ATTACK: Unknown attribute 15@Attr3 DESCRIPTION Auto Shoot, Shoot, Throw - ranged normal attack attribute?`],
  ['AttributesEx3', 0x00010000n, `SPELL_ATTR3_SUPPRESS_CASTER_PROCS: Cannot trigger procs`],
  ['AttributesEx3', 0x00020000n, `SPELL_ATTR3_SUPPRESS_TARGET_PROCS: No initial aggro`],
  ['AttributesEx3', 0x00040000n, `SPELL_ATTR3_ALWAYS_HIT: Ignore hit result DESCRIPTION Spell cannot miss, or be dodged/parried/blocked`],
  ['AttributesEx3', 0x00080000n, `SPELL_ATTR3_INSTANT_TARGET_PROCS: Cannot trigger spells during aura proc`],
  ['AttributesEx3', 0x00100000n, `SPELL_ATTR3_ALLOW_AURA_WHILE_DEAD: Persists through death`],
  ['AttributesEx3', 0x00200000n, `SPELL_ATTR3_ONLY_PROC_OUTDOORS: Unknown attribute 21@Attr3`],
  ['AttributesEx3', 0x00400000n, `SPELL_ATTR3_CASTING_CANCELS_AUTOREPEAT: Requires equipped Wand (Mainline: Do Not Trigger Target Stand)`],
  ['AttributesEx3', 0x00800000n, `SPELL_ATTR3_NO_DAMAGE_HISTORY: Unknown attribute 23@Attr3`],
  ['AttributesEx3', 0x01000000n, `SPELL_ATTR3_REQUIRES_OFF_HAND_WEAPON: Requires offhand weapon`],
  ['AttributesEx3', 0x02000000n, `SPELL_ATTR3_TREAT_AS_PERIODIC: Treat as periodic effect`],
  ['AttributesEx3', 0x04000000n, `SPELL_ATTR3_CAN_PROC_FROM_PROCS: Can trigger from triggered spells`],
  ['AttributesEx3', 0x08000000n, `SPELL_ATTR3_ONLY_PROC_ON_CASTER: Drain Soul`],
  ['AttributesEx3', 0x10000000n, `SPELL_ATTR3_IGNORE_CASTER_AND_TARGET_RESTRICTIONS: Unknown attribute 28@Attr3`],
  ['AttributesEx3', 0x20000000n, `SPELL_ATTR3_IGNORE_CASTER_MODIFIERS: Damage dealt is unaffected by modifiers`],
  ['AttributesEx3', 0x40000000n, `SPELL_ATTR3_DO_NOT_DISPLAY_RANGE: Do not show range in tooltip (client only)`],
  ['AttributesEx3', 0x80000000n, `SPELL_ATTR3_NOT_ON_AOE_IMMUNE: Unknown attribute 31@Attr3`],
  ['AttributesEx4', 0x00000001n, `SPELL_ATTR4_NO_CAST_LOG: Cannot be resisted`],
  ['AttributesEx4', 0x00000002n, `SPELL_ATTR4_CLASS_TRIGGER_ONLY_ON_TARGET: Only proc on self-cast`],
  ['AttributesEx4', 0x00000004n, `SPELL_ATTR4_AURA_EXPIRES_OFFLINE: Buff expires while offline DESCRIPTION Debuffs (except Resurrection Sickness) will automatically do this`],
  ['AttributesEx4', 0x00000008n, `SPELL_ATTR4_NO_HELPFUL_THREAT: Unknown attribute 3@Attr4`],
  ['AttributesEx4', 0x00000010n, `SPELL_ATTR4_NO_HARMFUL_THREAT: Treat as delayed spell DESCRIPTION This will no longer cause guards to attack on use??`],
  ['AttributesEx4', 0x00000020n, `SPELL_ATTR4_ALLOW_CLIENT_TARGETING: Unknown attribute 5@Attr4`],
  ['AttributesEx4', 0x00000040n, `SPELL_ATTR4_CANNOT_BE_STOLEN: Aura cannot be stolen`],
  ['AttributesEx4', 0x00000080n, `SPELL_ATTR4_ALLOW_CAST_WHILE_CASTING: Can be cast while casting DESCRIPTION Ignores already in-progress cast and still casts`],
  ['AttributesEx4', 0x00000100n, `SPELL_ATTR4_IGNORE_DAMAGE_TAKEN_MODIFIERS: Deals fixed damage`],
  ['AttributesEx4', 0x00000200n, `SPELL_ATTR4_COMBAT_FEEDBACK_WHEN_USABLE: Spell is initially disabled (client only)`],
  ['AttributesEx4', 0x00000400n, `SPELL_ATTR4_WEAPON_SPEED_COST_SCALING: Attack speed modifies cost DESCRIPTION Adds 10 to power cost for each 1s of weapon speed`],
  ['AttributesEx4', 0x00000800n, `SPELL_ATTR4_NO_PARTIAL_IMMUNITY: Unknown attribute 11@Attr4`],
  ['AttributesEx4', 0x00001000n, `SPELL_ATTR4_AURA_IS_BUFF: Unknown attribute 12@Attr4`],
  ['AttributesEx4', 0x00002000n, `SPELL_ATTR4_DO_NOT_LOG_CASTER: Unknown attribute 13@Attr4`],
  ['AttributesEx4', 0x00004000n, `SPELL_ATTR4_REACTIVE_DAMAGE_PROC: Damage does not break auras`],
  ['AttributesEx4', 0x00008000n, `SPELL_ATTR4_NOT_IN_SPELLBOOK: Unknown attribute 15@Attr4`],
  ['AttributesEx4', 0x00010000n, `SPELL_ATTR4_NOT_IN_ARENA_OR_RATED_BATTLEGROUND: Not usable in arena DESCRIPTION Makes spell unusable despite CD <= 10min`],
  ['AttributesEx4', 0x00020000n, `SPELL_ATTR4_IGNORE_DEFAULT_ARENA_RESTRICTIONS: Usable in arena DESCRIPTION Makes spell usable despite CD > 10min`],
  ['AttributesEx4', 0x00040000n, `SPELL_ATTR4_BOUNCY_CHAIN_MISSILES: Chain area targets DESCRIPTION [NYI] Hits area targets over time instead of all at once`],
  ['AttributesEx4', 0x00080000n, `SPELL_ATTR4_ALLOW_PROC_WHILE_SITTING: Unknown attribute 19@Attr4 DESCRIPTION proc dalayed, after damage or don't proc on absorb?`],
  ['AttributesEx4', 0x00100000n, `SPELL_ATTR4_AURA_NEVER_BOUNCES: Allow self-cast to override stronger aura (client only)`],
  ['AttributesEx4', 0x00200000n, `SPELL_ATTR4_ALLOW_ENETRING_ARENA: Keep when entering arena`],
  ['AttributesEx4', 0x00400000n, `SPELL_ATTR4_PROC_SUPPRESS_SWING_ANIM: Unknown attribute 22@Attr4 DESCRIPTION Seal of Command (42058,57770) and Gymer's Smash 55426`],
  ['AttributesEx4', 0x00800000n, `SPELL_ATTR4_SUPPRESS_WEAPON_PROCS: Cannot trigger item spells`],
  ['AttributesEx4', 0x01000000n, `SPELL_ATTR4_AUTO_RANGED_COMBAT: Unknown attribute 24@Attr4 DESCRIPTION Shoot-type spell?`],
  ['AttributesEx4', 0x02000000n, `SPELL_ATTR4_OWNER_POWER_SCALING: Pet Scaling aura`],
  ['AttributesEx4', 0x04000000n, `SPELL_ATTR4_ONLY_FLYING_AREAS: Only in Outland/Northrend`],
  ['AttributesEx4', 0x08000000n, `SPELL_ATTR4_FORCE_DISPLAY_CASTBAR: Inherit critical chance from triggering aura`],
  ['AttributesEx4', 0x10000000n, `SPELL_ATTR4_IGNORE_COMBAT_TIMERS: Unknown attribute 28@Attr4 DESCRIPTION Aimed Shot`],
  ['AttributesEx4', 0x20000000n, `SPELL_ATTR4_AURA_BOUNCE_FAILS_SPELL: Unknown attribute 29@Attr4`],
  ['AttributesEx4', 0x40000000n, `SPELL_ATTR4_OBSOLETE: Unknown attribute 30@Attr4`],
  ['AttributesEx4', 0x80000000n, `SPELL_ATTR4_USE_FACING_FROM_SPELL: Unknown attribute 31@Attr4 DESCRIPTION Polymorph (chicken) 228 and Sonic Boom (38052,38488)`],
  ['AttributesEx5', 0x00000001n, `SPELL_ATTR5_ALLOW_ACTION_DURING_CHANNEL: Can be channeled while moving/casting`],
  ['AttributesEx5', 0x00000002n, `SPELL_ATTR5_NO_REAGENT_COST_WITH_AURA: No reagents during arena preparation`],
  ['AttributesEx5', 0x00000004n, `SPELL_ATTR5_REMOVE_ENTERING_ARENA: Remove when entering arena DESCRIPTION Force this aura to be removed on entering arena, regardless of other properties`],
  ['AttributesEx5', 0x00000008n, `SPELL_ATTR5_ALLOW_WHILE_STUNNED: Usable while stunned`],
  ['AttributesEx5', 0x00000010n, `SPELL_ATTR5_TRIGGERS_CHANNELING: Unknown attribute 4@Attr5`],
  ['AttributesEx5', 0x00000020n, `SPELL_ATTR5_LIMIT_N: Single-target aura DESCRIPTION Remove previous application to another unit if applied`],
  ['AttributesEx5', 0x00000040n, `SPELL_ATTR5_IGNORE_AREA_EFFECT_PVP_CHECK: Unknown attribute 6@Attr5`],
  ['AttributesEx5', 0x00000080n, `SPELL_ATTR5_NOT_ON_PLAYER: Unknown attribute 7@Attr5`],
  ['AttributesEx5', 0x00000100n, `SPELL_ATTR5_NOT_ON_PLAYER_CONTROLLED_NPC: Cannot target player controlled units but can target players`],
  ['AttributesEx5', 0x00000200n, `SPELL_ATTR5_EXTRA_INITIAL_PERIOD: Immediately do periodic tick on apply`],
  ['AttributesEx5', 0x00000400n, `SPELL_ATTR5_DO_NOT_DISPLAY_DURATION: Do not send aura duration to client`],
  ['AttributesEx5', 0x00000800n, `SPELL_ATTR5_IMPLIED_TARGETING: Auto-target target of target (client only)`],
  ['AttributesEx5', 0x00001000n, `SPELL_ATTR5_MELEE_CHAIN_TARGETING: Unknown attribute 12@Attr5 DESCRIPTION Cleave related?`],
  ['AttributesEx5', 0x00002000n, `SPELL_ATTR5_SPELL_HASTE_AFFECTS_PERIODIC: Duration scales with Haste Rating`],
  ['AttributesEx5', 0x00004000n, `SPELL_ATTR5_NOT_AVALIABLE_WHILE_CHARMED: Charmed units cannot cast this spell`],
  ['AttributesEx5', 0x00008000n, `SPELL_ATTR5_TREAT_AS_AREA_EFFECT: Unknown attribute 15@Attr5 DESCRIPTION Related to multi-target spells?`],
  ['AttributesEx5', 0x00010000n, `SPELL_ATTR5_AURA_AFFECTS_NOT_JUST_REQ_EQUIPPED_ITEM: DESCRIPTION this allows spells with EquippedItemClass to affect spells from other items if the required item is equipped`],
  ['AttributesEx5', 0x00020000n, `SPELL_ATTR5_ALLOW_WHILE_FLEEING: Usable while feared`],
  ['AttributesEx5', 0x00040000n, `SPELL_ATTR5_ALLOW_WHILE_CONFUSED: Usable while confused`],
  ['AttributesEx5', 0x00080000n, `SPELL_ATTR5_AI_DOESNT_FACE_TARGET: Do not auto-turn while casting`],
  ['AttributesEx5', 0x00100000n, `SPELL_ATTR5_DO_NOT_ATTEMPT_A_PET_RESUMMON_WHEN_DISMOUNTING: Unknown attribute 20@Attr5`],
  ['AttributesEx5', 0x00200000n, `SPELL_ATTR5_IGNORE_TARGET_REQUIREMENTS: Unknown attribute 21@Attr5`],
  ['AttributesEx5', 0x00400000n, `SPELL_ATTR5_NOT_ON_TRIVIAL: Unknown attribute 22@Attr5`],
  ['AttributesEx5', 0x00800000n, `SPELL_ATTR5_NO_PARTIAL_RESISTS: Unknown attribute 23@Attr5`],
  ['AttributesEx5', 0x01000000n, `SPELL_ATTR5_IGNORE_CASTER_REQUIREMENETS: Unknown attribute 24@Attr5`],
  ['AttributesEx5', 0x02000000n, `SPELL_ATTR5_ALWAYS_LINE_OF_SIGHT: Unknown attribute 25@Attr5`],
  ['AttributesEx5', 0x04000000n, `SPELL_ATTR5_ALWAYS_AOE_LINE_OF_SIGHT: Ignore line of sight checks`],
  ['AttributesEx5', 0x08000000n, `SPELL_ATTR5_NO_CASTER_AURA_ICON: Don't show aura if self-cast (client only)`],
  ['AttributesEx5', 0x10000000n, `SPELL_ATTR5_NO_TARGET_AURA_ICON: Don't show aura unless self-cast (client only)`],
  ['AttributesEx5', 0x20000000n, `SPELL_ATTR5_AURA_UNIQUE_PER_CASTER: Unknown attribute 29@Attr5`],
  ['AttributesEx5', 0x40000000n, `SPELL_ATTR5_ALWAYS_SHOW_GROUND_TEXTURE: Unknown attribute 30@Attr5`],
  ['AttributesEx5', 0x80000000n, `SPELL_ATTR5_ADD_MELEE_HIT_RATING: Unknown attribute 31@Attr5 DESCRIPTION Forces nearby enemies to attack caster?`],
  ['AttributesEx6', 0x00000001n, `SPELL_ATTR6_NO_COOLDOWN_ON_TOOLTIP: Don't display cooldown (client only)`],
  ['AttributesEx6', 0x00000002n, `SPELL_ATTR6_DO_NOT_RESET_COOLDOWN_IN_ARENA: Only usable in arena`],
  ['AttributesEx6', 0x00000004n, `SPELL_ATTR6_NOT_AN_ATTACK: Ignore all preventing caster auras`],
  ['AttributesEx6', 0x00000008n, `SPELL_ATTR6_CAN_ASSIST_IMMUNE_PC: Ignore immunity flags when assisting`],
  ['AttributesEx6', 0x00000010n, `SPELL_ATTR6_IGNORE_FOR_MOD_TIME_RATE: Unknown attribute 4@Attr6`],
  ['AttributesEx6', 0x00000020n, `SPELL_ATTR6_DO_NOT_CONSUME_RESOURCES: Don't consume proc charges`],
  ['AttributesEx6', 0x00000040n, `SPELL_ATTR6_FLOATING_COMBAT_TEXT_ON_CAST: Generate spell_cast event instead of aura_start (client only)`],
  ['AttributesEx6', 0x00000080n, `SPELL_ATTR6_AURA_IS_WEAPON_PROC: Unknown attribute 7@Attr6`],
  ['AttributesEx6', 0x00000100n, `SPELL_ATTR6_DO_NOT_CHAIN_TO_CROWD_CONTROLLED_TARGETS: Do not implicitly target in CC DESCRIPTION Implicit targeting (chaining and area targeting) will not impact crowd controlled targets`],
  ['AttributesEx6', 0x00000200n, `SPELL_ATTR6_ALLOW_ON_CHARMED_TARGETS: Unknown attribute 9@Attr6`],
  ['AttributesEx6', 0x00000400n, `SPELL_ATTR6_NO_AURA_LOG: Can target possessed friends DESCRIPTION [NYI]`],
  ['AttributesEx6', 0x00000800n, `SPELL_ATTR6_NOT_IN_RAID_INSTANCES: Unusable in raid instances`],
  ['AttributesEx6', 0x00001000n, `SPELL_ATTR6_ALLOW_WHILE_RIDING_VEHICLE: Castable while caster is on vehicle`],
  ['AttributesEx6', 0x00002000n, `SPELL_ATTR6_IGNORE_PHASE_SHIFT: Can target invisible units`],
  ['AttributesEx6', 0x00004000n, `SPELL_ATTR6_AI_PRIMARY_RANGED_ATTACK: Unknown attribute 14@Attr6`],
  ['AttributesEx6', 0x00008000n, `SPELL_ATTR6_NO_PUSHBACK: Not affected by pushback DESCRIPTION Casts/Channels will not affected by pushback`],
  ['AttributesEx6', 0x00010000n, `SPELL_ATTR6_NO_JUMP_PATHING: Unknown attribute 16@Attr6`],
  ['AttributesEx6', 0x00020000n, `SPELL_ATTR6_ALLOW_EQUIP_WHILE_CASTING: Unknown attribute 17@Attr6 DESCRIPTION Mount related?`],
  ['AttributesEx6', 0x00040000n, `SPELL_ATTR6_ORIGINATE_FROM_CONTROLLER: Spell is cast by charmer DESCRIPTION Client will prevent casting if not possessed, charmer will be caster for all intents and purposes`],
  ['AttributesEx6', 0x00080000n, `SPELL_ATTR6_DELAY_COMBAT_TIMER_DURING_CAST: Unknown attribute 19@Attr6 DESCRIPTION only 47488, 50782`],
  ['AttributesEx6', 0x00100000n, `SPELL_ATTR6_AURA_ICON_ONLY_FOR_CASTER: Only visible to caster (client only) (LIMIT 10)`],
  ['AttributesEx6', 0x00200000n, `SPELL_ATTR6_SHOW_MECHANIC_AS_COMBAT_TEXT: Client UI target effects (client only)`],
  ['AttributesEx6', 0x00400000n, `SPELL_ATTR6_ABSORB_CANNOT_BE_IGNORED: Unknown attribute 22@Attr6 DESCRIPTION only 72054`],
  ['AttributesEx6', 0x00800000n, `SPELL_ATTR6_TAPS_IMMEDIATELY: Unknown attribute 23@Attr6`],
  ['AttributesEx6', 0x01000000n, `SPELL_ATTR6_CAN_TARGET_UNTARGETABLE: Can target untargetable units`],
  ['AttributesEx6', 0x02000000n, `SPELL_ATTR6_DOESNT_RESET_SWING_TIMER_IF_INSTANT: Do not reset swing timer if cast time is instant`],
  ['AttributesEx6', 0x04000000n, `SPELL_ATTR6_VEHICLE_IMMUNITY_CATEGORY: Unknown attribute 26@Attr6 DESCRIPTION Player castable buff?`],
  ['AttributesEx6', 0x08000000n, `SPELL_ATTR6_IGNORE_HEALTH_MODIFIERS: Limit applicable %healing modifiers DESCRIPTION This prevents certain healing modifiers from applying - see implementation if you really care about details`],
  ['AttributesEx6', 0x10000000n, `SPELL_ATTR6_DO_NOT_SELECT_TARGET_WITH_INITIATES_COMBAT: Unknown attribute 28@Attr6 DESCRIPTION Death grip?`],
  ['AttributesEx6', 0x20000000n, `SPELL_ATTR6_IGNORE_CASTER_DAMAGE_MODIFIERS: Limit applicable %damage modifiers DESCRIPTION This prevents certain damage modifiers from applying - see implementation if you really care about details`],
  ['AttributesEx6', 0x40000000n, `SPELL_ATTR6_DISABLE_TIED_EFFECT_POINTS: Unknown attribute 30@Attr6`],
  ['AttributesEx6', 0x80000000n, `SPELL_ATTR6_NO_CATEGORY_COOLDOWN_MODS: Ignore cooldown modifiers for category cooldown`],
  ['AttributesEx7', 0x00000001n, `SPELL_ATTR7_ALLOW_SPELL_REFLECTION: Unknown attribute 0@Attr7 DESCRIPTION Shaman's new spells (Call of the ...), Feign Death.`],
  ['AttributesEx7', 0x00000002n, `SPELL_ATTR7_NO_TARGET_DURATION_MOD: Ignore duration modifiers`],
  ['AttributesEx7', 0x00000004n, `SPELL_ATTR7_DISABLE_AURA_WHILE_DEAD: Reactivate at resurrect (client only)`],
  ['AttributesEx7', 0x00000008n, `SPELL_ATTR7_DEBUG_SPELL: Is cheat spell DESCRIPTION Cannot cast if caster doesn't have UnitFlag2 & UNIT_FLAG2_ALLOW_CHEAT_SPELLS`],
  ['AttributesEx7', 0x00000010n, `SPELL_ATTR7_TREAT_AS_RAID_BUFF: Unknown attribute 4@Attr7 DESCRIPTION Soulstone related?`],
  ['AttributesEx7', 0x00000020n, `SPELL_ATTR7_CAN_BE_MULTI_CAST: Summons player-owned totem`],
  ['AttributesEx7', 0x00000040n, `SPELL_ATTR7_DONT_CAUSE_SPELL_PUSHBACK: Damage dealt by this does not cause spell pushback`],
  ['AttributesEx7', 0x00000080n, `SPELL_ATTR7_PREPARE_FOR_VEHICLE_CONTROL_END: Unknown attribute 7@Attr7 DESCRIPTION 66218 (Launch) spell.`],
  ['AttributesEx7', 0x00000100n, `SPELL_ATTR7_HORDE_SPECIFIC_SPELL: Horde only`],
  ['AttributesEx7', 0x00000200n, `SPELL_ATTR7_ALLIANCE_SPECIFIC_SPELL: Alliance only`],
  ['AttributesEx7', 0x00000400n, `SPELL_ATTR7_DISPEL_REMOVES_CHARGES: Dispel/Spellsteal remove individual charges`],
  ['AttributesEx7', 0x00000800n, `SPELL_ATTR7_CAN_CAUSE_INTERRUPT: Only interrupt non-player casting`],
  ['AttributesEx7', 0x00001000n, `SPELL_ATTR7_CAN_CAUSE_SILENCE: Unknown attribute 12@Attr7 DESCRIPTION Not set in 3.2.2a.`],
  ['AttributesEx7', 0x00002000n, `SPELL_ATTR7_NO_UI_NOT_INTERRUPTIBLE: Unknown attribute 13@Attr7 DESCRIPTION Not set in 3.2.2a.`],
  ['AttributesEx7', 0x00004000n, `SPELL_ATTR7_RECAST_ON_RESUMMON: Unknown attribute 14@Attr7 DESCRIPTION Only 52150 (Raise Dead - Pet) spell.`],
  ['AttributesEx7', 0x00008000n, `SPELL_ATTR7_RESET_SWING_TIMER_AT_SPELL_START: Unknown attribute 15@Attr7 DESCRIPTION Exorcism - guaranteed crit vs families?`],
  ['AttributesEx7', 0x00010000n, `SPELL_ATTR7_ONLY_IN_SPELLBOOK_UNTIL_LEARNED: Can restore secondary power DESCRIPTION Only spells with this attribute can replenish a non-active power type`],
  ['AttributesEx7', 0x00020000n, `SPELL_ATTR7_DO_NOT_LOG_PVP_KILL: Unknown attribute 17@Attr7 DESCRIPTION Only 27965 (Suicide) spell.`],
  ['AttributesEx7', 0x00040000n, `SPELL_ATTR7_ATTACK_ON_CHARGE_TO_UNIT: Has charge effect`],
  ['AttributesEx7', 0x00080000n, `SPELL_ATTR7_REPORT_SPELL_FAILURE_TO_UNIT_TARGET: Is zone teleport`],
  ['AttributesEx7', 0x00100000n, `SPELL_ATTR7_NO_CLIENT_FAIL_WHILE_STUNNED_FLEEING_CONFUSED: Unknown attribute 20@Attr7 DESCRIPTION Invulnerability related?`],
  ['AttributesEx7', 0x00200000n, `SPELL_ATTR7_RETAIN_COOLDOWN_THROUGH_LOAD: Unknown attribute 21@Attr7`],
  ['AttributesEx7', 0x00400000n, `SPELL_ATTR7_IGNORES_COLD_WEATHER_FLYING_REQUIREMENT: Ignore cold weather flying restriction DESCRIPTION Set for loaner mounts, allows them to be used despite lacking required flight skill`],
  ['AttributesEx7', 0x00800000n, `SPELL_ATTR7_NO_ATTACK_DODGE: Spell cannot be dodged 23@Attr7 DESCRIPTION Motivate, Mutilate, Shattering Throw`],
  ['AttributesEx7', 0x01000000n, `SPELL_ATTR7_NO_ATTACK_PARRY: Spell cannot be parried 24@Attr7 DESCRIPTION Motivate, Mutilate, Perform Speech, Shattering Throw`],
  ['AttributesEx7', 0x02000000n, `SPELL_ATTR7_NO_ATTACK_MISS: Spell cannot be missed 25@Attr7`],
  ['AttributesEx7', 0x04000000n, `SPELL_ATTR7_TREAT_AS_NPC_AOE: Unknown attribute 26@Attr7`],
  ['AttributesEx7', 0x08000000n, `SPELL_ATTR7_BYPASS_NO_RESURRECTION_AURA: Bypasses the prevent resurrection aura`],
  ['AttributesEx7', 0x10000000n, `SPELL_ATTR7_DO_NOT_COUNT_FOR_PVP_SCOREBOARD: Consolidate in raid buff frame (client only)`],
  ['AttributesEx7', 0x20000000n, `SPELL_ATTR7_REFLECTION_ONLY_DEFENDS: Unknown attribute 29@Attr7 DESCRIPTION only 69028, 71237`],
  ['AttributesEx7', 0x40000000n, `SPELL_ATTR7_CAN_PROC_FROM_SUPPRESSED_TARGET_PROCS: Unknown attribute 30@Attr7 DESCRIPTION Burning Determination, Divine Sacrifice, Earth Shield, Prayer of Mending`],
  ['AttributesEx7', 0x80000000n, `SPELL_ATTR7_ALWAYS_CAST_LOG: Client indicator (client only)`],
]

const print = (spell, key, alias = key) => spell[key] && console.log(`${alias}:`, spell[key])

function spellInfo(id) {
  const { DurationIndex, ...spell } = spells.byIds.get(id)
  if (!spell) return console.log(`spellId: ${id} not found`)
  print(spell, 'Name_Lang_enUS', 'Name')
  print(spell, 'Description_Lang_enUS', 'Description')
  print(spell, 'AuraDescription_Lang_enUS', 'AuraDescription')
  const appliedAttrs = attributes.filter(([key, flag, desc]) => BigInt(spell[key]) & flag)
  if (appliedAttrs.length) {
    console.log('Attributes:')
    console.log(appliedAttrs.map(a => `  - ${a[2]}`).join('\n'))
  }
  const duration = durations.byIds.get(spell.DurationIndex)
  if (duration) {
    console.log('Duration:', duration)
  }
  for (const [k, value] of Object.entries(spell)) {
    if (!value || value === -1) continue
    console.log(`${k}:`, value)
  }
  console.log(durations.rows.filter(r => r.Duration === 9000))
  // console.log(Number(BigInt(spell.Attributes) | 0x00000080n | 0x00000100n))
}

spellInfo(28880)