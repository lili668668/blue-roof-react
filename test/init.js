import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import jsdom, { JSDOM } from 'jsdom'

configure({ adapter: new Adapter() })

/*if (typeof document === 'undefined') {
  global.document = (new JSDOM('<!doctype html><html><head></head><body></body></html>')).window.document
  global.window = document.defaultView
  global.navigator = global.window.navigator
}*/
