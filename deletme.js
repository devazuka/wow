const flags = {
  SPELL_ATTR7_ALLOW_SPELL_REFLECTION:                        0x00000001, // TITLE Unknown attribute 0@Attr7 DESCRIPTION Shaman's new spells (Call of the ...), Feign Death.
  SPELL_ATTR7_NO_TARGET_DURATION_MOD:                        0x00000002, // TITLE Ignore duration modifiers
  SPELL_ATTR7_DISABLE_AURA_WHILE_DEAD:                       0x00000004, // TITLE Reactivate at resurrect (client only)
  SPELL_ATTR7_DEBUG_SPELL:                                   0x00000008, // TITLE Is cheat spell DESCRIPTION Cannot cast if caster doesn't have UnitFlag2 & UNIT_FLAG2_ALLOW_CHEAT_SPELLS
  SPELL_ATTR7_TREAT_AS_RAID_BUFF:                            0x00000010, // TITLE Unknown attribute 4@Attr7 DESCRIPTION Soulstone related?
  SPELL_ATTR7_CAN_BE_MULTI_CAST:                             0x00000020, // TITLE Summons player-owned totem
  SPELL_ATTR7_DONT_CAUSE_SPELL_PUSHBACK:                     0x00000040, // TITLE Damage dealt by this does not cause spell pushback
  SPELL_ATTR7_PREPARE_FOR_VEHICLE_CONTROL_END:               0x00000080, // TITLE Unknown attribute 7@Attr7 DESCRIPTION 66218 (Launch) spell.
  SPELL_ATTR7_HORDE_SPECIFIC_SPELL:                          0x00000100, // TITLE Horde only
  SPELL_ATTR7_ALLIANCE_SPECIFIC_SPELL:                       0x00000200, // TITLE Alliance only
  SPELL_ATTR7_DISPEL_REMOVES_CHARGES:                        0x00000400, // TITLE Dispel/Spellsteal remove individual charges
  SPELL_ATTR7_CAN_CAUSE_INTERRUPT:                           0x00000800, // TITLE Only interrupt non-player casting
  SPELL_ATTR7_CAN_CAUSE_SILENCE:                             0x00001000, // TITLE Unknown attribute 12@Attr7 DESCRIPTION Not set in 3.2.2a.
  SPELL_ATTR7_NO_UI_NOT_INTERRUPTIBLE:                       0x00002000, // TITLE Unknown attribute 13@Attr7 DESCRIPTION Not set in 3.2.2a.
  SPELL_ATTR7_RECAST_ON_RESUMMON:                            0x00004000, // TITLE Unknown attribute 14@Attr7 DESCRIPTION Only 52150 (Raise Dead - Pet) spell.
  SPELL_ATTR7_RESET_SWING_TIMER_AT_SPELL_START:              0x00008000, // TITLE Unknown attribute 15@Attr7 DESCRIPTION Exorcism - guaranteed crit vs families?
  SPELL_ATTR7_ONLY_IN_SPELLBOOK_UNTIL_LEARNED:               0x00010000, // TITLE Can restore secondary power DESCRIPTION Only spells with this attribute can replenish a non-active power type
  SPELL_ATTR7_DO_NOT_LOG_PVP_KILL:                           0x00020000, // TITLE Unknown attribute 17@Attr7 DESCRIPTION Only 27965 (Suicide) spell.
  SPELL_ATTR7_ATTACK_ON_CHARGE_TO_UNIT:                      0x00040000, // TITLE Has charge effect
  SPELL_ATTR7_REPORT_SPELL_FAILURE_TO_UNIT_TARGET:           0x00080000, // TITLE Is zone teleport
  SPELL_ATTR7_NO_CLIENT_FAIL_WHILE_STUNNED_FLEEING_CONFUSED: 0x00100000, // TITLE Unknown attribute 20@Attr7 DESCRIPTION Invulnerability related?
  SPELL_ATTR7_RETAIN_COOLDOWN_THROUGH_LOAD:                  0x00200000, // TITLE Unknown attribute 21@Attr7
  SPELL_ATTR7_IGNORES_COLD_WEATHER_FLYING_REQUIREMENT:       0x00400000, // TITLE Ignore cold weather flying restriction DESCRIPTION Set for loaner mounts, allows them to be used despite lacking required flight skill
  SPELL_ATTR7_NO_ATTACK_DODGE:                               0x00800000, // TITLE Spell cannot be dodged 23@Attr7 DESCRIPTION Motivate, Mutilate, Shattering Throw
  SPELL_ATTR7_NO_ATTACK_PARRY:                               0x01000000, // TITLE Spell cannot be parried 24@Attr7 DESCRIPTION Motivate, Mutilate, Perform Speech, Shattering Throw
  SPELL_ATTR7_NO_ATTACK_MISS:                                0x02000000, // TITLE Spell cannot be missed 25@Attr7
  SPELL_ATTR7_TREAT_AS_NPC_AOE:                              0x04000000, // TITLE Unknown attribute 26@Attr7
  SPELL_ATTR7_BYPASS_NO_RESURRECTION_AURA:                   0x08000000, // TITLE Bypasses the prevent resurrection aura
  SPELL_ATTR7_DO_NOT_COUNT_FOR_PVP_SCOREBOARD:               0x10000000, // TITLE Consolidate in raid buff frame (client only)
  SPELL_ATTR7_REFLECTION_ONLY_DEFENDS:                       0x20000000, // TITLE Unknown attribute 29@Attr7 DESCRIPTION only 69028, 71237
  SPELL_ATTR7_CAN_PROC_FROM_SUPPRESSED_TARGET_PROCS:         0x40000000, // TITLE Unknown attribute 30@Attr7 DESCRIPTION Burning Determination, Divine Sacrifice, Earth Shield, Prayer of Mending
  SPELL_ATTR7_ALWAYS_CAST_LOG:                               0x80000000  // TITLE Client indicator (client only)
}

for (const [name, flag] of Object.entries(flags)) {
  
  if (8388608 & flag) {
    console.log({ name })
  }
}