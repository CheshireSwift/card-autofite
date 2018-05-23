/* @flow */
export const EventTypes = {
  TURN_START: 'TURN_START',
  DAMAGE: 'DAMAGE',
  DEATH: 'DEATH',
  OVERHEAL: 'OVERHEAL',
}

export type EventType = $Values<typeof EventTypes>

export default EventTypes
