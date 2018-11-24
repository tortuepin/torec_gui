/*
 * action type
 */
export const CHANGE_TEXT = 'CHANGE_TEXT'


/*
 * action creator
 */
export function changeText(text){
  return { type: CHANGE_TEXT, text }
}
