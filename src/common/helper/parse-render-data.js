import {camelize} from '../lang/string'

export default function parseRenderData (data = {}, events = {}) {
  events = parseEvents(events)
  const props = {...data}
  const on = {}
  for (const name in events) {
    if (events.hasOwnProperty(name)) {
      const handlerName = events[name]
      if (props[handlerName]) {
        on[name] = props[handlerName]
        delete props[handlerName]
      }
    }
  }
  return {
    props,
    on
  }
}

function parseEvents (events) {
  const parseEvents = {}
  events.forEach((name) => {
    parseEvents[name] = camelize(`on-${name}`)
  })
  return parseEvents
}
