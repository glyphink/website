/**
 * @file Enums - EnterKeyHint
 * @module website/theme/enums/EnterKeyHint
 */

/**
 * Values used to hint what action label (or icon) to use to represent the enter
 * key on virtual keyboards.
 *
 * @enum {Lowercase<string>}
 */
enum EnterKeyHint {
  done = 'done',
  enter = 'enter',
  go = 'go',
  next = 'next',
  previous = 'previous',
  search = 'search',
  send = 'send'
}

export default EnterKeyHint
